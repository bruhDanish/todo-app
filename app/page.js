"use client";
import React, { useState } from "react";

const page = () => {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [mainTask, setmainTask] = useState([])
  const submitHandler = (e) => {
    e.preventDefault();
    setmainTask([...mainTask, {title, desc}]);

    settitle("");
    setdesc("");
    console.log(mainTask);
  }

  const deleteHandler = (i) => {
    let copyTask = [...mainTask];
    copyTask.splice(i, 1);
    setmainTask(copyTask);
  }

  let renderTask = <h2>No Task available</h2>

  if(mainTask.length > 0){
    renderTask= mainTask.map((t, i)=>{
      return( 
      <li key={i} className="flex items-center justify-between mb-8">
        <div>
          <h5 className="text-2xl font-semibold">{t.title}</h5>
          <h6 className="text-lg font-medium">{t.desc}</h6>
        </div>
        <button
        onClick={()=>deleteHandler(i)}
        className="bg-red-400 text-white px-4 py-2 rounded font-bold">
          Delete
        </button>
      </li>
      );
    })
  }
  return (
    <>
      <h1
        className="bg-red-400
      text-white
        p-5 text-3xl font-bold text-center">
        Danish's ToDo List
      </h1>

      <form onSubmit={submitHandler}>
        <input
          type="text"
          className="border-2 border-black text-2xl 
          m-8 px-4 py-2"
          placeholder="Enter Task here" value={title}
          onChange={(e)=>{
            settitle(e.target.value);
          }}/>
        <input
          type="text"
          className="border-2 border-black text-2xl 
          m-8 px-4 py-2"
          placeholder="Enter Description here" value={desc}
          onChange={(e)=>{
            setdesc(e.target.value);
          }}/>
        <button
          className="bg-red-400 text-white text-2xl
          px-4 py-2
          font-bold
          rounded">
          Add Task
        </button>
      </form>
      <hr/>
      <div className="p-8 bg-slate-200">
        <ul>
          {renderTask}
        </ul>
      </div>
    </>
  );
};

export default page;
