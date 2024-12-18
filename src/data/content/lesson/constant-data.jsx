// add QuranicLesson Fields input form
 export const addQuranicLessonFields = [
    {
      type: "text",
      name: "title",
      id: "title",
      label: "Lesson Title",
      placeholder: "Enter Lesson Title",
      required: true,
    },
    {
      type: "text",
      name: "publisher_name",
      id: "publisher_name",
      label: "Publisher Name",
      placeholder: "Enter Publisher Name",
      required: true,
    },
    {
      type: "text",
      name: "video_url",
      id: "video",
      label: "Recorded Session Link",
      placeholder: "Recorded Session Link",
      required: false,
    },
    {
      type: "file",
      upload: "pdf",
      name: "pdf",
      id: "pdf",
      label: "Content Session",
      placeholder: "Enter Session Content",
      required: false,
    },
   
    {
      type: "file",
      upload: "image",
      name: "image",
      id: "image",
      label: "Image",
      required: false,
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
    type: "text",
    name: "publisher_name",
    id: "publisher_name",
    label: "Publisher Name",
    placeholder: "Enter Publisher Name",
    
  },
  {
    type: "text",
    name: "video",
    id: "video",
    label: "Recorded Session",
    placeholder: " Recorded Session Link",
  },
  {
    type: "file",
    upload: "pdf",
    name: "pdf",
    id: "content",
    label: "Content Session",
    placeholder: "Enter Session Content",
  },
 
  {
    type: "file",
    upload: "image",
    name: "image",
    id: "image",
    label: "Image",
    
  },
  {
    type: "description",
    name: "description",
    id: "description",
    label: "Description",
    placeholder: "Select Description",
  },
  ];

  // view QuranicLesson Fields input form
  export const viewQuranicLessonFields = [
    {
      type: "text",
      name: "title",
      id: "title",
      label: "Lesson Title",
      disabled: true,
    },
    {
      type: "text",
      name: "publisher_name",
      id: "publisher_name",
      label: "Publisher Name",
      disabled: true,
    },
    {
      type: "text",
      name: "video_url",
      id: "video_url",
      label: "Recorded Session Link",
      disabled: true,
    },
    {
      type: "file",
      upload: "pdf",
      name: "pdf",
      id: "content",
      label: "Content Session",
    },
  
    {
      type: "file",
      upload: "image",
      name: "image",
      id: "image",
      label: "Image",
    },
    {
      type: "description",
      name: "description",
      id: " description",
      label: "Description",
      disabled: true,
    },
    ];