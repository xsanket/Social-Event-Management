import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { toast } from "react-toastify";
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import bgimg from '../images/BgImage.png';



const Login = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState(null);
  const [showPassword, setShowPassword] = useState(false); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8081/api/v1/login",
        user
      );

      if (response.data.loggedIn === "true") {
        
        navigate("/Home");
        toast.success("Login successful");
      } else {
       
        if (response.status === 401) {
          toast.error("User not found. Please register first.");
        } else {
          
          setError("An error occurred during login.");
          toast.error("User not found. Please register first.");
        }
      }
    } catch (error) {
      console.error("Error logging in:", error);
      toast.error("User not found. Please register first.");
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
        alignItems: "center",
        
      }}
    >
      <div
        className="container"
        style={{
          background: "rgba(255, 255, 255, 0.8)",
          borderRadius: "10px",
          boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.3)",
          padding: "80px",
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
          Login
        </h1>
        <br/>
        <form onSubmit={handleSubmit}>
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
            <div className="input-group">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="Password"
                value={user.password}
                onChange={handleChange}
                required
                className="form-control"
              />
              <div>
                <button
                  type="button" style={{
                    padding: '6px 10px',
                  }}
                  className="btn btn-light"
                  onClick={togglePasswordVisibility}
                >
                  <FontAwesomeIcon
                    icon={showPassword ? faEyeSlash : faEye}
                    style={{ color: '#333' }}
                  />
                </button>
              </div>
            </div>
          </div>
          {error && (
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          )}
          <button type="submit" className="btn btn-success">
            Login
          </button>
          <br>

          </br>
          <p style={{ marginTop: '20px' }}>New user? <Link to="/">Register Here</Link></p>
        </form>
      </div>
    </div>
  );
};

export default Login;
