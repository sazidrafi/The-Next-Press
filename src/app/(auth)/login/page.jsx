"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  //handle login function
  const handleLogin = (data) => {
    console.log(data);
  };
  // console.log(errors);


  //this takes value directly from input field (similar like onChange method)
  // console.log(watch("email"));
  // console.log(watch("password"));
  return (
    <div className="container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100">
      <div className="p-10 rounded-xl bg-white">
        <h2 className="font-bold text-3xl text-center mb-6">
          Login your account
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit(handleLogin)}>
          <fieldset className="fieldset text-lg">
            <legend className="fieldset-legend">Email address</legend>
            <input
              {...register("email", { required: "Email is required" })}
              type="email"
              className="input"
              placeholder="Type email here"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </fieldset>
          <fieldset className="fieldset text-lg">
            <legend className="fieldset-legend">Password</legend>
            <input
              type="password"
              className="input"
              placeholder="Type password here"
              {...register("password", { required: "Password is required" })}
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </fieldset>
          <button className="btn bg-slate-800 text-white w-full btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">
            Login
          </button>
        </form>
        <p className="mt-4  text-center">
          Don't have account ?{" "}
          <Link href={"/register"} className="text-blue-400 font-semibold">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
