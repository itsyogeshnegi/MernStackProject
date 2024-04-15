import React, { useState } from "react";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
const LogIn = () => {
  const [data, setData] = useState({
    id: "",
    passcode: "",
  });
  const navigate = useNavigate();

  let admin_ID = "admin@gmail.com";
  let passcode = "admin@123";
  const logInform = e => {
    e.preventDefault();
    if (data.id === "" || data.passcode === "") {
      toast.warning("Fill Up Both Credentials...");
    } else if (data.id === admin_ID && data.passcode === passcode) {
      toast.success("Welcome Back Admin");
      setTimeout(() => {
        navigate("/Dashboard");
      }, 1300);
    } else {
      toast.error("Invalid Credentials...");
    }
  };

  return (
    <div
      className="h-screen w-full flex justify-center items-center"
      style={{
        backgroundImage: "url('/banners/logIn.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}>
      <form
        onSubmit={logInform}
        className="rounded-3xl h-96 w-96 bg-black bg-opacity-25 backdrop-blur-lg flex justify-center flex-col items-center">
        <input
          type="text"
          className="h-12 w-[80%] my-2 bg-transparent border-2 outline-none text-white text-center rounded-2xl"
          placeholder="Admin-ID"
          value={data.id}
          onChange={e => setData({ ...data, id: e.target.value })}
        />
        <input
          type="password"
          className="h-12 w-[80%] my-2 bg-transparent outline-none border-2 text-white text-center rounded-2xl"
          placeholder="Passcode"
          value={data.passcode}
          onChange={e => setData({ ...data, passcode: e.target.value })}
        />
        <button
          onClick={logInform}
          className="bg-blue-500 h-11  w-[50%] rounded-2xl text-white font-semibold hover:bg-blue-700">
          Submit
        </button>
      </form>
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Bounce}
      />
    </div>
  );
};

export default LogIn;
