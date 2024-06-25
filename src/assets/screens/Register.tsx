import { useState } from "react";
import Layout from "../../components/Layout";
import { useThemeContext } from "../../layout/ThemeContext";
import { badanHukumUsaha, bidangUsaha, dinasPengampu } from "../../DataBuilder";
import { index } from "d3";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { common: c } = useThemeContext();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <Layout pageTitle="REGISTER">
      <div className="flex justify-center items-center min-h-screen bg-silver dark:bg-slate-800 py-8">
        <div className="bg-white dark:bg-black rounded-md shadow-sm overflow-hidden w-11/12 lg:w-2/3">
          <div className="p-5 flex flex-col xl:px-10">
            <h2 className="text-2xl font-semibold text-black dark:text-white text-center">
              {c("Pendaftaran")}
            </h2>
            <p className="font-extralight text-lg text-center mb-8 text-black dark:text-white">
              e-UMKM
            </p>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-3">
              {/* <!-- Kolom Kiri --> */}
              <div className="px-4">
                <div className="relative w-full mb-8 group">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none z-10 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="17"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="icon icon-tabler icons-tabler-outline icon-tabler-building-store opacity-55 dark:text-white"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M3 21l18 0" />
                      <path d="M3 7v1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1h-18l2 -4h14l2 4" />
                      <path d="M5 21l0 -10.15" />
                      <path d="M19 21l0 -10.15" />
                      <path d="M9 21v-4a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v4" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    name="namaUMKM"
                    id="namaUMKM"
                    className="block py-2 lg:py-3 pl-10 w-full text-sm  text-grey  dark:text-white bg-silver dark:bg-slate-800 rounded-md border-none appearance-none focus:outline-none focus:ring-0 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="namaUMKM"
                    className="dark:text-white absolute top-2 lg:top-3 left-10 text-sm  text-grey duration-300 transform origin-[0] scale-90 -translate-y-8 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:left-10 peer-focus:scale-90 peer-focus:-translate-y-8 peer-focus:left-0 peer-focus:text-primary peer-valid:left-0 peer-valid:-translate-y-8 peer-valid:scale-90"
                  >
                    {c("Nama UMKM")}
                  </label>
                </div>

                <div className="relative w-full mb-8 group">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none z-10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="17"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="opacity-55 icon icon-tabler icons-tabler-outline icon-tabler-arrows-maximize dark:text-white"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M16 4l4 0l0 4" />
                      <path d="M14 10l6 -6" />
                      <path d="M8 20l-4 0l0 -4" />
                      <path d="M4 20l6 -6" />
                      <path d="M16 20l4 0l0 -4" />
                      <path d="M14 14l6 6" />
                      <path d="M8 4l-4 0l0 4" />
                      <path d="M4 4l6 6" />
                    </svg>
                  </div>
                  <select
                    name="skalaUsaha"
                    id="skalaUsaha"
                    className="dark:text-white block py-2 lg:py-3 pl-10 w-full text-sm  text-grey  bg-silver dark:bg-slate-800 rounded-md border-none appearance-none focus:outline-none focus:ring-0 peer"
                    required
                    defaultValue=""
                  >
                    <option value="" disabled>
                      {c("Pilih")} {c("Skala Usaha")}
                    </option>
                    <option value="mikro">{c("Usaha Mikro")}</option>
                    <option value="kecil">{c("Usaha Kecil")}</option>
                    <option value="menengah">{c("Usaha Menengah")}</option>
                  </select>
                  <label
                    htmlFor="skalaUsaha"
                    className="dark:text-white absolute top-2 lg:top-3 left-10 text-sm  text-grey duration-300 transform origin-[0] scale-90 -translate-y-8 opacity-0 peer-focus:opacity-100 peer-focus:left-0 peer-focus:text-primary peer-valid:opacity-100 peer-valid:left-0 peer-valid:scale-90 peer-valid:-translate-y-8"
                  >
                    Skala Usaha
                  </label>
                </div>

                <div className="relative w-full mb-8 group">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none z-10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="17"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="opacity-55 icon icon-tabler icons-tabler-outline icon-tabler-layout-grid dark:text-white"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M4 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
                      <path d="M14 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
                      <path d="M4 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
                      <path d="M14 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
                    </svg>
                  </div>
                  <select
                    name="bidangUsaha"
                    id="bidangUsaha"
                    className="dark:text-white block py-2 lg:py-3 pl-10 w-full text-sm  text-grey  bg-silver dark:bg-slate-800 rounded-md border-none appearance-none focus:outline-none focus:ring-0 peer"
                    required
                  >
                    <option value="" disabled selected>
                      {c("Pilih")} {c("Bidang Usaha")}
                    </option>
                    {bidangUsaha.map((item, index) => (
                      <option key={index} value={item.slug}>{c(item.name)}</option>
                    ))}

                  </select>
                  <label
                    htmlFor="skalaUsaha"
                    className="dark:text-white absolute top-2 lg:top-3 left-10 text-sm  text-grey duration-300 transform origin-[0] scale-90 -translate-y-8 opacity-0 peer-focus:opacity-100 peer-focus:left-0 peer-focus:text-primary peer-valid:opacity-100 peer-valid:left-0 peer-valid:scale-90 peer-valid:-translate-y-8"
                  >
                    Bidang Usaha
                  </label>
                </div>

                <div className="relative w-full mb-8 group">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none z-10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="17"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="opacity-55 icon icon-tabler icons-tabler-outline icon-tabler-gavel dark:text-white"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M13 10l7.383 7.418c.823 .82 .823 2.148 0 2.967a2.11 2.11 0 0 1 -2.976 0l-7.407 -7.385" />
                      <path d="M6 9l4 4" />
                      <path d="M13 10l-4 -4" />
                      <path d="M3 21h7" />
                      <path d="M6.793 15.793l-3.586 -3.586a1 1 0 0 1 0 -1.414l2.293 -2.293l.5 .5l3 -3l-.5 -.5l2.293 -2.293a1 1 0 0 1 1.414 0l3.586 3.586a1 1 0 0 1 0 1.414l-2.293 2.293l-.5 -.5l-3 3l.5 .5l-2.293 2.293a1 1 0 0 1 -1.414 0z" />
                    </svg>
                  </div>
                  <select
                    name="badanHukum"
                    id="badanHukum"
                    className="dark:text-white block py-2 lg:py-3 pl-10 w-full text-sm  text-grey bg-silver dark:bg-slate-800 rounded-md border-none appearance-none focus:outline-none focus:ring-0 peer"
                    required
                  >
                    <option value="" disabled selected>
                      {c("Pilih")} {c("Badan Hukum")}
                    </option>
                    {badanHukumUsaha.map((item) => (
                      <option value={item.slug}>{c(item.name)}</option>
                    ))}
                  </select>
                  <label
                    htmlFor="skalaUsaha"
                    className="dark:text-white absolute top-2 lg:top-3 left-10 text-sm  text-grey duration-300 transform origin-[0] scale-90 -translate-y-8 opacity-0 peer-focus:opacity-100 peer-focus:left-0 peer-focus:text-primary peer-valid:opacity-100 peer-valid:left-0 peer-valid:scale-90 peer-valid:-translate-y-8"
                  >
                    {c("Badan Hukum")}
                  </label>
                </div>

                <div className="relative w-full mb-8 group">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none z-10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="17"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="opacity-55 icon icon-tabler icons-tabler-outline icon-tabler-user-pentagon dark:text-white"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M13.163 2.168l8.021 5.828c.694 .504 .984 1.397 .719 2.212l-3.064 9.43a1.978 1.978 0 0 1 -1.881 1.367h-9.916a1.978 1.978 0 0 1 -1.881 -1.367l-3.064 -9.43a1.978 1.978 0 0 1 .719 -2.212l8.021 -5.828a1.978 1.978 0 0 1 2.326 0z" />
                      <path d="M12 13a3 3 0 1 0 0 -6a3 3 0 0 0 0 6z" />
                      <path d="M6 20.703v-.703a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v.707" />
                    </svg>
                  </div>
                  <select
                    name="dinasPengampu"
                    id="dinasPengampu"
                    className="dark:text-white block py-2 lg:py-3 pl-10 w-full text-sm  text-grey bg-silver dark:bg-slate-800 rounded-md border-none appearance-none focus:outline-none focus:ring-0 peer"
                    required
                  >
                    <option value="" disabled selected>
                      {c("Pilih")} {c("Dinas Pengampu")}
                    </option>
                    {dinasPengampu.map((item, index) => (
                      <option key={index} value={item.slug}>{c(item.name)}</option>
                    ))}
                  </select>
                  <label
                    htmlFor="skalaUsaha"
                    className="dark:text-white absolute top-2 lg:top-3 left-10 text-sm  text-grey duration-300 transform origin-[0] scale-90 -translate-y-8 opacity-0 peer-focus:opacity-100 peer-focus:left-0 peer-focus:text-primary peer-valid:opacity-100 peer-valid:left-0 peer-valid:scale-90 peer-valid:-translate-y-8"
                  >
                    {c("Dinas Pengampu")}
                  </label>
                </div>

                <div className="relative w-full mb-0 group">
                  <div className="absolute inset-y-0 left-0 flex pt-3 pl-3 pointer-events-none z-10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="17"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="opacity-55 icon icon-tabler icons-tabler-outline icon-tabler-map-pin dark:text-white"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                      <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
                    </svg>
                  </div>
                  <textarea
                    name="alamat"
                    id="alamat"
                    className="block py-2.5 pl-10 w-full text-sm  text-grey bg-silver dark:bg-slate-800 rounded-md border-none appearance-none focus:outline-none focus:ring-0 peer"
                    placeholder=" "
                    required
                  ></textarea>
                  <label
                    htmlFor="alamat"
                    className="dark:text-white absolute top-2 lg:top-3 left-10 text-sm  text-grey duration-300 transform origin-[0] scale-90 -translate-y-8 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:left-10 peer-focus:scale-90 peer-focus:-translate-y-8 peer-focus:left-0 peer-focus:text-primary peer-valid:left-0 peer-valid:-translate-y-8 peer-valid:scale-90"
                  >
                    {c("Address")}
                  </label>
                </div>
              </div>

              {/* <!-- Kolom Kanan --> */}
              <div className="px-4">
                <div className="relative w-full mb-8 group">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none z-10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="17"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="icon icon-tabler icons-tabler-outline icon-tabler-phone opacity-55 dark:text-white"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    name="nomorTelepon"
                    id="nomorTelepon"
                    className="block py-2 lg:py-3 pl-10 w-full text-sm  text-grey  dark:text-white bg-silver dark:bg-slate-800 rounded-md border-none appearance-none focus:outline-none focus:ring-0 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="nomorTelepon"
                    className="dark:text-white absolute top-2 lg:top-3 left-10 text-sm  text-grey duration-300 transform origin-[0] scale-90 -translate-y-8 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:left-10 peer-focus:scale-90 peer-focus:-translate-y-8 peer-focus:left-0 peer-focus:text-primary peer-valid:left-0 peer-valid:-translate-y-8 peer-valid:scale-90"
                  >
                    {c("No Telepon")}
                  </label>
                </div>

                <div className="relative w-full mb-8 group">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none z-10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="17"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="icon icon-tabler icons-tabler-outline icon-tabler-mail opacity-55 dark:text-white"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
                      <path d="M3 7l9 6l9 -6" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    className="block py-2 lg:py-3 pl-10 w-full text-sm  text-grey  dark:text-white bg-silver dark:bg-slate-800 rounded-md border-none appearance-none focus:outline-none focus:ring-0 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="email"
                    className="dark:text-white absolute top-2 lg:top-3 left-10 text-sm  text-grey duration-300 transform origin-[0] scale-90 -translate-y-8 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:left-10 peer-focus:scale-90 peer-focus:-translate-y-8 peer-focus:left-0 peer-focus:text-primary peer-valid:left-0 peer-valid:-translate-y-8 peer-valid:scale-90"
                  >
                    Email
                  </label>
                </div>

                <div className="relative w-full mb-8 group">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none z-10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="17"
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
                    name="username"
                    id="username"
                    className="block py-2 lg:py-3 pl-10 w-full text-sm  text-grey  dark:text-white bg-silver dark:bg-slate-800 rounded-md border-none appearance-none focus:outline-none focus:ring-0 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="username"
                    className="dark:text-white absolute top-2 lg:top-3 left-10 text-sm  text-grey duration-300 transform origin-[0] scale-90 -translate-y-8 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:left-10 peer-focus:scale-90 peer-focus:-translate-y-8 peer-focus:left-0 peer-focus:text-primary peer-valid:left-0 peer-valid:-translate-y-8 peer-valid:scale-90"
                  >
                    Username
                  </label>
                </div>

                <div className="relative w-full mb-8 group">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none z-10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="17"
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
                    name="password"
                    id="password"
                    className="block py-2 lg:py-3 pl-10 w-full text-sm  text-grey  dark:text-white bg-silver dark:bg-slate-800 rounded-md border-none appearance-none focus:outline-none focus:ring-0 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="password"
                    className="dark:text-white absolute top-2 lg:top-3 left-10 text-sm  text-grey duration-300 transform origin-[0] scale-90 -translate-y-8 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:left-10 peer-focus:scale-90 peer-focus:-translate-y-8 peer-focus:left-0 peer-focus:text-primary peer-valid:left-0 peer-valid:-translate-y-8 peer-valid:scale-90"
                  >
                    {c("Kata Sandi")}
                  </label>
                  <div
                    className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                    onClick={togglePasswordVisibility}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="17"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="opacity-50 icon icon-tabler icons-tabler-eye dark:text-white"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                      <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" />
                    </svg>
                  </div>
                </div>

                <div className="relative w-full mb-6 group">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none z-10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="17"
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
                    name="confirmPassword"
                    id="confirmPassword"
                    className="block py-2 lg:py-3 pl-10 w-full text-sm  text-grey dark:text-white bg-silver dark:bg-slate-800 rounded-md border-none appearance-none focus:outline-none focus:ring-0 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="confirmPassword"
                    className="dark:text-white absolute top-2 lg:top-3 left-10 text-sm  text-grey duration-300 transform origin-[0] scale-90 -translate-y-8 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:left-10 peer-focus:scale-90 peer-focus:-translate-y-8 peer-focus:left-0 peer-focus:text-primary peer-valid:left-0 peer-valid:-translate-y-8 peer-valid:scale-90"
                  >
                    {c("Konfirmasi")} {c("Kata Sandi")}
                  </label>
                  <div
                    className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                    onClick={togglePasswordVisibility}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="17"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="opacity-50 icon icon-tabler icons-tabler-eye dark:text-white"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                      <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" />
                    </svg>
                  </div>
                </div>

                <div className="flex items-center mb-2">
                  <div className="mr-2 ">
                    <input
                      id="remember"
                      type="checkbox"
                      value=""
                      className="w-3 h-3 border border-silver rounded bg-silver focus:ring-3 cursor-pointer"
                      required
                    />
                  </div>
                  <label
                    htmlFor="remember"
                    className="text-xs text-greyDark cursor-pointer dark:text-white"
                  >
                    {c("Saya menerima syarat dan ketentuan yang berlaku")}
                  </label>
                </div>

                <button className="w-full py-2 bg-primary text-white rounded font-semibold text-sm mt-4 hover:bg-primary/75 transition duration-300">
                  {c("Register")}
                </button>
              </div>

              <div className="mt-0 text-sm flex justify-start items-center mb-0  ml-5 text-black py-1 hover:text-black/50 transition duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-narrow-left opacity-70 dark:text-white"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M5 12l14 0" />
                  <path d="M5 12l4 4" />
                  <path d="M5 12l4 -4" />
                </svg>
                <a href="/beranda" className="dark:text-white text-xs">
                  {c("Kembali ke Beranda")}
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Register;
