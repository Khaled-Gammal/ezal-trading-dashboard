'use server';
import { getCookie } from "cookies-next";
import { BASE_URL } from "../utils";
import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";

export async function handlePostInServer(End_Point,data,path,dataType = "formData") {
console.log(End_Point, "End_Point=>", path, "path=>", data, "data=>",dataType,"dataType=>");
     const formData = new FormData();
    try {
      if (dataType === "formData") {
        for (let key in data) {
          formData.append(key, data[key]);
        }
    }

    console.log("data=> ", data,formData);
      const response = await fetch(BASE_URL + End_Point, {
        method: "POST",
        body:dataType === "formData" ? formData : data,
        headers: {
          
          Authorization: `Token ${getCookie("token", { cookies })}`,
        },
      });
  
      const res = await response.json();
      console.log(res);
  
      if (response.ok) {
        revalidatePath(path);
        return {
          success: res.message || "Item added successfully",
          data: res.data,
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