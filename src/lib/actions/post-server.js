import { getCookie } from "cookies-next";
import { BASE_URL } from "../utils";

export async function handlePostInServer(End_Point, data) {
    try {
      const response = await fetch(BASE_URL + End_Point, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getCookie("token", { cookies })}`,
        },
      });
  
      const res = await response.json();
      console.log(res);
  
      if (response.ok) {
        revalidatePath("page");
        return {
          success: "Items Added successfully",
          data: res,
        };
      } else if (response.status === 403) {
        return {
          error: res.detail || "You are not authorized to perform this action",
        };
      } else if (response.status === 400) {
        return {
          error: res.message || "Something went wrong",
        };
      } else {
        return {
          error: res.detail || "Something went wrong",
        };
      }
    } catch (error) {
      return {
        error: error.message || "Something went wrong please try again later !!!",
      };
    }
  }