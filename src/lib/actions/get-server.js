"use server";
import { getCookie } from "cookies-next";
import { BASE_URL } from "../utils";

export const GetDataInServer = async ({ path }) => {
    try {
      const response = await fetch(`${BASE_URL}${path}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `JWT ${getCookie("token", { cookies })}`,
        },
      });
      const data = await response.json();
  
      if (response.ok) {
        return data;
      } else if (response.status === 403) {
        return {
          error: data.detail || "You are not authorized to perform this action",
        };
      } else {
        return {
          error: data.detail || "Something went wrong",
        };
      }
    } catch (error) {
      return {
        error: error.message || "Something went wrong please try again later !!!",
      };
    }
  };