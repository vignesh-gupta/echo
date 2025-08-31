"use client";

import { useOrganization } from "@clerk/nextjs";
import { PropsWithChildren } from "react";
import AuthLayout from "../layouts/auth-layout";
import OrgSelectView from "../views/org-select-view";

const OrganizationGuard = ({ children }: PropsWithChildren) => {
  const { organization } = useOrganization();

  if (!organization) {
    return (
      <AuthLayout>
        <OrgSelectView />
      </AuthLayout>
    );
  }

  return <div>{children}</div>;
};

export default OrganizationGuard;
