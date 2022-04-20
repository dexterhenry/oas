import { useEffect, useState } from "react";
import AuthorizationService from "../services/AuthorizationService";

export const useTenant = () => {
  const [data, setData] = useState({});

  let url = `setup/account/${AuthorizationService.getXTenantId()}`;

  useEffect(() => {
    const subscription = AuthorizationService.get(url).subscribe((data) =>
      setData(data)
    );

    return () => subscription.unsubscribe();
  }, []);

  return [data];
};
