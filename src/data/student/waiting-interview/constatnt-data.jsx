export const viewWaitingStudentsFields = [
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
      id:"phone",
      name: "phone",  // Add `name` here to match state
      label: "Phone Number",
      placeholder: "Enter your phone number",
      type: "phone",
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
      id:"student_code",
      name: "code",  // Add `name` here to match state
      label: "Student Code",
      placeholder: "Enter your student code",
      type: "text",
      required: true,
    },
    // {
    //   id:"id",
    //   name: "department_id",  // Add `name` here to match state
    //   label: "Section",
    //   placeholder: "select your section",
    //   type: "selected",
    //   path: "/dashboard/sections/",
    //   view: "name",
    //   options: [],
    //   renderValue: ( options,value) => {
    //     const section = options?.find((option) => option?.id === Number(value))?.name;
    //     return section ? section : "Select your section";
    //   },
    //   required: true,
    // },
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
        const department = options?.find((option) => option.id === Number(value))?.name;
        return department ? department : "Select your group";
      },
      required: true,
    },
  ];