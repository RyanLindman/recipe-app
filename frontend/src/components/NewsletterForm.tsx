import { useState } from "react";
import "./NewsletterForm.css";

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
        <form onSubmit={handleSubmit}>
          <div className="newsletter-form">
            <label htmlFor="email" />
            <input
              type="text"
              value={email}
              onChange={handleEmailChange}
              placeholder="Email"
            />

            <button type="submit">Submit</button>

            {!validEmail && (
              <span className="form-error-msg" style={{ color: "tomato", fontWeight: 600 }}>
                Not accepted: Please enter a valid email
              </span>
            )}
          </div>
        </form>
      )}
    </div>
  );
};

export default NewsletterForm;
