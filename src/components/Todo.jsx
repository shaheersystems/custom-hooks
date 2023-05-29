import React from "react";

function Todo({ title, isDone }) {
  return (
    <div className='p-3 flex items-center gap-3 rounded bg-gray-100'>
      <div
        className={`p-1 rounded-full ${isDone ? "bg-blue-600" : "bg-gray-600"}`}
      >
        <div className='p-1 rounded-full bg-white'></div>
      </div>

      <div>
        <span className={`${isDone ? "line-through" : ""}`}>{title}</span>
      </div>
    </div>
  );
}

export default Todo;
