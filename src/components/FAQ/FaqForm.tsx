import ButtonPrimary from "../Button/ButtonPrimary";

const FaqForm = () => {
  const onClick = () => {
    console.log("test");
  };
  return (
    <form className="">
      <div className="relative w-full mb-5 group">
        <input
          type="email"
          name="floating_email"
          id="floating_email"
          className="block py-2.5 px-0 w-full text-sm text-grey bg-transparent rounded order-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-primary peer"
          placeholder=""
          required
        />
        <label
          htmlFor="floating_email"
          className="peer-focus:font-medium absolute text text-grey duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 z-10"
        >
          Alamat Email
        </label>
      </div>
      <div className="relative z-0 w-full mb-5 group">
        <input
          type="text"
          name="floating_password"
          id="floating_password"
          className="block py-2.5 px-0 w-full text-sm text-grey bg-transparent rounded order-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-primary peer"
          placeholder=" "
          required
        />
        <label
          htmlFor="floating_password"
          className="peer-focus:font-medium absolute text text-grey duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 z-10"
        >
          Nama
        </label>
      </div>
      <div className="relative z-0 w-full mb-5 group">
        <textarea
          name="floating_area"
          id="floating_area"
          className="block py-2.5 px-0 w-full text-sm text-grey bg-transparent rounded order-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-primary peer"
          placeholder=" "
          required
        />
        <label
          htmlFor="floating_area"
          className="peer-focus:font-medium absolute text text-grey duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 z-10"
        >
          Pertanyaan
        </label>
      </div>
      <div className="text-center xl:text-left">
        <ButtonPrimary text="Submit" size="base" onClick={onClick} />
      </div>
    </form>
  );
};

export default FaqForm;
