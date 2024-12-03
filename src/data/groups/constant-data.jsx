

export const addGroupFields = [
  {
    id: "group",
    name: "group", // Add `name` here to match state
    label: "Group Name",
    placeholder: "Enter group name",
    type: "text",
  },
  {
    id: "instructor_id",
    name: "instructor_id", // Add `name` here to match state
    label: "Instructor Name",
    placeholder: "Select instructor name",
    type: "selected",
    path: "/dashboard/sections/",
     view: "name",
    options: [],
    renderValue: (options) => {
      console.log(options);
      // const instructor = options.find((option) => option.id === value);
      // return instructor ? instructor?.name : "Select your instructor";
    },
   
  },
  {
    id: "department",
    name: "department", // Add `name` here to match state
    label: "Department Name",
    placeholder: "Select department name",
    type: "selected",
    path: "/dashboard/departments/",
    view: "name",
    options: [],
  },
];

export const editGroupFields = [
  {
    id: "name",
    name: "name", // Add `name` here to match state
    label: "Group Name",
    placeholder: "Enter group name",
    type: "text",
  },
  {
    id: "instructor",
    name: "instructor", // Add `name` here to match state
    label: "Instructor Name",
    placeholder: "Select instructor name",
    type: "selected",
    options: ["Ali", "Mohamed", "Ahmed"],
    view: "name",
  },
  {
    id: "department",
    name: "department", // Add `name` here to match state
    label: "Department Name",
    placeholder: "Select department name",
    type: "selected",
    options: ["Quran", "Tafseer", "Tagweed"],
  },
];

export const viewGroupFields = [
  {
    id: "name",
    name: "name", // Add `name` here to match state
    label: "Group Name",
    placeholder: "Enter group name",
    type: "text",
    disabled: true,
  },
  {
    id: "instructor",
    name: "instructor", // Add `name` here to match state
    label: "Instructor Name",
    placeholder: "Select instructor name",
    type: "text",
    disabled: true,
  },
  {
    id: "department",
    name: "department", // Add `name` here to match state
    label: "Department Name",
    placeholder: "Select department name",
    type: "selected",
    options: ["Quran", "Tafseer", "Tagweed"],
    disabled: true,
  },
];
