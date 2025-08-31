"use client";

import { Authenticated, AuthLoading, Unauthenticated } from "convex/react";
import React, { ReactNode } from "react";
import { AuthLayout } from "../layouts/auth-layout";
import { SignInView } from "../views/sign-in-view";

export const AuthGuard = ({ children }: { children: ReactNode }) => {
  console.log("Rendering AuthGuard");
  
  return (
    <>
      <AuthLoading>
        <AuthLayout>Loading...</AuthLayout>
      </AuthLoading>
      <Authenticated>{children}</Authenticated>
      <Unauthenticated>
        <AuthLoading>
          <SignInView />
        </AuthLoading>
      </Unauthenticated>
    </>
  );
};
