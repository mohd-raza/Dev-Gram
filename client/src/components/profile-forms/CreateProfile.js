import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link, useMatch, useNavigate } from "react-router-dom";
import { getCurrentProfile, createProfile } from "../../actions/profile";
import PropTypes from "prop-types";
const initialState = {
  company: "",
  website: "",
  location: "",
  status: "",
  skills: "",
  githubusername: "",
  bio: "",
  twitter: "",
  facebook: "",
  linkedin: "",
  youtube: "",
  instagram: "",
};
const CreateProfile = ({
  profile: { profile, loading },
  createProfile,
  getCurrentProfile,
}) => {
  const [formData, setFormData] = useState(initialState);
  const {
    company,
    website,
    location,
    status,
    skills,
    githubusername,
    bio,
    twitter,
    facebook,
    linkedin,
    youtube,
    instagram,
  } = formData;
  const navigate = useNavigate();
  const creatingProfile = useMatch("/create-profile");
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleClick = (e) => {
    e.preventDefault();
    console.log(formData);
    createProfile(formData, navigate, profile ? true : false);
  };

  useEffect(() => {
    // if there is no profile, attempt to fetch one
    if (!profile) getCurrentProfile();

    // if we finished loading and we do have a profile
    // then build our profileData
    if (!loading && profile) {
      const profileData = { ...initialState };
      for (const key in profile) {
        if (key in profileData) profileData[key] = profile[key];
      }
      for (const key in profile.social) {
        if (key in profileData) profileData[key] = profile.social[key];
      }
      // the skills may be an array from our API response
      if (Array.isArray(profileData.skills))
        profileData.skills = profileData.skills.join(", ");
      // set local state with the profileData
      setFormData(profileData);
    }
  }, [loading, getCurrentProfile, profile]);

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
                <div className="flex flex-row justify-around ">
                  <div className="divide-y divide-gray-200">
                    <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                      <div className="relative">
                        <select
                          name="status"
                          className="border-2 rounded-lg mt-[11px]"
                          value={status}
                          onChange={(e) => handleChange(e)}
                        >
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
                          className="peer  h-10 w-[200px] border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                          placeholder="Company"
                          value={company}
                          onChange={(e) => handleChange(e)}
                        />
                      </div>
                      <div className="relative">
                        <input
                          name="website"
                          type="text"
                          className="peer  h-10 w-[200px] border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                          placeholder="Website"
                          value={website}
                          onChange={(e) => handleChange(e)}
                        />
                      </div>
                      <div className="relative">
                        <input
                          name="location"
                          type="text"
                          className="peer h-10 w-[200px] border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                          placeholder="Location"
                          value={location}
                          onChange={(e) => handleChange(e)}
                        />
                      </div>
                      <div className="relative">
                        <input
                          name="skills"
                          type="text"
                          className="peer h-10 w-[200px] border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                          placeholder="Skills"
                          value={skills}
                          onChange={(e) => handleChange(e)}
                        />
                      </div>
                      <div className="relative">
                        <input
                          name="githubusername"
                          type="text"
                          className="peer h-10 w-[200px] border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                          placeholder="Github Username"
                          value={githubusername}
                          onChange={(e) => handleChange(e)}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="divide-y divide-gray-200">
                    <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                      <div className="relative">
                        <input
                          name="bio"
                          type="text"
                          className="peer h-10 w-[200px] border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                          placeholder="Bio"
                          required
                          value={bio}
                          onChange={(e) => handleChange(e)}
                        />
                      </div>
                      <div className="relative">
                        <input
                          name="twitter"
                          type="text"
                          className="peer  h-10 w-[200px] border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                          placeholder="Twitter"
                          value={twitter}
                          onChange={(e) => handleChange(e)}
                        />
                      </div>
                      <div className="relative">
                        <input
                          name="linkedin"
                          type="text"
                          className="peer  h-10 w-[200px] border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                          placeholder="Linkedin"
                          value={linkedin}
                          onChange={(e) => handleChange(e)}
                        />
                      </div>
                      <div className="relative">
                        <input
                          name="instagram"
                          type="text"
                          className="peer  h-10 w-[200px] border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                          placeholder="Instagram"
                          value={instagram}
                          onChange={(e) => handleChange(e)}
                        />
                      </div>
                      <div className="relative">
                        <input
                          name="facebook"
                          type="text"
                          className="peer  h-10 w-[200px] border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                          placeholder="Facebook"
                          value={facebook}
                          onChange={(e) => handleChange(e)}
                        />
                      </div>
                      <div className="relative">
                        <input
                          name="youtube"
                          type="text"
                          className="peer  h-10 w-[200px] border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                          placeholder="Youtube"
                          value={youtube}
                          onChange={(e) => handleChange(e)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="relative">
                    <button
                      className="bg-cyan-500 text-white rounded-md px-2 py-1"
                      onClick={(e) => handleClick(e)}
                    >
                      Submit
                    </button>
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
CreateProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  profile: state.profile,
});
export default connect(mapStateToProps, { createProfile, getCurrentProfile })(
  CreateProfile
);
