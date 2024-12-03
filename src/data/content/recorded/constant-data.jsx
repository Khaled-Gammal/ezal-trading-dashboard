// add recorded fields for add 
export const addRecordedFields = [
    {
      type: "text",
      name: "title",
      id: "title",
      label: "Session Title",
      placeholder: "Enter Session Title",
    },
    {
      type: "selected",
      name: "author",
      id: "author",
      label: "Author Name",
      placeholder: "Select Author",
      options: ["maryam", "Ahmed", "Mohamed", "Omar"],
    },
    {
      type: "file",
      upload:"pdf",
      name: "content",
      id: "content",
      label: "Content Session",
      placeholder: "Enter Session Content",
    },{
      type:"file",
      upload:"video",
      name:"recorded",
      id:"recorded",
      label:"Recorded Session",
      placeholder:"Upload Recorded Session"
    },
    {
      type: "date",
      name: "date",
      id: "date",
      label: "Session Date",
      placeholder: "Select Session Date",
    },
    {
      type: "time",
      name: "time",
      id: "time",
      label: "Session Time",
      placeholder: "Select Session Time",
    }
  ];
  // edit recorded fields for edit
  export const editRecordedFields = [
    {
      type: "text",
      name: "title",
      id: "title",
      label: "Session Title",
      placeholder: "Enter Session Title",
    },
    {
      type: "selected",
      name: "author",
      id: "author",
      label: "Author Name",
      placeholder: "Select Author",
      options: ["maryam", "Ahmed", "Mohamed", "Omar"],
    },
    {
      type: "file",
      upload:"pdf",
      name: "content",
      id: "content",
      label: "Content Session",
      placeholder: "Enter Session Content",
    },{
      type:"file",
      upload:"video",
      name:"recorded",
      id:"recorded",
      label:"Recorded Session",
      placeholder:"Upload Recorded Session"
    },
    {
      type: "date",
      name: "date",
      id: "date",
      label: "Session Date",
      placeholder: "Select Session Date",
    },
    {
      type: "time",
      name: "time",
      id: "time",
      label: "Session Time",
      placeholder: "Select Session Time",
    }
  ];
