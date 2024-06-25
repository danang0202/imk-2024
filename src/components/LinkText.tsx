import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  text: string;
  branding: string;
  url: string;
}

const LinkText: React.FC<Props> = ({ text, branding, url }) => {
  return (
    <a
      href={url}
      className={`text-${branding} text-sm font-semibold py-1 transform hover:text-primary/75 transition duration-300`}
    >
      {text}
      <FontAwesomeIcon icon={faArrowRight} className="pl-2 font-bold" />
    </a>
  );
};

export default LinkText;
