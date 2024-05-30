import LinkText from "../LinkText";

interface CardProps {
  title: string;
  desc: string;
  image: string;
}

const ServiceCard: React.FC<CardProps> = ({ title, desc, image }) => {
  return (
    <>
      <div
        className="flex flex-col items-center"
        data-aos="fade-up"
        data-aos-duration="800"
      >
        <div className="box bg-greyBlue  rounded shadow-lg cursor-pointer transform hover:-translate-y-5 transition duration-300">
          <img
            src={`/image/${image}`}
            alt="Ilustrator"
            style={{ width: "300px", height: "300px" }}
            className="mx-8"
          />
        </div>
        <div
          className="transform -translate-y-14 border border-grey-500 bg-silver text-center p-4 py-5 rounded shadow-lg flex flex-col gap-3 items-center z-40 dark:bg-black dark:border-slate-800"
          style={{ maxWidth: "300px" }}
        >
          <p className="font-semibold text-gray-700 dark:text-white">{desc}</p>
          <LinkText text={title} url={"#"} branding={"primary"} />
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
