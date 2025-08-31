import { SignIn } from "@clerk/nextjs";

export const SignInView = () => {
  console.log("Rendering SignIn component");

  return <SignIn routing="hash" />;
};
