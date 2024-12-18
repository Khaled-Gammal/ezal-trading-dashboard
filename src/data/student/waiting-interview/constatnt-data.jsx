export const viewWaittingStudentsFields = [
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
    },
    {
      id:"id",
      name: "department_id",  // Add `name` here to match state
      label: "Section",
      placeholder: "select your section",
      type: "selected",
      path: "/dashboard/sections/",
      view: "name",
      options: [],
      renderValue: ( options,value) => {
        console.log(options,value);
        const section = options?.find((option) => option?.id === Number(value))?.name;
        return section ? section : "Select your section";
      },
      required: true,
    },
    {
      id: "group_id",
      name: "group_id", // Add `name` here to match state
      label: "Group Name",
      placeholder: "Select group name",
      type: "selected",
      path:'/dashboard/groups/',
      view:'name',
      options: [],
      renderValue: (options, value) => {  
        console.log(value);
        const group = options?.find((option) => option?.id === Number(value))?.name;
        return group ? group : "Select your group";
      },
      required: true,
    },
  ];