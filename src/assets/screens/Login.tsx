import { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import { useThemeContext } from "../../layout/ThemeContext";
import {
  IconArrowLeft,
  IconEye,
  IconLock,
  IconLockOpen,
  IconUser,
} from "@tabler/icons-react";
import TextErrorForm from "../../components/commons/TextErrorForm";
import { loginSchema } from "../../schema/Authorization.schema";
import { handleErrorNotif } from "../../utils/natif";
import ButtonSpinner from "../../components/commons/ButtonSpinner";
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const { theme, common: c } = useThemeContext(); // Menggunakan tema dari konteks

  const [logoUrl, setLogoUrl] = useState("/logo/logo.png");
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState<{
    username?: string;
    password?: string;
  }>({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (theme === "dark") {
      setLogoUrl("/logo/logo_white.png");
    } else {
      setLogoUrl("/logo/logo.png");
    }
  }, [theme]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const validate = () => {
    const result = loginSchema.safeParse(formData);
    setErrors({});
    if (!result.success) {
      const formattedErrors = result.error.format();
      setErrors({
        username: formattedErrors.username?._errors[0],
        password: formattedErrors.password?._errors[0],
      });
      return false;
    }
    return true;
  };

  const clearForm = () => {
    setFormData({ username: "", password: "" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setLoading(true);
      setTimeout(() => {
        clearForm();
        handleErrorNotif(
          "Login Gagal",
          "Username dan kata sandi tidak cocok"
        );
        setLoading(false);
      }, 2000);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleForgotPassword = () => {
    setShowForgotPassword(!showForgotPassword);
  };

  return (
    <Layout pageTitle="LOGIN">
      <div className="flex justify-center items-center min-h-screen bg-silver dark:bg-slate-800">
        <div className="flex shadow-sm bg-white rounded-lg overflow-hidden w-11/12 md:w-2/3 lg:h-3/5 dark:bg-black">
          <div className="hidden xl:flex xl:w-1/2 dark:bg-black relative">
            <img
              src={`/logo/ombak.png`}
              alt="ombak"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <img
              src={`/logo/orang.png`}
              alt="Ilustrasi Login"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="w-full xl:w-1/2 p-8 flex flex-col xl:pl-0 xl:pr-10">
            <div className="flex justify-center m-6">
              <img
                src={logoUrl}
                alt="Logo"
                className="w-24 transform translate-x-3"
              />
            </div>
            <h2 className="text-2xl font-bold text-black text-center dark:text-white">
              Login
            </h2>
            <p className="font-extralight text-lg text-center mb-4 dark:text-white">
              e-UMKM
            </p>

            <form className="w-full" onSubmit={handleSubmit}>
              <div className="box mb-8">
                <div className="relative w-full group">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none z-10">
                    <IconUser className="text-grey dark:text-white" size={17} />
                  </div>
                  <input
                    type="text"
                    name="username"
                    id="floating_username"
                    value={formData.username}
                    onChange={handleInputChange}
                    className="block mt-4 py-2 lg:py-3 pl-10 w-full text-sm text-grey dark:text-white bg-silver dark:bg-slate-800 rounded-md border-none appearance-none focus:outline-none focus:ring-0 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="floating_username"
                    className="dark:text-white absolute top-2 lg:top-3 left-10 text-sm text-grey duration-300 transform origin-[0] scale-90 -translate-y-8 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:left-10 peer-focus:scale-90 peer-focus:-translate-y-8 peer-focus:left-0 peer-focus:text-primary peer-valid:left-0 peer-valid:-translate-y-8 peer-valid:scale-90 cursor-text"
                  >
                    Username
                  </label>
                </div>
                {errors.username && <TextErrorForm text={errors.username} />}
              </div>

              <div className="box mb-8">
                <div className="relative w-full group">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none z-10">
                    {showPassword ? (
                      <IconLockOpen
                        className="text-grey dark:text-white"
                        size={17}
                      />
                    ) : (
                      <IconLock
                        className="text-grey dark:text-white"
                        size={17}
                      />
                    )}
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    id="floating_password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="block mt-4 py-2 lg:py-3 pl-10 w-full text-sm text-grey dark:text-white bg-silver dark:bg-slate-800 rounded-md border-none appearance-none focus:outline-none focus:ring-0 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="floating_password"
                    className="dark:text-white absolute top-2 lg:top-3 left-10 text-sm text-grey duration-300 transform origin-[0] scale-90 -translate-y-8 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:left-10 peer-focus:scale-90 peer-focus:-translate-y-8 peer-focus:left-0 peer-focus:text-primary peer-valid:left-0 peer-valid:-translate-y-8 peer-valid:scale-90 cursor-text"
                  >
                    Password
                  </label>
                  <div
                    className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                    onClick={togglePasswordVisibility}
                  >
                    <IconEye className="text-grey dark:text-white" size={20} />
                  </div>
                </div>
                {errors.password && <TextErrorForm text={errors.password} />}
              </div>

              <div className="flex mb-4 w-full">
                <div className="flex items-center w-1/2 ">
                  <div className="mr-2 ">
                    <input
                      id="remember"
                      type="checkbox"
                      value=""
                      className="w-3 h-3 border border-silver rounded bg-silver focus:ring-3 cursor-pointer"
                    />
                  </div>
                  <label
                    htmlFor="remember"
                    className="text-xs text-greyDark cursor-pointer dark:text-white"
                  >
                    {c("Ingat Saya")}
                  </label>
                </div>

                <div className="flex justify-end items-center text-xs w-1/2">
                  <a
                    href="#"
                    onClick={toggleForgotPassword}
                    className="text-greyDark hover:text-greyDark/50 transition duration-300 dark:text-white"
                  >
                    {c("Lupa Password")}?
                  </a>
                </div>
              </div>

              <div className="flex justify-center w-full mb-0">
                <button
                  className={`text-sm font-semibold bg-primary text-white py-1.5 rounded hover:bg-primary/75 px-8 text-center transition duration-300 ${loading && "cursor-not-allowed hover:bg-primary"
                    }`}
                  disabled={loading}
                >
                  {loading && <ButtonSpinner />}
                  Login
                </button>
              </div>

              <div className="mt-4 text-xs flex justify-center">
                <span className="mr-2 dark:text-white">{c("Belum punya akun")}?</span>
                <a
                  href="/register"
                  className="text-primary hover:text-primary/50 transition duration-300"
                >
                  {c("Daftar")}
                </a>
              </div>
            </form>
            <div className="mt-4 text-xs flex justify-start items-center mb-0 py-1 text-black">
              <IconArrowLeft size={20} />
              <a
                href="/beranda"
                className="py-1 dark:text-white hover:text-black/50 transition duration-300"
              >
                {c("Kembali ke Beranda")}
              </a>
            </div>
          </div>
        </div>
      </div>

      {showForgotPassword && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-md shadow-md w-11/12 md:w-1/3 dark:bg-black text-sm">
            <h3 className="text-base font-semibold mb-4 dark:text-white">
              {c("Lupa Password")}
            </h3>
            <p className="mb-4 dark:text-white text-xs">{c("inputYourEmail")}:</p>
            <input
              type="email"
              className="w-full p-2 mb-4 text-xs text-grey dark:text-white bg-silver dark:bg-slate-800 rounded-md border-none appearance-none focus:outline-none focus:ring-0"
              placeholder="Email"
            />
            <div className="flex justify-end">
              <button
                onClick={toggleForgotPassword}
                className="transition duration-300 mr-4 text-gray-500 hover:text-gray-700 bg-silver px-3 py-1.5 rounded dark:bg-slate-800  dark:text-white hover:bg-inactive"
              >
                {c("Batal")}
              </button>
              <button className="bg-primary transition-colors duration-300 text-white px-3 py-1.5 rounded hover:bg-primaryHover">
                {c("Kirim")}
              </button>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Login;
