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

  const handleChange = (props) => {
    console.log("handle change");
  };

  const handleSubmit = () => {
    console.log("handle submit");
  };

  const feedbackForm = () => (
    <>
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