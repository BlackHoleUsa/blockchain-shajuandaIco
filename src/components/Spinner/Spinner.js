import React from "react";

const Spinner = (props) => {
  return (
    <>
      <div className=" flex justify-center items-center">
        <div
          className={`loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-${props.size} w-${props.size}`}
        ></div>
      </div>
      <style>
        {`
    .loader {
    border-top-color: #3498db;
    -webkit-animation: spinner 1.5s linear infinite;
    animation: spinner 1.5s linear infinite;
  }
  
  @-webkit-keyframes spinner {
    0% { -webkit-transform: rotate(0deg); }
    100% { -webkit-transform: rotate(360deg); }
  }
  
  @keyframes spinner {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
    `}
      </style>
    </>
  );
};

export default Spinner;
