import React, { useState } from "react";
import { connect } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import { login } from "../../actions/auth";
const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;

  const onchange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleClick = async (e) => {
    e.preventDefault();
    console.log(email, password);
    login(email, password);
  };

  // redirect if logged in
  if (isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <>
      <div className="mt-16 flex flex-row justify-center items-center">
        <div>
          {/* <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12"> */}
          <div className="relative py-3 sm:max-w-xl sm:mx-auto font-body w-[50rem]">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-yellow-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
            <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
              <div className="max-w-md mx-auto">
                <div>
                  <h1 className="text-2xl font-semibold">Sign in to Account</h1>
                </div>
                <div className="divide-y divide-gray-200">
                  <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                    <div className="relative">
                      <input
                        name="email"
                        type="email"
                        className="peer  h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                        placeholder="Email address"
                        value={email}
                        onChange={(e) => onchange(e)}
                        required
                      />
                    </div>
                    <div className="relative">
                      <input
                        name="password"
                        type="password"
                        className="peer  h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                        placeholder="Password"
                        minLength="6"
                        value={password}
                        onChange={(e) => onchange(e)}
                      />
                    </div>

                    <div className="relative">
                      <button
                        className="bg-yellow-500 text-white rounded-md px-2 py-1"
                        onClick={(e) => handleClick(e)}
                      >
                        Submit
                      </button>
                    </div>
                    <div className="relative">
                      <p>
                        Don't have an Account ?
                        <span className="mx-2 text-yellow-600 font-bold">
                          <Link to="/signup">Signup</Link>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* </div> */}
        </div>
      </div>
    </>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProps, {
  login,
})(Login);
