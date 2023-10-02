import React, { useState } from "react";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout = ({ setLocalStorage, handleChange }) => {
  return (
    <div
      className="bg-white px-4 pb-10 rounded-2xl "
      style={{
        border: "5px solid silver",
        height:"700px",
        width:"450px",
        margin:"100px auto 0"
      }}
    >
      <div
        style={{
          position: "relative",
          zIndex: "10",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          margin: "20px auto",
          width: "120px",
        }}
      >
        <span
          style={{
            width: "8px",
            height: "8px",
            borderRadius: "50%",
            backgroundColor: "black",
            display: "block",
          }}
        ></span>
        <span
          style={{
            width: "60px",
            height: "5px",
            borderRadius: "20px",
            backgroundColor: "black",
            display: "block",
          }}
        ></span>
        <span
          style={{
            width: "8px",
            height: "8px",
            borderRadius: "50%",
            backgroundColor: "black",
            display: "block",
          }}
        ></span>
      </div>
      <div
        style={{ background: "#f4f8fb", border: "1px solid black", height:"90%"}}
        className="style relative bg-white w-full  rounded-md pt-5"
      >
        {/* <div
          className=" flex items-center p-1 justify-center camera bg-black absolute top-1 left-1/2 w-4 h-4 -translate-x-1"
          style={{ borderRadius: "50%" }}
        >
          <div className="point w-full h-full rounded-full bg-gray-500"></div>
        </div> */}
        <main className="w-full">
          <Outlet />
        </main>
        <footer
          style={{ boxShadow: "0px -3px 6px -3px gray" }}
          className="absolute bottom-0 right-0 h-16 w-full bg-white px-5 rounded-t-lg rounded-b-xl"
        >
          <Footer
            setLocalStorage={setLocalStorage}
            handleChange={handleChange}
          />
        </footer>
      </div>
    </div>
  );
};

export default Layout;
