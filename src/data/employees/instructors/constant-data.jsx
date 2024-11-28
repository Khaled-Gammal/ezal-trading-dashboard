export const addInstructorFields = [
    {
      id: "image",
      name: "image", // Add `name` here to match state
      label: "Employee Image",
      placeholder: "Upload your image",
      type: "image",
      required: true,
    },
    {
      id: "full_name",
      name: "full_name", // Add `name` here to match state
      label: "Intructor Name",
      placeholder: "Enter your name",
      type: "text",
      required: true,
    },
    {
      id: "courses",
      name: "courses", // Add `name` here to match state
      label: "Courses Name",
      placeholder: "select your courses",
      type: "selected",
      options: ["Tagweed", "Quran", "Tafseer"],
      required: true,
    },
    {
      id: "groups",
      name: "groups", // Add `name` here to match state
      label: "Groups Number",
      placeholder: "select your groups",
      type: "selected",
      options: ["G9", "G3", "G2"],
      required: true,
    },
    {
      id: "phone",
      name: "phone", // Add `name` here to match state
      label: "Phone Number",
      placeholder: "Enter your phone number",
      type: "phone",
      required: true,
    },
    {
      id: "email",
      name: "email", // Add `name` here to match state
      label: "E-mail address",
      placeholder: "Enter your email",
      type: "email",
      required: true,
    },{
      id: "password",
      name: "password", // Add `name` here to match state
      label: "Password",
      placeholder: "Enter your password",
      type: "password",
      required: true,
    },{
      id:"age",
      name:"age",
      label:"Age",
      placeholder:"Enter your age",
      type:"number",
      required:true,
    },{
      id:"gender",
      name:"gender",
      label:"Gender",
      placeholder:"Enter your gender",
      type:"selected",
      options:['Male',"Female"],
      required:true,
    }
  ];

 export  const editInstructorFields = [
    {
      id: "full_name",
      name: "full_name", // Add `name` here to match state
      label: "Istructor Name",
      placeholder: "Enter your name",
      type: "text",
      required: true,
    },
    {
      id: "email",
      name: "email", // Add `name` here to match state
      label: "E-mail address",
      placeholder: "Enter your email",
      type: "email",
      required: true,
    },
    {
      id: "phone",
      name: "phone", // Add `name` here to match state
      label: "Phone Number",
      placeholder: "Enter your phone number",
      type: "phone",
      required: true,
    },
    {
      id: "courses",
      name: "courses", // Add `name` here to match state
      label: "Courses Name",
      placeholder: "select your courses",
      type: "selected",
      options: ["Tagweed", "Quran", "Tafseer"],
    },
    {
      id: "groups",
      name: "groups", // Add `name` here to match state
      label: "Groups Number",
      placeholder: "select your groups",
      type: "selected",
      options: ["G9", "G3", "G2"],
    },
    {
      id: "age",
      name: "age", // Add `name` here to match state
      label: "Age",
      placeholder: "Enter your age",
      type: "number",
      required: true,
    },
    {
        id: "gender",
        name:"gender",
        label:"Gender",
        placeholder:"Enter your gender",
        type:"selected",
        options:['Male','Female']
    }   
  ];

  export const viewInstructorFields = [
    {
      id: "image",
      name: "image", // Add `name` here to match state
      label: "Employee Image",
      placeholder: "Upload your image",
      type: "image",
      disabled: true,
    },
    {
      id: "full_name",
      name: "full_name", // Add `name` here to match state
      label: "Intructor Name",
      placeholder: "Enter your name",
      type: "text",
      disabled: true,
    },
    {
      id: "courses",
      name: "courses", // Add `name` here to match state
      label: "Courses Name",
      placeholder: "select your courses",
      type: "selected",
      options: ["Tagweed", "Quran", "Tafseer"],
      disabled: true,
    },
    {
      id: "groups",
      name: "groups", // Add `name` here to match state
      label: "Groups Number",
      placeholder: "select your groups",
      type: "selected",
      options: ["G9", "G3", "G2"],
      disabled: true,
    },
    {
      id: "phone",
      name: "phone", // Add `name` here to match state
      label: "Phone Number",
      placeholder: "Enter your phone number",
      type: "phone",
      disabled: true,
    },
    {
      id: "email",
      name: "email", // Add `name` here to match state
      label: "E-mail address",
      placeholder: "Enter your email",
      type: "email",
      disabled: true,
    },{
      id:"age",
      name:"age",
      label:"Age",
      placeholder:"Enter your age",
      type:"number",
      disabled: true,
    },{
      id:"gender",
      name:"gender",
      label:"Gender",
      placeholder:"Enter your gender",
      type:"selected",
      options:['Male',"Female"],
      disabled: true,
    }
  ];