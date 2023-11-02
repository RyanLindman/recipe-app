import { useState } from "react";
import InputField from "./InputField";

const NewsletterForm = () => {
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(true);
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleEmailChange = (e: any) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    let emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    const isValid = emailRegex.test(email);
    console.log(isValid);
    setValidEmail(isValid);

    if (isValid) {
      setEmailSubmitted(true);
    }
  };
  console.log(email);

  return (
    <div>
      {emailSubmitted ? (
        <div>
          <h2 style={{ letterSpacing: "1px" }}>
            Email submitted successfully!
          </h2>
        </div>
      ) : (
        <form className="newsletter-form" onSubmit={handleSubmit}>
          <label htmlFor="email" />
          <input type="text" value={email} onChange={handleEmailChange} />
          <button type="submit">Submit</button>

          {!validEmail && (
            <p className="form-error-msg" style={{ color: "tomato" }}>
              Please enter a valid email
            </p>
          )}
        </form>
      )}
    </div>
  );
};

export default NewsletterForm;
