import { useState } from 'react';

const Register = () => {

    const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-silver">
        <div className="bg-white rounded-md shadow-lg overflow-hidden w-11/12 lg:w-2/3">
            
            <div className="p-8 flex flex-col xl:px-10">
                <h2 className="text-2xl xl:text-3xl font-bold text-black text-center">Pendaftaran</h2>
                <p className="font-extralight text-lg xl:text-xl text-center mb-4">e-UMKM</p>
                <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    
                    <div className="relative w-full mb-4 group">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none z-10">
                            <svg  xmlns="http://www.w3.org/2000/svg"  width="20"  height="20"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-building-store opacity-55"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 21l18 0" /><path d="M3 7v1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1h-18l2 -4h14l2 4" /><path d="M5 21l0 -10.15" /><path d="M19 21l0 -10.15" /><path d="M9 21v-4a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v4" /></svg>
                        </div>
                        <input
                            type="text"
                            name="namaUMKM"
                            id="namaUMKM"
                            className="block py-2 pl-10 w-full text-sm md:text-base text-grey bg-silver rounded-md border-none appearance-none focus:outline-none focus:ring-0 peer"
                            placeholder=" "
                            required
                        />
                        <label
                            htmlFor="namaUMKM"
                            className="absolute top-2 left-10 text-sm md:text-base text-grey duration-300 transform origin-[0] scale-90 -translate-y-8 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:left-10 peer-focus:scale-90 peer-focus:-translate-y-8 peer-focus:left-0 peer-focus:text-primary peer-valid:left-0 peer-valid:-translate-y-8 peer-valid:scale-90"
                        >
                            Nama UMKM
                        </label>
                    </div>

                    <div className="relative w-full mb-4 group">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none z-10">
                            <svg  xmlns="http://www.w3.org/2000/svg"  width="20"  height="20"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-phone opacity-55"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" /></svg>
                        </div>
                        <input
                            type="text"
                            name="nomorTelepon"
                            id="nomorTelepon"
                            className="block py-2 pl-10 w-full text-sm md:text-base text-grey bg-silver rounded-md border-none appearance-none focus:outline-none focus:ring-0 peer"
                            placeholder=" "
                            required
                        />
                        <label
                            htmlFor="nomorTelepon"
                            className="absolute top-2 left-10 text-sm md:text-base text-grey duration-300 transform origin-[0] scale-90 -translate-y-8 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:left-10 peer-focus:scale-90 peer-focus:-translate-y-8 peer-focus:left-0 peer-focus:text-primary peer-valid:left-0 peer-valid:-translate-y-8 peer-valid:scale-90"
                        >
                            Nomor Telepon
                        </label>
                    </div>

                    <div className="relative w-full mb-4 group">
                        <select
                            name="skalaUsaha"
                            id="skalaUsaha"
                            className="block py-2 pl-3 w-full text-sm md:text-base text-grey bg-silver rounded-md border-none appearance-none focus:outline-none focus:ring-0 peer"
                            required
                        >
                            <option value="" disabled selected>Pilih Skala Usaha</option>
                            <option value="small">Kecil</option>
                            <option value="medium">Menengah</option>
                            <option value="large">Besar</option>
                        </select>
                    </div>

                    <div className="relative w-full mb-4 group">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none z-10">
                            <svg  xmlns="http://www.w3.org/2000/svg"  width="20"  height="20"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-mail opacity-55"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" /><path d="M3 7l9 6l9 -6" /></svg>
                        </div>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className="block py-2 pl-10 w-full text-sm md:text-base text-grey bg-silver rounded-md border-none appearance-none focus:outline-none focus:ring-0 peer"
                            placeholder=" "
                            required
                        />
                        <label
                            htmlFor="email"
                            className="absolute top-2 left-10 text-sm md:text-base text-grey duration-300 transform origin-[0] scale-90 -translate-y-8 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:left-10 peer-focus:scale-90 peer-focus:-translate-y-8 peer-focus:left-0 peer-focus:text-primary peer-valid:left-0 peer-valid:-translate-y-8 peer-valid:scale-90"
                        >
                            Email
                        </label>
                    </div>

                    <div className="relative w-full mb-4 group">
                        <select
                            name="bidangUsaha"
                            id="bidangUsaha"
                            className="block py-2 pl-3 w-full text-sm md:text-base text-grey bg-silver rounded-md border-none appearance-none focus:outline-none focus:ring-0 peer"
                            required
                        >
                            <option value="" disabled selected>Pilih Bidang Usaha</option>
                            <option value="agriculture">Pertanian</option>
                            <option value="manufacturing">Manufaktur</option>
                            <option value="services">Jasa</option>
                        </select>
                    </div>

                    <div className="relative w-full mb-4 group">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none z-10">
                            <svg
                                xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-user opacity-55">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                                <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                            </svg>
                        </div>
                        <input
                            type="text"
                            name="username"
                            id="username"
                            className="block py-2 pl-10 w-full text-sm md:text-base text-grey bg-silver rounded-md border-none appearance-none focus:outline-none focus:ring-0 peer"
                            placeholder=" "
                            required
                        />
                        <label
                            htmlFor="username"
                            className="absolute top-2 left-10 text-sm md:text-base text-grey duration-300 transform origin-[0] scale-90 -translate-y-8 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:left-10 peer-focus:scale-90 peer-focus:-translate-y-8 peer-focus:left-0 peer-focus:text-primary peer-valid:left-0 peer-valid:-translate-y-8 peer-valid:scale-90"
                        >
                            Username
                        </label>
                    </div>

                    <div className="relative w-full mb-4 group">
                        <select
                            name="badanHukum"
                            id="badanHukum"
                            className="block py-2 pl-3 w-full text-sm md:text-base text-grey bg-silver rounded-md border-none appearance-none focus:outline-none focus:ring-0 peer"
                            required
                        >
                            <option value="" disabled selected>Pilih Badan Hukum</option>
                            <option value="pt">PT</option>
                            <option value="cv">CV</option>
                            <option value="firm">Firma</option>
                        </select>
                    </div>

                    <div className="relative w-full mb-4 group">
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer" onClick={togglePasswordVisibility}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-50 icon icon-tabler icons-tabler-outline icon-tabler-eye">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                            <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" />
                            </svg>
                        </div>
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            id="password"
                            className="block py-2 pl-10 w-full text-sm md:text-base text-grey bg-silver rounded-md border-none appearance-none focus:outline-none focus:ring-0 peer"
                            placeholder=" "
                            required
                        />
                        <label
                            htmlFor="password"
                            className="absolute top-2 left-10 text-sm md:text-base text-grey duration-300 transform origin-[0] scale-90 -translate-y-8 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:left-10 peer-focus:scale-90 peer-focus:-translate-y-8 peer-focus:left-0 peer-focus:text-primary peer-valid:left-0 peer-valid:-translate-y-8 peer-valid:scale-90"
                        >
                            Password
                        </label>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer" onClick={togglePasswordVisibility}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-50 icon icon-tabler icons-tabler-eye">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                                <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" />
                            </svg>
                        </div>
                    </div>

                    <div className="relative w-full mb-4 group">
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer" onClick={togglePasswordVisibility}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-50 icon icon-tabler icons-tabler-outline icon-tabler-eye">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                            <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" />
                            </svg>
                        </div>
                        <input
                            type={showPassword ? "text" : "password"}
                            name="confirmPassword"
                            id="confirmPassword"
                            className="block py-2 pl-10 w-full text-sm md:text-base text-grey bg-silver rounded-md border-none appearance-none focus:outline-none focus:ring-0 peer"
                            placeholder=" "
                            required
                        />
                        <label
                            htmlFor="confirmPassword"
                            className="absolute top-2 left-10 text-sm md:text-base text-grey duration-300 transform origin-[0] scale-90 -translate-y-8 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:left-10 peer-focus:scale-90 peer-focus:-translate-y-8 peer-focus:left-0 peer-focus:text-primary peer-valid:left-0 peer-valid:-translate-y-8 peer-valid:scale-90"
                        >
                            Confirm Password
                        </label>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer" onClick={togglePasswordVisibility}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-50 icon icon-tabler icons-tabler-eye">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                                <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" />
                            </svg>
                        </div>
                    </div>

                </form>

                <button className="w-full py-2 bg-primary text-white rounded-md font-bold mt-4">
                    Daftar
                </button>
            </div>
        </div>
    </div>
  );
};

export default Register;
