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
    {/* <!-- Kolom Kiri --> */}
    <div>
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
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="opacity-55 icon icon-tabler icons-tabler-outline icon-tabler-arrows-maximize"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M16 4l4 0l0 4" /><path d="M14 10l6 -6" /><path d="M8 20l-4 0l0 -4" /><path d="M4 20l6 -6" /><path d="M16 20l4 0l0 -4" /><path d="M14 14l6 6" /><path d="M8 4l-4 0l0 4" /><path d="M4 4l6 6" /></svg>
                        </div>
                        <select
                            name="skalaUsaha"
                            id="skalaUsaha"
                            className="block py-2 pl-10 w-full text-sm md:text-base text-grey bg-silver rounded-md border-none appearance-none focus:outline-none focus:ring-0 peer"
                            required
                            defaultValue=""
                        >
                            <option value="" disabled>Pilih Skala Usaha</option>
                            <option value="mikro">Usaha Mikro</option>
                            <option value="kecil">Usaha Kecil</option>
                            <option value="menengah">Usaha Menengah</option>
                        </select>
                        <label
                            htmlFor="skalaUsaha"
                            className="absolute top-2 left-10 text-sm md:text-base text-grey duration-300 transform origin-[0] scale-90 -translate-y-8 opacity-0 peer-focus:opacity-100 peer-focus:left-0 peer-focus:text-primary peer-valid:opacity-100 peer-valid:left-0 peer-valid:scale-90 peer-valid:-translate-y-8"
                        >
                            Skala Usaha
                        </label>
                    </div>

                    
                    <div className="relative w-full mb-4 group">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none z-10">
                        <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className="opacity-55 icon icon-tabler icons-tabler-outline icon-tabler-layout-grid"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" /><path d="M14 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" /><path d="M4 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" /><path d="M14 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" /></svg>
                        </div>
                        <select
                            name="bidangUsaha"
                            id="bidangUsaha"
                            className="block py-2 pl-10 w-full text-sm md:text-base text-grey bg-silver rounded-md border-none appearance-none focus:outline-none focus:ring-0 peer"
                            required
                        >
                            <option value="" disabled selected>Pilih Bidang Usaha</option>
                            <option value="Pertanian">Pertanian</option>
                            <option value="Perikanan">Perikanan</option>
                            <option value="Perdagangan">Perdagangan</option>
                            <option value="Industri Manufaktur">Industri Manufaktur</option>
                            <option value="Konstruksi">Konstruksi</option>
                            <option value="Transportasi dan Logisitik">Transportasi dan Logisitik</option>
                            <option value="Teknologi Informasi">Teknologi Informasi</option>
                            <option value="Jasa Keuangan">Jasa Keuangan</option>
                            <option value="Kesehatan">Kesehatan</option>
                            <option value="Pendidikan">Pendidikan</option>
                            <option value="Pariwisata">Pariwisata</option>
                            <option value="Properti dan Real EstateESDM">Energi dan Sumber Daya Mineral</option>
                            <option value="Properti dan Real Estate">Properti dan Real Estate</option>
                            <option value="Pertambangan">Pertambangan</option>
                            <option value="Hukum dan Konsultasi">Hukum dan Konsultasi</option>
                        </select>
                        <label
                            htmlFor="skalaUsaha"
                            className="absolute top-2 left-10 text-sm md:text-base text-grey duration-300 transform origin-[0] scale-90 -translate-y-8 opacity-0 peer-focus:opacity-100 peer-focus:left-0 peer-focus:text-primary peer-valid:opacity-100 peer-valid:left-0 peer-valid:scale-90 peer-valid:-translate-y-8"
                        >
                            Bidang Usaha
                        </label>
                    </div>

                    <div className="relative w-full mb-4 group">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none z-10">
                        <svg  xmlns="http://www.w3.org/2000/svg"  width="20"  height="20"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className="opacity-55 icon icon-tabler icons-tabler-outline icon-tabler-gavel"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M13 10l7.383 7.418c.823 .82 .823 2.148 0 2.967a2.11 2.11 0 0 1 -2.976 0l-7.407 -7.385" /><path d="M6 9l4 4" /><path d="M13 10l-4 -4" /><path d="M3 21h7" /><path d="M6.793 15.793l-3.586 -3.586a1 1 0 0 1 0 -1.414l2.293 -2.293l.5 .5l3 -3l-.5 -.5l2.293 -2.293a1 1 0 0 1 1.414 0l3.586 3.586a1 1 0 0 1 0 1.414l-2.293 2.293l-.5 -.5l-3 3l.5 .5l-2.293 2.293a1 1 0 0 1 -1.414 0z" /></svg>
                        </div>
                        <select
                            name="badanHukum"
                            id="badanHukum"
                            className="block py-2 pl-10 w-full text-sm md:text-base text-grey bg-silver rounded-md border-none appearance-none focus:outline-none focus:ring-0 peer"
                            required
                        >
                            <option value="" disabled selected>Pilih Badan Hukum</option>
                            <option value="pt">PT</option>
                            <option value="cv">CV</option>
                            <option value="firm">Firma</option>
                            <option value="perseorangan">Perseorangan</option>
                        </select>
                        <label
                            htmlFor="skalaUsaha"
                            className="absolute top-2 left-10 text-sm md:text-base text-grey duration-300 transform origin-[0] scale-90 -translate-y-8 opacity-0 peer-focus:opacity-100 peer-focus:left-0 peer-focus:text-primary peer-valid:opacity-100 peer-valid:left-0 peer-valid:scale-90 peer-valid:-translate-y-8"
                        >
                            Badan Hukum
                        </label>
                    </div>

                    <div className="relative w-full mb-4 group">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none z-10">
                        <svg  xmlns="http://www.w3.org/2000/svg"  width="20"  height="20"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className="opacity-55 icon icon-tabler icons-tabler-outline icon-tabler-user-pentagon"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M13.163 2.168l8.021 5.828c.694 .504 .984 1.397 .719 2.212l-3.064 9.43a1.978 1.978 0 0 1 -1.881 1.367h-9.916a1.978 1.978 0 0 1 -1.881 -1.367l-3.064 -9.43a1.978 1.978 0 0 1 .719 -2.212l8.021 -5.828a1.978 1.978 0 0 1 2.326 0z" /><path d="M12 13a3 3 0 1 0 0 -6a3 3 0 0 0 0 6z" /><path d="M6 20.703v-.703a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v.707" /></svg>
                        </div>
                        <select
                            name="dinasPengampu"
                            id="dinasPengampu"
                            className="block py-2 pl-10 w-full text-sm md:text-base text-grey bg-silver rounded-md border-none appearance-none focus:outline-none focus:ring-0 peer"
                            required
                        >
                            <option value="" disabled selected>Pilih Dinas Pengampu</option>
                            <option value="Dinas PMD Dalduk">Dinas PMD Dalduk</option>
                            <option value="Dinas Sosial">Dinas Sosial</option>
                            <option value="Dinas Kelautan dan Perikanan">Dinas Kelautan dan Perikanan</option>
                            <option value="Dinas Perhubungan">Dinas Perhubungan</option>
                            <option value="Dinas Pariwisata">Dinas Pariwisata</option>
                            <option value="Dinas Lingkungan Hidup">Dinas Lingkungan Hidup</option>
                            <option value="Dinas Koperasi dan UKM">Dinas Koperasi dan UKM</option>
                            <option value="Dinas Pertanian dan Pangan">Dinas Pertanian dan Pangan</option>
                            <option value="Dinas Perdagangan dan Perindustrian">Dinas Perdagangan dan Perindustrian</option>
                        </select>
                        <label
                            htmlFor="skalaUsaha"
                            className="absolute top-2 left-10 text-sm md:text-base text-grey duration-300 transform origin-[0] scale-90 -translate-y-8 opacity-0 peer-focus:opacity-100 peer-focus:left-0 peer-focus:text-primary peer-valid:opacity-100 peer-valid:left-0 peer-valid:scale-90 peer-valid:-translate-y-8"
                        >
                            Dinas Pengampu
                        </label>
                    </div>

                    <div className="relative w-full mb-4 group">
                    <div className="absolute inset-y-0 left-0 flex pt-3 pl-3 pointer-events-none z-10">
                            <svg  xmlns="http://www.w3.org/2000/svg"  width="20"  height="20"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className="opacity-55 icon icon-tabler icons-tabler-outline icon-tabler-map-pin"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" /><path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" /></svg>
                        </div>
                        <textarea
                            name="alamat"
                            id="alamat"
                            className="block py-2.5 pl-10 w-full text-sm md:text-base text-grey bg-silver rounded-md border-none appearance-none focus:outline-none focus:ring-0 peer"
                            placeholder=" "
                            required
                        ></textarea>
                        <label
                            htmlFor="alamat"
                            className="absolute top-2 left-10 text-sm md:text-base text-grey duration-300 transform origin-[0] scale-90 -translate-y-8 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:left-10 peer-focus:scale-90 peer-focus:-translate-y-8 peer-focus:left-0 peer-focus:text-primary peer-valid:left-0 peer-valid:-translate-y-8 peer-valid:scale-90"
                        >
                            Alamat
                        </label>
                    </div>
    </div>

    {/* <!-- Kolom Kanan --> */}
    <div>
        <div className="relative w-full mb-4 group">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none z-10">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-phone opacity-55">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M4 4h5l1.5 5l-1.5 1.5a12 12 0 0 0 6 6l1.5 -1.5l5 1.5v5h-1c-8.837 0 -16 -7.163 -16 -16v-1" />
                </svg>
            </div>
            <input
                type="text"
                name="noTelepon"
                id="noTelepon"
                className="block py-2 pl-10 w-full text-sm md:text-base text-grey bg-silver rounded-md border-none appearance-none focus:outline-none focus:ring-0 peer"
                placeholder=" "
                required
            />
            <label
                htmlFor="noTelepon"
                className="absolute top-2 left-10 text-sm md:text-base text-grey duration-300 transform origin-[0] scale-90 -translate-y-8 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:left-10 peer-focus:scale-90 peer-focus:-translate-y-8 peer-focus:left-0 peer-focus:text-primary peer-valid:left-0 peer-valid:-translate-y-8 peer-valid:scale-90"
            >
                Nomor Telepon
            </label>
        </div>

        <div className="relative w-full mb-4 group">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none z-10">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-map-pin opacity-55">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M16.35 15.35a8 8 0 1 0 -8.7 0l4.35 4.65z" />
                    <path d="M12 11a3 3 0 1 0 0 -6a3 3 0 0 0 0 6z" />
                </svg>
            </div>
            <textarea
                name="alamat"
                id="alamat"
                className="block py-2.5 pl-10 w-full text-sm md:text-base text-grey bg-silver rounded-md border-none appearance-none focus:outline-none focus:ring-0 peer"
                placeholder=" "
                required
            ></textarea>
            <label
                htmlFor="alamat"
                className="absolute top-2.5 left-10 text-sm md:text-base text-grey duration-300 transform origin-[0] scale-90 -translate-y-8 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:left-10 peer-focus:scale-90 peer-focus:-translate-y-8 peer-focus:left-0 peer-focus:text-primary peer-valid:left-0 peer-valid:-translate-y-8 peer-valid:scale-90"
            >
                Alamat
            </label>
        </div>

        <div className="mt-5">
            <button
                type="submit"
                className="w-full py-2 px-4 text-white bg-primary rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
                Daftar
            </button>
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
