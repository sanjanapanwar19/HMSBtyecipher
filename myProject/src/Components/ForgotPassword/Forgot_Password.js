import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const ForgotPassword = ({images}) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("handle submit fun has been called");
    try {
      const res = await axios.post("/auth/forgotPassword", { email });
      console.log("response is", res);
      if (res.data.status) {
        alert("please check your email for reset password");
        navigate("/login")
      }
      console.log(res.data);
    } catch(err) {
      console.log("error is", err);
      console.log("field", err.response.data.field);
      console.log("message is", err.response.data.msg);
    }
  };
  return (
    <>
      <div class="login">
        <div class="container-fluid">
          <div class="row">
            <div class="col-xxl-3 mx-auto login-formCenterAlign">
              <div class="login-form">
                <div class="header-img">
                  <img src={images.datadummyLogo} alt="" />
                </div>
                <div class="heading-text">
                  <h3>Forgot Password</h3>
                  <p>Enter the email address associated with your account.</p>
                </div>
                <div class="form">
                  <form class="row g-2">
                    <div class="col-md-12">
                      <label for="email" class="custom-form-label">
                        Email
                      </label>
                      <input
                        type="test"
                        class="custom-input-field"
                        id="email"
                        placeholder="Enter Email Address"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                      />
                    </div>

                    <div class="col-md-12 mt-4">
                      <button onClick={handleSubmit} class="custom-btn">
                        Continue
                      </button>
                    </div>
                    <p class="d-flex mt-4 justify-content-center">
                      <Link to={"/login"}>Back</Link>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ForgotPassword;
