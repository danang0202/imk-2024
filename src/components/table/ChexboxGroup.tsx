import { Checkbox } from "@mantine/core";
import { dropdownItemVariants } from "../../helper/motion.helper";
import { TypeData } from "./Selection";
import { AnimatePresence, motion } from "framer-motion";
import { EXTENDEDCOLORS } from "../../DataBuilder";
import { useThemeContext } from "../../layout/ThemeContext";

interface Props {
  data: TypeData[];
  selectedData: TypeData[];
  setSelectedData: React.Dispatch<React.SetStateAction<TypeData[]>>;
}

const ChexboxGroup: React.FC<Props> = ({
  data,
  selectedData,
  setSelectedData,
}) => {
  const handleCheckboxChange = (item: TypeData) => {
    if (!selectedData.includes(item)) {
      setSelectedData([...selectedData, item]);
    } else {
      setSelectedData(
        selectedData.filter((selectedItem) => selectedItem !== item)
      );
    }
  };

  const { theme, common: c } = useThemeContext();

  return (
    <ul className="w-full text-xs md:text-sm text-gray-900 bg-white rounded-lg dark:bg-black">
      <AnimatePresence>
        {data.map((item, index) => (
          <motion.li variants={dropdownItemVariants} transition={{ duration: .3 }} className="w-full" key={index}>
            <div className="flex items-center ps-1">
              <Checkbox
                checked={selectedData.includes(item)}
                label={c(item.name)}
                c={theme == "dark" ? "white" : EXTENDEDCOLORS.black}
                color={EXTENDEDCOLORS.primary}
                py={".5rem"}
                onClick={() => handleCheckboxChange(item)}
                fw={"normal"}
                size={"xs"}
              />
            </div>
          </motion.li>
        ))}
      </AnimatePresence>
    </ul>
  );
};

export default ChexboxGroup;
