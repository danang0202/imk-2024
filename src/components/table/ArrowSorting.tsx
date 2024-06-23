interface Props {
  activeColumn: string;
  sortingColumn: string | null;
  includes: string;
  onClickFunction: (column: string) => void;
}

const ArrowSorting: React.FC<Props> = ({
  activeColumn,
  sortingColumn,
  includes,
  onClickFunction,
}) => {
  return (
    <svg
      className={`w-4 h-4 cursor-pointer ${
        activeColumn?.includes(includes)
          ? "text-black dark:text-white"
          : "text-inactive group-hover:text-black rotate-180 dark:text-gray-500"
      } ${sortingColumn?.toString === includes.toString ? "rotate-180" : "rotate-0"}
`}
      onClick={() => onClickFunction(includes)}
      xmlns="http://www.w3.org/2000/svg"
      width={`100`}
      height="100"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M19 14l-7 7m0 0l-7-7m7 7V3"
      />
    </svg>
  );
};

export default ArrowSorting;
