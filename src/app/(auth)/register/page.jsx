"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";

const RegisterPage = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  //handle login function
  const handleRegister = async (data) => {
    // console.log(data);
    const { email, name, photo, password } = data;

    const { data: res, error } = await authClient.signUp.email({
      name: name, // required, The name of the user.
      email: email, // required, The email address of the user.
      password: password, // required, The password of the user. It should be at least 8 characters long and max 128 by default.
      image: photo, // An optional profile image of the user.
      callbackURL: "/", // An optional URL to redirect to after the user signs up.
    });

    console.log(res, error);
    if (error) {
      toast.warning(error.message);
    }
    if (res) {
      toast.success("Account Created Successfully");
    }
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
        <form className="space-y-4" onSubmit={handleSubmit(handleRegister)}>
          <fieldset className="fieldset text-lg">
            <legend className="fieldset-legend">Name</legend>
            <input
              {...register("name", { required: "Name is required" })}
              type="text"
              className="input"
              placeholder="Type name here"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </fieldset>
          <fieldset className="fieldset text-lg">
            <legend className="fieldset-legend">Photo URL</legend>
            <input
              {...register("photo", { required: "photo url is required" })}
              type="text"
              className="input"
              placeholder="Type your photo url"
            />
            {errors.photo && (
              <p className="text-red-500 text-sm">{errors.photo.message}</p>
            )}
          </fieldset>

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
          <fieldset className="fieldset text-lg relative">
            <legend className="fieldset-legend">Password</legend>
            <input
              type={isShowPassword ? "text" : "password"}
              className="input"
              placeholder="Type password here"
              {...register("password", { required: "Password is required" })}
            />
            <span
              className="absolute right-2 top-3"
              onClick={() => setIsShowPassword(!isShowPassword)}
            >
              {isShowPassword ? <FaEye /> : <FaEyeSlash />}
            </span>
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </fieldset>
          <button className="btn bg-slate-800 text-white w-full btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">
            Register
          </button>
        </form>
        <p className="mt-4 text-center">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-400 font-semibold">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
