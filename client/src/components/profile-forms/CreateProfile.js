import React from "react";
import { Link } from "react-router-dom";

const CreateProfile = () => {
  return (
    <>
      <div className="mt-8 flex flex-row justify-center items-center">
        <div>
          {/* <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12"> */}
          <div className="relative py-3 sm:mx-auto font-body w-[60rem]">
            <div className="absolute inset-0 bg-gradient-to-r from-green-300 to-green-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
            <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
              <div className="max-w-xl mx-auto">
                <div>
                  <h1 className="text-2xl font-bold text-center">
                    Create Your Profile
                  </h1>
                </div>
                <div className="flex flex-row justify-between">
                  <div className="divide-y divide-gray-200">
                    <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                      <div className="relative">
                        <select name="status" className="border-2 rounded-lg">
                          <option>Select Professional Status</option>
                          <option value="Developer">Developer</option>
                          <option value="Junior Developer">
                            Junior Developer
                          </option>
                          <option value="Senior Developer">
                            Senior Developer
                          </option>
                          <option value="Manager">Manager</option>
                          <option value="Student or Learning">
                            Student or Learning
                          </option>
                          <option value="Instructor">
                            Instructor or Teacher
                          </option>
                          <option value="Intern">Intern</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                      <div className="relative">
                        <input
                          name="company"
                          type="text"
                          className="peer  h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                          placeholder="Company"
                          // value={email}
                          // onChange={(e) => onchange(e)}
                          required
                        />
                      </div>
                      <div className="relative">
                        <input
                          name="password"
                          type="text"
                          className="peer  h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                          placeholder="Website"
                          minLength="6"
                          // value={password}
                          // onChange={(e) => onchange(e)}
                        />
                      </div>
                      <div className="relative">
                        <input
                          name="password2"
                          type="text"
                          className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                          placeholder="Location"
                          // value={password2}
                          // onChange={(e) => onchange(e)}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="divide-y divide-gray-200">
                    <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                      <div className="relative">
                        <input
                          name="name"
                          type="text"
                          className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                          placeholder="Skills"
                          required
                          // value={name}
                          // onChange={(e) => onchange(e)}
                        />
                      </div>
                      <div className="relative">
                        <input
                          name="email"
                          type="text"
                          className="peer  h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                          placeholder="Github Username"
                          // value={email}
                          // onChange={(e) => onchange(e)}
                          required
                        />
                      </div>
                      <div className="relative">
                        <input
                          name="password"
                          type="text"
                          className="peer  h-[5rem] w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                          placeholder="a short bio of yourself"
                          minLength="6"
                          // value={password}
                          // onChange={(e) => onchange(e)}
                        />
                      </div>
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

export default CreateProfile;
