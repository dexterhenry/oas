import { useEffect, useState } from "react";
import { catchError } from "rxjs/operators";
import { of } from "rxjs";
import QueryString from 'querystring';

import AuthorizationService from "../services/AuthorizationService";

export const useAuthorization = () => {
  const [authorizing, setAuthorizing] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (authorizing) {
      const params = QueryString.parse(
        window.location.search.slice(1, window.location.search.length)
      );

      AuthorizationService.token = params.token;

      const subscription = AuthorizationService.getAccess()
        .pipe(
          catchError(() => {
            setError(true);
            return of(null);
          })
        )
        .subscribe((access) => access && setAuthorizing(false));

      return () => subscription.unsubscribe();
    }
  }, [authorizing]);

  return [authorizing, error];
};
