"use server";
import { setCookie } from "cookies-next";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
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
    // Handle invalid email
    return { status: 400, message: "Email is not valid" };
  }
  if (ISValidPassword(password)) {
    // Handle invalid password
    return {
      status: 400,
      message: "Password must have at least one uppercase, one lowercase, and one number",
    };
  }

  // ######### Post Actions #########
  let redirectPath;
  try {
    const response = await fetch(BASE_URL + "/dashboard/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();

    if (response.status === 200) {
      setCookie("token", data?.token, { cookies }, Expired_time);
      redirectPath = `/`;
      return {
        status: 200,
        success: "User logged in successfully" };  // This will be used for success
    } else if (response.status === 400) {
      return {
        status: 400,
        message: data.error,
      };
    } else if (response.status === 401) {
      return { message: data?.detail };
    } else {
      return { message: "Something went wrong, please try again later" };
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

export { handleLogin };
