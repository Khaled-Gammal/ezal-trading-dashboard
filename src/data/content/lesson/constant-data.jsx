// add QuranicLesson Fields input form
 export const addQuranicLessonFields = [
    {
      type: "text",
      name: "title",
      id: "title",
      label: "Lesson Title",
      placeholder: "Enter Lesson Title",
    },
    {
      type: "selected",
      name: "instructor",
      id: "instructor",
      label: "Instructor Name",
      placeholder: "Select Instructor",
      options: ["Ali", "Ahmed", "Mohamed", "Omar"],
    },
    {
      type: "file",
      upload: "pdf",
      name: "content",
      id: "content",
      label: "Content Session",
      placeholder: "Enter Session Content",
    },
    {
      type: "file",
      upload: "video",
      name: "recorded",
      id: "recorded",
      label: "Recorded Session",
      placeholder: "Upload Recorded Session",
    },
    {
      type: "text",
      name: "duration",
      id: "duration",
      label: "Duration",
      placeholder: "Select Duration",
    },
    {
      type: "description",
      name: "description",
      id: " description",
      label: "Description",
      placeholder: "Select Description",
    },
  ];

  // edit QuranicLesson Fields input form
 export const editQuranicLessonFields = [
    {
      type: "text",
      name: "title",
      id: "title",
      label: "Lesson Title",
      placeholder: "Enter Lesson Title",
    },
    {
      type: "selected",
      name: "instructor",
      id: "instructor",
      label: "Instructor Name",
      placeholder: "Select Instructor",
      options: ["Ali", "Ahmed", "Mohamed", "Omar"],
    },
    {
      type: "file",
      upload: "pdf",
      name: "content",
      id: "content",
      label: "Content Session",
      placeholder: "Enter Session Content",
    },
    {
      type: "file",
      upload: "video",
      name: "recorded",
      id: "recorded",
      label: "Recorded Session",
      placeholder: "Upload Recorded Session",
    },
    {
      type: "text",
      name: "duration",
      id: "duration",
      label: "Duration",
      placeholder: "Select Duration",
    },
    {
      type: "description",
      name: "description",
      id: " description",
      label: "Description",
      placeholder: "Select Description",
    },
  ];