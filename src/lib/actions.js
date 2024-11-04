"use server";
import { setCookie } from "cookies-next";
import { redirect } from "next/navigation";

const { Expired_time, BASE_URL } = require("./utils");

function ISValidEmail(email) {
   return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
}

function ISValidPassword(password) {
  //  return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
}
// login-form.jsx
async function handleLogin({ email, password }) {
 
  // ######### Validation #########

  if (!ISValidEmail(email)) {
    return { email: "Email is not valid" };
  }
  if (ISValidPassword(password)) {
    return {
      password:
        "Password is not valid must have at least one Uppercase & lowercase ",
    };
  }
  // ######### Post Actions #########
  else {
    let redirectPath;
    try {
      const response = await fetch(BASE_URL + "/hr/employees/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
console.log(JSON.stringify({ email, password }));
      if (response.status === 200) {
        setCookie("token", data?.token, { cookies }, Expired_time);
        redirectPath = `/`;
        return { success: "User created successfully" };
      } else if (response.status === 400) {
        return { email: data?.email , password: data?.password };
      }else if (response.status === 401) {
        return { message: data?.detail };
      } else {
        return { message: "Something went wrong please try again later" };
      }
    } catch (error) {
      console.log("Error", error);
      return { message: error.message || "An error occurred" };
    } finally {
      if (redirectPath) {
        redirect(redirectPath);
      }
    }
  }
}
export { handleLogin };
