"use client";

import { Authenticated, AuthLoading, Unauthenticated } from "convex/react";
import { ReactNode } from "react";
import AuthLayout from "../layouts/auth-layout";
import { SignInView } from "../views/sign-in-view";

export const AuthGuard = ({ children }: { children: ReactNode }) => {
  console.log("Rendering AuthGuard");

  return (
    <>
      <AuthLoading>
        <AuthLayout>
          <AuthLayout>
            <p>Loading...</p>
          </AuthLayout>
        </AuthLayout>
      </AuthLoading>
      <Authenticated>{children}</Authenticated>
      <Unauthenticated>
        <AuthLoading>
          <AuthLayout>
            <SignInView />
          </AuthLayout>
        </AuthLoading>
      </Unauthenticated>
    </>
  );
};
