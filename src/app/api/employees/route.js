import { BASE_URL } from "@/lib/utils";

export async function GET(request) {
  console.log(request);
  try {
    const res = await fetch(`${BASE_URL}hr/employees/`, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzM1MzgwODI1LCJpYXQiOjE3MzAxOTY4MjUsImp0aSI6IjA0ZWY4NmIzMTEzZDRmODlhMzJlZTQ1OGEyYTNjNGE5IiwidXNlcl9pZCI6MTYzfQ.Wo9EoUYC1cK2kPp_Zu54B7UPJ1DB-_fkSG0rWWgmaxc`,
      },
    });
    const data = await res.json();
    return Response.json({
      data,
      status: 200
    })
  } catch (error) {
    return Response.json({
      status: 500,
    })
  }
}


