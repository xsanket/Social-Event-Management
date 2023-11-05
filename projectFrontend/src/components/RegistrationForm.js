import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { Toast, toast } from "react-toastify";
import bgimg from '../images/BgImage.png';



const RegistrationForm = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8081/api/v1/users",
        user
      );
        toast.success("Registered Successfully");
      console.log("User registered successfully:", response.data);
      
      navigate("/Login");
    } catch (error) {
      toast.error("Error at server Side");
    }
  };

  return (
    <div
      style={{
        background: `url(${bgimg})`,  
        backgroundSize: "cover",
        color: "#333",
        fontFamily: "'Roboto', sans-serif",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
         
      }}
    >
      <div
        className="container"
        style={{
          background: "rgba(255, 255, 255, 0.8)",
          borderRadius: "10px",
          boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.3)",
          padding: "40px",
          width: "500px",
          textAlign: "center",
          position: "absolute", 
        right: "115px",
        }}
      >
        <h1
          style={{
            fontSize: "32px",
            color: "#333",
          }}
        >
          Registration
        </h1>
        <br/>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={user.firstName}
              onChange={handleChange}
              required
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={user.lastName}
              onChange={handleChange}
              required
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={user.email}
              onChange={handleChange}
              required
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={user.password}
              onChange={handleChange}
              required
              className="form-control"
            />
          </div>
          <button type="submit" className="btn btn-success" >
            Register
          </button>
          <p>
            Already have an account? <Link to="/Login">Login Here</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
