interface Props {
  handleClick: () => void;
}
const ClearBadge: React.FC<Props> = ({ handleClick }) => {
  return (
    <span
      id="badge-dismiss-red"
      className="inline-flex cursor-pointer hover items-center px-2 py-1 me-2 text-xs lg:text-sm text-accent5 bg-silver font-base md:font-medium hover:bg-accent5 rounded-sm hover:text-white transition duration-300"
      onClick={() => handleClick()}
    >
      Bersihkan
      <button
        type="button"
        className="inline-flex items-center p-1  ms-2"
        data-dismiss-target="#badge-dismiss-red"
        aria-label="Remove"
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
  );
};

export default ClearBadge;
