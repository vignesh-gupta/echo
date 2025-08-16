import { ReactNode } from "react";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-dvh flex justify-center items-center">{children}</div>
  );
};

export default AuthLayout;
