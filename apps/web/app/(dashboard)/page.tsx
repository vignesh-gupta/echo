"use client";

import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";
import { api } from "@echo/backend/_generated/api";
import { Button } from "@echo/ui/components/button";
import { useMutation, useQuery } from "convex/react";

export default function Page() {
  const users = useQuery(api.users.getMany);
  const addUser = useMutation(api.users.add);

  return (
    <div className="flex flex-col gap-4 items-center justify-center min-h-svh">
      <p>app/web</p>
      <Button onClick={() => addUser()}>Add User</Button>
      <UserButton />
      <OrganizationSwitcher hidePersonal />
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">Hello app/web</h1>
        <span className="max-w-3xl">{JSON.stringify(users)}</span>
      </div>
    </div>
  );
}
