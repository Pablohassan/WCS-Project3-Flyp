import { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { UserContext } from "@components/UserContextProvider";
import { login } from "@services/api";

import bgImage from "@assets/images/franckOcean.jpg";

export default function LoginPage() {
  const navigate = useNavigate();
  const [error, setError] = useState();
  const { setUser } = useContext(UserContext);

  const { register, handleSubmit } = useForm();

  const onSubmit = async (formData) => {
    try {
      setUser(await login(formData));
      navigate("/");
    } catch (err) {
      setError("identifiants incorrects");
    }
  };

  return (
    <div
      className="-mt-20 min-h-screen flex items-center justify-center"
      style={{
        background: `url(${bgImage})`,
        backgroundPosition: "center center",
        backgroundSize: "cover",
      }}
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="p-12 rounded-xl bg-white w-4/5 md:w-1/2 lg:1/4"
      >
        <p className="mb-8 pb-2 text-lg text-center sm:text-xl sm:text-left border-b border-b-color-gray-400">
          Login to your account
        </p>

        {error && (
          <p className="my-4 text-error text-center sm:text-left">{error}</p>
        )}

        <label>
          Email
          <input className="block" type="email" {...register("email")} />
        </label>

        <label className="block mt-8">
          Password
          <input type="password" className="block" {...register("password")} />
        </label>

        <button
          type="submit"
          className="mt-8 bg-primary focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none border rounded hover:bg-red-600 py-4 w-full"
        >
          Connect to your account
        </button>
      </form>
    </div>
  );
}
