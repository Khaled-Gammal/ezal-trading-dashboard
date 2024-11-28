export const addSessionFields = [
  {
    id: "session",
    name: "session", // Add `name` here to match state
    label: "Session Name",
    placeholder: "Enter session name",
    type: "text",
    required: true,
  },
  {
    id: "department",
    name: "department", // Add `name` here to match state
    label: "Department Name",
    placeholder: "Select department name",
    type: "selected",
    options: ["Quran", "Tafseer", "Tagweed"],
    required: true,
  },
  {
    id: "date",
    name: "date", // Add `name` here to match state
    label: "Session Date",
    placeholder: "Select session date",
    type: "date",
    required: true,
  },
  {
    id: "time",
    name: "time", // Add `name` here to match state
    label: "Session Time",
    placeholder: "Select session time",
    type: "time",
    required: true,
  },
];
export const editSessionFields = [
  {
    id: "title",
    name: "title", // Add `name` here to match state
    label: "Session Name",
    placeholder: "Enter session name",
    type: "text",

  },
  {
    id: "department",
    name: "department", // Add `name` here to match state
    label: "Department Name",
    placeholder: "Select department name",
    type: "selected",
    options: ["Quran", "Tafseer", "Tagweed"],
  },
  {
    id:"group",
    name:"group",
    label:"Group Name",
    placeholder:"Select group name",
    type:"selected",
    options:["Group 1","Group 2","Group 3"],
  },
  {
    id: "date",
    name: "date", // Add `name` here to match state
    label: "Session Date",
    placeholder: "Select session date",
    type: "date",
  },
  {
    id: "time",
    name: "time", // Add `name` here to match state
    label: "Session Time",
    placeholder: "Select session time",
    type: "time",
  },
];

export const viewSessionFields = [
    {
        id: "title",
        name: "title", // Add `name` here to match state
        label: "Session Name",
        placeholder: "Enter session name",
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
    },{
        id:"group",
        name:"group",
        label:"Group Name",
        placeholder:"Select group name",
        type:"selected",
        options:["Group 1","Group 2","Group 3"],
        disabled:true,
    },
    {
        id: "date",
        name: "date", // Add `name` here to match state
        label: "Session Date",
        placeholder: "Select session date",
        type: "date",
        disabled: true,
    },
    {
        id: "time",
        name: "time", // Add `name` here to match state
        label: "Session Time",
        placeholder: "Select session time",
        type: "time",
        disabled: true,
    },
    ];