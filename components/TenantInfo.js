import { useTenant } from "../hooks/useTenant";

export const TenantInfo = () => {
  const [data] = useTenant();
  let { id, name, notification_level, locked, unlocked } = data;

  return (
    <div>
      <div className="flex column">
        <span>
          <strong>Tenant: </strong>
          {name}
        </span>
      </div>
    </div>
  );
};
