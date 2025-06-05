import { useEffect, useState } from "react";
import { schema } from "../Validate/LoginSchema";
import { YupToError } from "../Validate/YuptoError";
import { useFetchStore } from "../stores/UseFetchStore";

function Newdo() {
 

  return (
    <div>
      

      <div className="flex justify-between">
        <input type="checkbox" className="checkbox" placeholder="Learn React" />
        <label className="label">Learn React</label>
        <button className="">X</button>
      </div>

      <div className="flex justify-between">
        <input type="checkbox" className="checkbox" placeholder="Learn React" />
        <label className="label">Learn React</label>
        <button className="">X</button>
      </div>

      <div className="flex justify-between">
        <input type="checkbox" className="checkbox" placeholder="Learn React" />
        <label className="label">Learn React</label>
        <button className="">X</button>
      </div>
    </div>
  );
}

export default Newdo;
