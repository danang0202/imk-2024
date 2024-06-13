import { useState } from "react";
import Layout from "../../components/Layout";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Layout pageTitle="LOGIN">
      <div className="flex justify-center items-center min-h-screen bg-silver dark:bg-slate-800">
        <div className="flex shadow-sm bg-white rounded-lg overflow-hidden w-11/12 md:w-2/3 lg:h-3/5 dark:bg-black">
          <div className="hidden xl:flex xl:w-1/2">
            <img
              src={`/logo/ilulogin.png`}
              alt="Ilustrasi Login"
              className="w-full h-full"
            />
          </div>

          <div className="w-full xl:w-1/2 p-8  flex flex-col xl:pl-0 xl:pr-10">
            <div className="flex justify-center m-6">
              <img
                src={`/logo/logo.png`}
                alt="Logo"
                className="w-24 transform translate-x-3"
              />
            </div>
            <h2 className="text-2xl xl:text-3xl font-bold text-black text-center dark:text-white">
              Login
            </h2>
            <p className="font-extralight text-lg xl:text-xl text-center mb-4 dark:text-white">
              e-UMKM
            </p>

            <form className="w-full">
              <div className="relative w-full mb-8 group">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none z-10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-user opacity-55 dark:text-white"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                    <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                  </svg>
                </div>
                <input
                  type="text"
                  name="floating_username"
                  id="floating_username"
                  className="block mt-4 py-2 lg:py-3 pl-10 w-full text-sm md:text-base text-grey  dark:text-white bg-silver dark:bg-slate-800 rounded-md border-none appearance-none focus:outline-none focus:ring-0 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="floating_username"
                  className="dark:text-white absolute top-2 lg:top-3 left-10 text-sm md:text-base text-grey duration-300 transform origin-[0] scale-90 -translate-y-8 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:left-10 peer-focus:scale-90 peer-focus:-translate-y-8 peer-focus:left-0 peer-focus:text-primary peer-valid:left-0 peer-valid:-translate-y-8 peer-valid:scale-90"
                >
                  Username
                </label>
              </div>

              <div className="relative w-full mb-8 group">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none z-10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="opacity-50 icon icon-tabler icons-tabler-outline icon-tabler-lock dark:text-white"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6z" />
                    <path d="M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
                    <path d="M8 11v-4a4 4 0 1 1 8 0v4" />
                  </svg>
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  name="floating_password"
                  id="floating_password"
                  className="block mt-4 py-2 lg:py-3 pl-10 w-full text-sm md:text-base text-grey dark:text-white bg-silver dark:bg-slate-800 rounded-md border-none appearance-none focus:outline-none focus:ring-0 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="floating_password"
                  className="dark:text-white absolute top-2 lg:top-3 left-10 text-sm md:text-base text-grey duration-300 transform origin-[0] scale-90 -translate-y-8 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:left-10 peer-focus:scale-90 peer-focus:-translate-y-8 peer-focus:left-0 peer-focus:text-primary peer-valid:left-0 peer-valid:-translate-y-8 peer-valid:scale-90"
                >
                  Password
                </label>
                <div
                  className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                  onClick={togglePasswordVisibility}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="opacity-50 icon icon-tabler icons-tabler-outline icon-tabler-eye dark:text-white"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                    <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" />
                  </svg>
                </div>
              </div>
            </form>

            <div className="flex mb-4 w-full">
              <div className="flex items-center w-1/2 ">
                <div className="h-5 mr-2 ">
                  <input
                    id="remember"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 border border-silver rounded bg-silver focus:ring-3 cursor-pointer"
                    required
                  />
                </div>
                <label
                  htmlFor="remember"
                  className="text-sm text-greyDark cursor-pointer dark:text-white"
                >
                  Ingat Saya
                </label>
              </div>

              <div className="flex justify-end items-center text-sm w-1/2">
                <a
                  href="#"
                  className="text-greyDark hover:text-greyDark/50 transition duration-300 dark:text-white"
                >
                  Lupa password?
                </a>
              </div>
            </div>

            <div className="flex justify-center w-full mb-0">
              <button className="text-sm md:text-base font-semibold bg-primary text-white py-1 rounded-md hover:bg-primaryHover w-1/3 text-center transition duration-300">
                Login
              </button>
            </div>

            <div className="mt-4 text-base flex justify-center">
              <span className="mr-2 dark:text-white">Belum punya akun?</span>
              <a
                href="/register"
                className="text-primary hover:text-primary/50 transition duration-300"
              >
                Daftar
              </a>
            </div>

            <div className="mt-4 text-sm flex justify-start items-center mb-0 py-1 text-black hover:text-black/50 transition duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-narrow-left opacity-70"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M5 12l14 0" />
                <path d="M5 12l4 4" />
                <path d="M5 12l4 -4" />
              </svg>
              <a href="/beranda" className="py-1">
                Kembali ke Home
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
