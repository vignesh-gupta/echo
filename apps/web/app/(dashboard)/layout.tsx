import { AuthGuard } from "@/modules/auth/ui/components/auth-guard";
import React, { ReactNode } from "react";

const MainLayout = ({ children }: { children: ReactNode }) => {
  return <AuthGuard>{children}</AuthGuard>;
};

export default MainLayout;
