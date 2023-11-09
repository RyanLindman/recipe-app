import { useState } from "react";

import './NewsletterForm.css'

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
    <div className="email-success">
      {emailSubmitted ? (
        <div>
          <h2 style={{ letterSpacing: "1px", color:"green" }}>
            Email submitted successfully!
          </h2>
        </div>
      ) : (
        <form onSubmit={handleSubmit} id="newsletter-form">
          <div className="newsletter-form">
            <input
              type="text"
              value={email}
              onChange={handleEmailChange}
              placeholder="Email"
              name="email"
              
            />

            <button type="submit" id="submit-btn">Submit</button>

            {!validEmail && (
              <span className="form-error-msg" style={{ color: "tomato", fontWeight: 600 }}>  
                Please enter a valid email
              </span>
            )}
          </div>
        </form>
      )}
    </div>
  );
};

export default NewsletterForm;
