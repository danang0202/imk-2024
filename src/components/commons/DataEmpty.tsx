const DataEmpty = () => {
  return (
    <div
      data-aos="fade-up"
      duration-data-aos="300"
      className="w-full flex justify-center items-center p-4 lg:p-8 "
    >
      <div className="box flex flex-col items-center">
        <img
          src="/image/empty.png"
          alt="Data Empty"
          className="w-[10rem] md:w-[20rem] xl:w-[23rem]"
        />
        <p className="text-grey font-semibold text-xs md:text-sm lg:text-lg">
          Data tidak ditemukan !
        </p>
      </div>
    </div>
  );
};

export default DataEmpty;
