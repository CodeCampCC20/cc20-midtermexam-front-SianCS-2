import React, { useEffect, useState } from "react";
import Newdo from "../components/Newdo";
import { useFetchStore } from "../stores/UseFetchStore";
import { Rocket } from "lucide-react";
import { schema } from "../Validate/LoginSchema";
import { YupToError } from "../Validate/YuptoError";
import { useNavigate } from "react-router";

function ToDoList() {
  // const posts = useFetchStore((state) => state.posts);
  // const fetch = useFetchStore((state) => state.fetchData);

  // useEffect(() => {
  //   fetch();
  // }, []);
  const [formData, setFormData] = useState({
    task: "",
    userId: "40",
  });
  const navi = useNavigate();

  const hdlChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const [error, setError] = useState({});
  const URL =
    "http://cc20-todo-midterm-env.eba-fi9p2pds.ap-southeast-1.elasticbeanstalk.com/api/V1/auth/login";

  const hdlSubmit = async (e) => {
    e.preventDefault();
    try {
      await schema.validate(formData, { abortEarly: false });
      await fetch(URL, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(formData),
      });
      setError({});
      navi("/todolist");
    } catch (error) {
      console.log(error);
      const errObj = YupToError(error);
      setError(errObj);
      console.log("error");
    }
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <form onSubmit={hdlSubmit}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <h1 className="text-4xl flex gap-2">
            My Todo <Rocket />
          </h1>

          <input type="text" className="input" placeholder="new task" />
          <button className="btn btn-neutral">Ok</button>
          <p className="text-red-600 text-center">{error.task}</p>
          <Newdo />
        </fieldset>
      </form>
    </div>
  );
}

export default ToDoList;

{
  /* <div className='flex flex-wrap justify-around gap-3'>
{posts.map((el) => (
  <Newdo key={el.id} item={el}/>
))}
</div> */
}
