import { useEffect, useState } from "react";
import AuthorizationService from "../services/AuthorizationService";

export const useCenitGet = (url) => {
  const [data, setData] = useState({});

  useEffect(() => {
    const subscription = AuthorizationService.get(url).subscribe((data) =>
      setData(data)
    );

    return () => subscription.unsubscribe();
  }, []);

  return [data];
};
