"use client";

import { OrganizationSwitcher, SignInButton, UserButton } from "@clerk/nextjs";
import { api } from "@echo/backend/_generated/api";
import { Authenticated, Unauthenticated, useQuery } from "convex/react";

export default function Page() {
  const users = useQuery(api.users.getMany);

  return (
    <div className="flex flex-col gap-4 items-center justify-center min-h-svh">
      <p>app/web</p>
      <UserButton />
      <OrganizationSwitcher hidePersonal />
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">Hello app/web</h1>
        <span>{JSON.stringify(users)}</span>
      </div>
    </div>
  );
}
