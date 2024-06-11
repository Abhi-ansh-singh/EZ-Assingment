import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import "./Form.css";

const Form = () => {
  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors },
  } = useForm();

  const [submissionMessage, setSubmissionMessage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (submissionMessage) {
      setTimeout(() => {
        setSubmissionMessage("");
      }, 3000);
    }
  }, [submissionMessage]);

  const onSubmit = async (data) => {
    if (data) {
      setLoading(true);
      try {
        const response = await axios.post(
          "http://34.225.132.160:8002/api",
          data
        );
        if (response.status === 200) {
          setSubmissionMessage("Form Submitted");
          reset(); // Reset the form fields
          setLoading(false);
        }
      } catch (error) {
        if (
          error.response &&
          error.response.data &&
          error.response.data.error
        ) {
          setError("email", {
            type: "manual",
            message: error.response.data.error,
          });
        } else {
          console.error("Error submitting form:", error);
        }
        setLoading(false);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        <div>
          <input
            type="email"
            placeholder="Email Address"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email address",
              },
              validate: {
                notEzWorks: (value) =>
                  !value.endsWith("@ez.works") ||
                  "Email ending with @ez.works is not allowed",
              },
            })}
          />
          {errors.email && (
            <div className="error-message">{errors.email.message}</div>
          )}
          {submissionMessage && (
            <div className="success-message">{submissionMessage}</div>
          )}
        </div>
        <button type="submit">Connect Me</button>
      </div>
    </form>
  );
};

export default Form;
