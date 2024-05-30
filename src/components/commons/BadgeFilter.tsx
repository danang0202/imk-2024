import { CSSTransition } from "react-transition-group";
import { TypeData } from "../table/Selection";

interface Props {
  item: TypeData;
  handleClick: (column: TypeData) => void;
}

const BadgeFilter: React.FC<Props> = ({ item, handleClick }) => {
  return (
    <CSSTransition in={true} timeout={300} classNames="fade" unmountOnExit>
      <span
        id="badge-dismiss-default"
        data-aos="zoom-in"
        data-aos-duration="300"
        className="inline-flex items-center px-2 py-1 me-2 text-sm font-medium text-grey bg-silver rounded-sm"
      >
        {item.name}
        <button
          type="button"
          className="inline-flex items-center p-1 ms-2 text-sm text-grey bg-transparent rounded-sm hover:text-white hover:bg-grey transition duration-300 "
          data-dismiss-target="#badge-dismiss-default"
          aria-label="Remove"
          onClick={() => handleClick(item)}
        >
          <svg
            className="w-2 h-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
          <span className="sr-only">Remove badge</span>
        </button>
      </span>
    </CSSTransition>
  );
};

export default BadgeFilter;
