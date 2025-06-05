import React, { useState } from "react";
import { useNavigate } from "react-router";
import { schema } from "../Validate/LoginSchema";
import { YupToError } from "../Validate/YuptoError";

function Login() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const navi = useNavigate();

  const hdlChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const [error, setError] = useState({});
  const URL = 'http://cc20-todo-midterm-env.eba-fi9p2pds.ap-southeast-1.elasticbeanstalk.com/api/V1/auth/login'
    
  

  const hdlSubmit = async (e) => {
    e.preventDefault();
    try {
      await schema.validate(formData, { abortEarly: false });
      await fetch(URL, {
        method: 'POST', 
        headers:{"Content-type":"application/json"},
        body: JSON.stringify(formData)
      })
      setError({});
      navi("/todolist");
    } catch (error) {
      console.log(error)
      const errObj = YupToError(error);
      setError(errObj);
      console.log("error");
    }
  };

  return (
    <div className="flex justify-center bg-amber-100 h-screen flex-col items-center">
      <form onSubmit={hdlSubmit}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Login</legend>

          <label className="label">Username</label>
          <input
            type="text"
            className="input"
            placeholder="Username"
            name="username"
            value={formData.username}
            onChange={hdlChange}
          />
          <p className="text-red-500">{error.username}</p>

          <label className="label">Password</label>
          <input
            type="password"
            className="input"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={hdlChange}
          />
          <p className="text-red-500">{error.password}</p>

          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
      </form>
    </div>
  );
}

export default Login;
