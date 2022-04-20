import axios from "axios";
import { from, fromEvent, of } from "rxjs";
import { switchMap, filter, map, tap } from "rxjs/operators";


const EnvironmentConfig = {
    cenitHost: 'http://127.0.0.1:3001', // TODO Configure via environment
    timeoutSpan: 3000,
};

export const Config = EnvironmentConfig;

const apiGateway = axios.create({
    baseURL: `${Config.cenitHost}/api/v3`,
    timeout: Config.timeoutSpan,
});

apiGateway.interceptors.request.use(async config => {
    const accessToken = await AuthorizationService.getAccessToken().toPromise();
    if (!config.headers) {
        config.headers = {};
    }
    config.headers.Authorization = `Bearer ${accessToken}`;
    const xTenantId = AuthorizationService.getXTenantId();
    if (xTenantId) {
        config.headers['X-Tenant-Id'] = xTenantId;
    }

    return config;
});

export const AccessKey = 'access';

const AuthorizationService = {

    getXTenantId: function () {
        return this.xTenantId;
    },

    setXTenantId: function (id) {
        this.xTenantId = id;
    },

    getTenantAccess: function () {
        let access;
        try {
            access = this[AccessKey];
            let expirationDate = new Date(access.created_at + access.expires_in + Config.timeoutSpan);
            if (expirationDate < new Date()) {
                access = null;
            }
        } catch (e) {
            access = null;
        }

        if (access) {
            return of({ access, tenantId: this.getXTenantId() });
        }

        window.parent.postMessage({
            cmd: 'getAccess',
            token: this.token
        }, '*');

        return fromEvent(window, 'message').pipe(
            map(({ data }) => data || {}),
            filter(({ access }) => access),
            tap(({ access, tenantId }) => {
                this[AccessKey] = access;
                this.setXTenantId(tenantId);
            }),
        )
    },

    getAccess: function () {
        return this.getTenantAccess().pipe(
            map(({ access }) => access)
        );
    },

    getAccessToken: function () {
        return this.getAccess().pipe(
            map(access => (access && access.access_token) || null)
        );
    },

    get: function (path) {
        return from(apiGateway.get(path)).pipe(
            map(response => response.data)
        );
    },

    post: function (path, data = null) {
        return from(apiGateway.post(path, data)).pipe(
            map(response => response.data)
        );
    },

    delete: function (path, data = null) {
        return from(apiGateway.delete(path, { data })).pipe(
            map(response => response.data)
        );
    },

    request: function (opts) {
        if (opts.path) {
            opts = { ...opts, url: `${Config.cenitHost}${opts.path}` }
        }
        return this.getAccess().pipe(
            switchMap(
                access => {
                    const headers = { ...opts.headers };
                    headers.Authorization = `Bearer ${access.access_token}`;
                    opts = { ...opts, headers };
                    return from(axios(opts));
                }
            ),
            map(
                response => response.data
            )
        );
    }
};

export default AuthorizationService;
