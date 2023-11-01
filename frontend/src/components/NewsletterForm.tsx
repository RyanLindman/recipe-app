import { useState } from "react";
import InputField from "./InputField";

const NewsletterForm = () => {
  const [formData, setFormData] = useState({
    email: "",
  });

  const [errors, setErrors] = useState<{
    email?: any;
  }>({});

  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: any) => {
    const { email, value } = e.target;
    setFormData({ ...formData, [email]: value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    

        setSubmitted(true);
    
  };

  

  return (
    <div>
      {submitted ? (
        <div>
          <h2 style={{letterSpacing:"1px"}}>Email submitted successfully!</h2>
        </div>
      ) : (
        <form className="newsletter-form" onSubmit={handleSubmit}>
          <label htmlFor="email" />
          <InputField
            type="email"
            id="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            error={errors.email}
          />
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default NewsletterForm;
