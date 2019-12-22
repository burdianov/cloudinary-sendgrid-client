import React, {useState} from "react";

const Feedback = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
    phone: "",
    uploadedFiles: [],
    buttonText: "Submit",
    uploadPhotosButtonText: "Upload files"
  });

  const {name, email, message, phone, uploadedFiles, buttonText, uploadPhotosButtonText} = values;

  const {REACT_APP_API_PATH, REACT_APP_CLOUDINARY_CLOUD_NAME, REACT_APP_CLOUDINARY_UPLOAD_PRESET} = process.env;

  const handleChange = (fieldName) => event => {
    setValues({
      ...values, [fieldName]: event.target.value
    })
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setValues({
      ...values, buttonText: "Sending..."
    });
    // send to backend for email
    console.table({name, email, phone, message, uploadedFiles})
  };

  const uploadWidget = () => {
    window.cloudinary.openUploadWidget({
        cloud_name: REACT_APP_CLOUDINARY_CLOUD_NAME,
        upload_preset: REACT_APP_CLOUDINARY_UPLOAD_PRESET,
        tags: ['ebooks']
      },
      function (error, result) {
        console.log(result);
      });
  };

  const feedbackForm = () => (
    <>
      <div className="form-group pt-5">
        <button
          className="btn btn-outline-secondary btn-block p-5"
          onClick={uploadWidget}
        >{uploadPhotosButtonText}</button>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="text-muted">Description</label>
          <textarea
            onChange={handleChange("message")}
            type="text"
            className="form-control"
            value={message}
            required>
          </textarea>
        </div>
        <div className="form-group">
          <label className="text-muted">Name</label>
          <input
            className="form-control"
            type="text"
            onChange={handleChange("name")}
            value={name}
            required
          />
        </div>
        <div className="form-group">
          <label className="text-muted">Email</label>
          <input
            className="form-control"
            type="email"
            onChange={handleChange("email")}
            value={email}
            required
          />
        </div>
        <div className="form-group">
          <label className="text-muted">Phone</label>
          <input
            className="form-control"
            type="number"
            onChange={handleChange("phone")}
            value={phone}
            required
          />
        </div>
        <button
          className="btn btn-outline-primary btn-block mt-5">{buttonText}</button>
      </form>
    </>
  );

  return (
    <div className="p-5">
      {feedbackForm()}
    </div>
  )
};

export default Feedback;