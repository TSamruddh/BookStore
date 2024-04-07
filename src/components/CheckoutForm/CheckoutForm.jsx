import React, { useState } from "react";
import "./CheckoutForm.css"

const CheckoutForm = (props) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit();
    // Handle form submission, e.g., send data to backend or perform validation
    console.log("Form submitted:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="checkout-form">
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="address">Address</label>
        <textarea
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
        ></textarea>
      </div>
      <button type="submit">Place Order</button>
    </form>
  );
};

export default CheckoutForm;
