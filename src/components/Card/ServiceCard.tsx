import Reveal from "../Reveal/Reveal";
import LinkText from "../LinkText";

interface CardProps {
  title: string;
  desc: string;
  image: string;
}

const ServiceCard: React.FC<CardProps> = ({ title, desc, image }) => {
  return (
    <>
      <div className="flex flex-col items-center">
        <Reveal>
          <div className="box bg-greyBlue rounded shadow">
            <img
              src={`/image/${image}`}
              alt="Ilustrator"
              style={{ width: "300px", height: "300px" }}
              className="mx-8"
            />
          </div>
        </Reveal>
        <Reveal>
          <div
            className="transform -translate-y-14 border border-grey-500 bg-silver text-center p-4 py-5 rounded shadow-lg flex flex-col gap-3 items-center z-40"
            style={{ maxWidth: "300px" }}
          >
            <p className="font-semibold text-grey">{desc}</p>
            <LinkText text={title} url={"#"} branding={"primary"} />
          </div>
        </Reveal>
      </div>
    </>
  );
};

export default ServiceCard;
