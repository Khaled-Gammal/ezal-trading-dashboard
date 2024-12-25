export const addDepartmentFields = [
    {
      id: "title",
      name: "title", // Add `name` here to match state
      label: "Department Name",
      placeholder: "Enter Department name",
      type: "text",
      required: true,
    },
    {
      id: "description",
      name: "description", // Add `name` here to match state
      label: "Description",
      placeholder: "Enter Description",
      type: "description",
      required: true,
    },
    {
      type: "file",
      upload: "image",
      name: "image",
      id: "image",
      label: "Image",
      required: false,
    },
  ];
  
    export const editDepartmentFields = [
        {
        id: "title",
        name: "title", // Add `name` here to match state
        label: "Department Name",
        placeholder: "Enter Department name",
        type: "text",
        },
        {
          id: "description",
          name: "description", // Add `name` here to match state
          label: "Description",
          placeholder: "Enter Description",
          type: "description",
        },
        {
          type: "file",
          upload: "image",
          name: "image",
          id: "image",
          label: "Image",
          required: false,
        },
    ];