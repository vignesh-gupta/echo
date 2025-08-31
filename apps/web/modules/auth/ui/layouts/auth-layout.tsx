import { ReactNode } from "react";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen min-w-screen flex flex-col items-center justify-center h-full">
      {children}
    </div>
  );
};

export default AuthLayout;
