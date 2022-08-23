import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
import { setAlert } from "../../actions/alert";
import PropTypes from "prop-types";
import Alert from "../layout/Alert";
const Signup = ({ setAlert }) => {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  const { name, email, password, password2 } = formData;

  const onchange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleClick = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      setAlert("password do not match", "danger");
      setShow(true);
    } else {
      const newUser = {
        name,
        email,
        password,
      };
      try {
        const config = {
          headers: {
            "Content-Type": "application/json",
          },
        };
        const body = JSON.stringify(newUser);
        const res = await axios.post(
          "http://localhost:5000/api/users",
          body,
          config
        );
        console.log(res.data);
      } catch (err) {
        console.error(err.response.data);
      }
    }
  };
  return (
    <>
      <div className="mt-8 flex flex-row justify-center items-center">
        <div>
          {/* <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12"> */}
          <div className="relative py-3 sm:max-w-xl sm:mx-auto font-body w-[50rem]">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-300 to-cyan-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
            <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
              <div className="max-w-md mx-auto">
                <div>
                  <h1 className="text-2xl font-semibold">Create an Account</h1>
                </div>
                <div className="divide-y divide-gray-200">
                  <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                    <div className="relative">
                      <input
                        name="name"
                        type="text"
                        className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                        placeholder="Name"
                        required
                        value={name}
                        onChange={(e) => onchange(e)}
                      />
                    </div>
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
                      <input
                        name="password2"
                        type="password"
                        className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                        placeholder="Confirm Password"
                        value={password2}
                        onChange={(e) => onchange(e)}
                      />
                    </div>
                    <div className="relative">
                      <button
                        className="bg-cyan-500 text-white rounded-md px-2 py-1"
                        onClick={(e) => handleClick(e)}
                      >
                        Submit
                      </button>
                    </div>
                    <div className="relative">
                      <p>
                        Already have an Account ?
                        <span className="mx-2 text-cyan-600 font-bold">
                          <Link to="/login">Login</Link>
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

Signup.propTypes = {
  setAlert: PropTypes.func.isRequired,
};

export default connect(null, { setAlert })(Signup);
