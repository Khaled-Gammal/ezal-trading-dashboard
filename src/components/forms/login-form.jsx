"use client";

import { handleLogin } from "@/lib/actions";
import InputField from "../shared/input-field";
import PasswordField from "../shared/password-field";
import { Button } from "../ui/button";
import { toast } from "sonner";


export default function LoginForm() {
  
  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");
    try {
      const res = await handleLogin({ email, password });
      if (res?.success) {
        toast.success(res.success);
      } else {
        Object.keys(res).forEach((key) => {
          if (key === "email") {
            toast.error(res.email);
          }
          if (key === "password") {
            toast.error(res.password);
          }
          if (key === "message") {
            toast.error(res.message);
          }
        });
      }
    } catch (error) {
      toast.error(error);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center gap-6 w-full px-4"
    >
      <InputField
        name="email"
        type="email"
        label="Email Address"
        placeholder="Enter your email"
        className={"w-full md:w-[492px]"}
        
      />
      <PasswordField
        name="password"
        label="Password"
        placeholder="Enter your password"
        type="password"
        className={"w-full md:w-[492px]"}
      />
      <Button className="mt-4 md:w-[310px] sm:w-[50%]" type="submit">
        Login
      </Button>
    </form>
  );
}
