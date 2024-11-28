export const addEmployFields = [
    {
      id:'image',
      name: "image",  // Add `name` here to match state
      label: "Employee Image",
      placeholder: "Upload your image",
      type: "image",
      required: true,
    },
    {
      id: "full_name",
      name: "full_name",  // Add `name` here to match state
      label: "Employee Name",
      placeholder: "Enter your name",
      type: "text",
      required: true,
    },
    
    {
      id: "phone",
      name: "phone",  // Add `name` here to match state
      label: "Phone Number",
      placeholder: "Enter your phone number",
      type: "phone",
      required: true,
    },
    {
      id: "email",
      name: "email",  // Add `name` here to match state
      label: "E-mail address",
      placeholder: "Enter your email",
      type: "email",
      required: true,
    },
    {
        id:"password",
        name:"password",
        label:"Password",
        placeholder:"Enter your password",
        type:"password",
        required:true,
    },
    {
        id: "age",
        name: "age",  // Add `name` here to match state
        label: "Age",
        placeholder: "Enter your age",
        type: "number",
        required: true,
      },
      {
        id:"section",
        name: "section_id",  // Add `name` here to match state
        label: "Section",
        placeholder: "select your section",
        type: "selected",
        options: ["Customer service", "Office", "Management",'1'],
        required: true,
      },
      {
          id:"gender",
          name:"gender",  // Add `name` here to match state
          label:"Gender",
          placeholder:"select your gender",
          type:"selected",
          options:['Male','Female'],
          required: true,
      }
  ];
  
 export  const editEmployFields = [
    {
        id: "image",
        name: "image",  // Add `name` here to match state
        label: "Employee Image",
        placeholder: "Upload your image",
        type: "image",
        required: true
    },
    {
      id: "full_name",
      name: "full_name",  // Add `name` here to match state
      label: "Employee Name",
      placeholder: "Enter your name",
      type: "text",
      required: true,
    },
    {
      id: "email",
      name: "email",  // Add `name` here to match state
      label: "E-mail address",
      placeholder: "Enter your email",
      type: "email",
      required: true,
    },
    {
      id:"phone_number",
      name: "phone_number",  // Add `name` here to match state
      label: "Phone Number",
      placeholder: "Enter your phone number",
      type: "phone",
      required: true,
    },
    {
      id: "age",
      name: "age",  // Add `name` here to match state
      label: "Age",
      placeholder: "Enter your age",
      type: "number",
      required: true,
    },
    {
      id:"section",
      name: "section",  // Add `name` here to match state
      label: "Section",
      placeholder: "select your section",
      type: "selected",
      options: ["Customer service", "Office", "Management"],
      
    },
    {
        id:"gender",
        name:"gender",  // Add `name` here to match state
        label:"Gender",
        placeholder:"select your gender",
        type:"selected",
        options:['Male','Female'],
    }
    
  ];

  export const viewEmployeeFields = [
    {
      id:'image',
      name: "image",  // Add `name` here to match state
      label: "Employee Image",
      placeholder: "Upload your image",
      type: "image",
      disabled: true,
    },
    {
      id: "full_name",
      name: "full_name",  // Add `name` here to match state
      label: "Employee Name",
      placeholder: "Enter your name",
      type: "text",
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
      id:"section",
      name: "section",  // Add `name` here to match state
      label: "Section",
      placeholder: "select your section",
      type: "selected",
      options: ["Customer service", "Office", "Management"],
      disabled: true,
    },
    {
        id:'gender',
        name:"gender",
        label:"gender",
        placeholder:"select your gender",
        type:"selected",
        options:['Male',"Female"],
        disabled:true
    }
    ];