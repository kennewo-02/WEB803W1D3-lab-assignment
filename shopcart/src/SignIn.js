import React from "react";
import { useNavigate } from "react-router-dom";
import FacebookLogin from "react-facebook-login"; 

function SignIn() {
  const navigate = useNavigate();

  return (
    <div className="container mt-5">
      <div className="card" style={{ maxWidth: "700px" }}>
        
        <div className="card-header">
          <h3 className="mb-0">Sign In</h3>
        </div>

        <div className="card-body">
          <p className="fw-bold">
            Please login using one of the following:
          </p>

          <div className="row">
            <div className="col-md-5 border p-4 ms-3">
              <form>
                <div className="mb-3">
                  <label className="form-label">Name:</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your name"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Email:</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Your Email"
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-success w-45"
                >
                  Login
                </button>
              </form>
            </div>
          </div>

          <div className="mt-4">
            <FacebookLogin
              appId="YOUR_FB_APP_ID" // will replace with my Facebook App ID
              autoLoad={false}
              fields="name,email,picture"
              callback={(response) => {
                console.log("FB login response:", response);
                if (response.accessToken) {
                  navigate("/checkout"); 
                }
              }}
              textButton="Login with Facebook"
            />
          </div>

        </div>
      </div>
    </div>
  );
}

export default SignIn;
