import React from "react";
import { useAuthorization } from "../hooks/useAuthorization";
import { TenantInfo } from "./TenantInfo";

export const ShowTenant = () => {
  const [authorizing, error] = useAuthorization();

  if (authorizing) return <p> authorizing.....</p>;
  if (error) return <p> error.....</p>;

  return <TenantInfo />;
};
