import LinkText from "../LinkText";

interface CardProps {
  title: string;
  desc: string;
  image: string;
  href: string;
}

const ServiceCard: React.FC<CardProps> = ({ title, desc, image, href }) => {
  return (
    <>
      <div
        className="flex flex-col items-center"
        data-aos="fade-up"
        data-aos-duration="800"
      >
        <div className="box bg-gray-200 rounded shadow-lg cursor-pointer transform hover:-translate-y-5 transition duration-300">
          <img
            src={`/image/${image}`}
            alt="Ilustrator"
            className="mx-8 lg:mx-8 w-[250px] h-[200px]  lg:w-[300px] lg:h-[300px]"
          />
        </div>
        <div
          className="transform -translate-y-14 border border-grey-500 bg-silver text-center px-2 py-3 lg:p-4 lg:py-5 rounded shadow-lg flex flex-col gap-3 items-center z-40 dark:bg-black dark:border-slate-800 text-sm lg:text-base max-w-[250px] lg:max-w-[300px]"
        >
          <p className="font-semibold text-gray-700 dark:text-white">{desc}</p>
          <LinkText text={title} url={href} branding={"primary"} />
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
