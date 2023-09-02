/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable no-unused-vars */
import gif from "./admin.gif";
import mass from "./mass.jpg";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";
import { useUser } from "./UserContext";

const Login = () => {
  const { setUser } = useUser();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    // Create the login request payload
    const loginData = {
      username: username,
      password: password,
    };
    console.log(loginData);
    // Send the login request to the backend

    fetch("http://localhost:8080/restapi/test", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          if (data.role === "Admin") {
            sessionStorage.setItem("username", username);
            setUser(loginData);
            navigate("/admin");
          } else {
            alert("You must be an admin to login.");
          }
        } else {
          alert("Invalid username or password.");
        }
      })
      .catch((error) => {
        // Handle any errors
        console.error(error);
      });
  };

  const navigatepass = (e) => {
    navigate("/forgotpassword");
  };
  const navigatesignup = (e) => {
    navigate("/signup");
  };

  return (
    <div>
      <section className="h-full bg-neutral-200 dark:bg-neutral-700 lg:mt-20">
        <div className="container h-full p-10 ">
          <div className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
            <div className="w-4/6">
              <div className="block rounded-2xl bg-white shadow-2xl dark:bg-neutral-800">
                <div className="g-0 lg:flex lg:flex-wrap">
                  <div className="flex items-center justify-center lg:w-1/2 lg:rounded-l-2xl lg:rounded bg-blue-800 shadow-2xl">
                    <div className="px-4 py-6 text-white md:mx- md:p-12 sm:mx-4 sm:p-6 ">
                      <a
                        href=" "
                        className="flex flex-col items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white mr-10"
                      >
                        <img className="w-33 h-8" src={mass} alt="logo" />
                      </a>

                      <a
                        href=" "
                        className={`${"hidden md:flex md:flex-col md:items-center md:mb-6 md:text-2xl md:font-semibold md:text-gray-900 md:dark:text-white md:mr-10"} ${"hidden sm:flex sm:flex-col sm:items-center sm:mb-6 sm:text-2xl sm:font-semibold sm:text-gray-900 sm:dark:text-white sm:mr-10"} transition-transform duration-500 transform hover:scale-110`}
                      >
                        <img className="w-80 h-80" src={gif} alt="logo" />
                      </a>
                    </div>
                  </div>

                  <div className="px-2 md:px-0 lg:w-3/6">
                    <div className="md:mx-6 md:p-12">
                      <div className="text-center">
                        <h4 className="mb-12 mt-1 pb-1 text-xl font-bold">
                          Admin Dashboard Login
                        </h4>
                      </div>

                      <form onSubmit={handleLogin}>
                        <div>
                          <label
                            htmlFor="text"
                            className="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >
                            Username
                          </label>
                          <input
                            type="text"
                            name="text"
                            id="email"
                            value={username}
                            onChange={handleUsernameChange}
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Username"
                            required=""
                          ></input>
                        </div>
                        <div className="mt-10">
                          <label
                            htmlFor="password"
                            value={password}
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left"
                          >
                            Password
                          </label>
                          <input
                            type="password"
                            name="password"
                            id="password"
                            onChange={handlePasswordChange}
                            placeholder="••••••••"
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            required=""
                          ></input>
                        </div>

                        <div className="flex items-center justify-between">
                          <button
                            onClick={navigatesignup}
                            className="mt-5 text-sm font-medium  text-blue-700 hover:text-blue-900 "
                          >
                            <span className="text-black no-underline">
                              Don’t have an account?
                            </span>{" "}
                            <span className="underline">Sign Up</span>
                          </button>
                          <button
                            onClick={navigatepass}
                            className="mt-5 text-sm font-medium text-blue-700 hover:text-blue-900 underline"
                          >
                            Forgot password?
                          </button>
                        </div>
                        <button
                          type="submit"
                          className=" mt-6 bgbutton w-full hover:bg-indigo-900 rounded-lg text-white text-sm px-5 py-2.5 text-center"
                        >
                          Login
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
