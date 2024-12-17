export const viewPendingStudentsFields = [
    {
        id: "image",
        name: "image",  // Add `name` here to match state
        label: "Student Name",
        placeholder: "Enter your name",
        type: "image",
        disabled: true,
      },
    {
      id: "full_name",
      name: "full_name",  // Add `name` here to match state
      label: "Student Name",
      placeholder: "Enter your name",
      type: "text",
      disabled: true,
    },
    {
      id:"phone_number",
      name: "phone_number",  // Add `name` here to match state
      label: "Phone Number",
      placeholder: "Enter your phone number",
      type: "phone",
      disabled: true,
    },
    {
      id: "age",
      name: "age",  // Add `name` here to match state
      label: "Age",
      placeholder: "Enter your age",
      type: "number",
      disabled: true,
    },
    {
      id: "email",
      name: "email",  // Add `name` here to match state
      label: "E-mail address",
      placeholder: "Enter your email",
      type: "email",
      disabled: true,
    },
    {
      id:"gender",
      name: "gender",  // Add `name` here to match state
      label: "Gender",
      placeholder: "select your gender",
      type: "selected",
      options: ["Male", "Female", "Other"],
      disabled: true,
    },{
        id: "interview_time",
        name: "interview_time",  // Add `name` here to match state
        label: "Interview Time",
        placeholder: "Enter your interview time",
        type: "time",
        disabled: false,
    }
    
  ];