import React, { Dispatch, SetStateAction, useState } from "react";
import ButtonBlack from "../Button/ButtonBlack";
import { faqSchema } from "../../schema/FaqFormSchema";
import { useThemeContext } from "../../layout/ThemeContext";

export interface formDataType {
  email: string;
  name: string;
  question: string;
}
interface Props {
  setIsModalOpen: (column: boolean) => void;
  formData: formDataType;
  setFormData: Dispatch<SetStateAction<formDataType>>;
}

const FaqForm: React.FC<Props> = ({
  setIsModalOpen,
  formData,
  setFormData,
}) => {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const { common } = useThemeContext();
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = faqSchema.safeParse(formData);
    if (!result.success) {
      const newErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        newErrors[err.path[0] as string] = err.message;
      });
      setErrors(newErrors);
    } else {
      setErrors({});
      setIsModalOpen(true);
    }
  };

  return (
    <>
      <form className="" onSubmit={handleSubmit}>
        <div
          className="relative w-full mb-5 group"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <input
            type="email"
            name="email"
            id="floating_email"
            className="block py-2.5 px-0 w-full text-sm md:text-base text-grey bg-transparent rounded order-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-primary peer"
            placeholder=""
            value={formData.email}
            onChange={handleChange}
          />
          <label
            htmlFor="floating_email"
            className="peer-focus:font-medium absolute text-sm md:text-base text-grey duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 z-10"
          >
            {common("emailPlaceholder")}
          </label>
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email}</p>
          )}
        </div>
        <div
          className="relative z-0 w-full mb-5 group"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <input
            type="text"
            name="name"
            id="floating_password"
            className="block py-2.5 px-0 w-full text-sm md:text-base text-grey bg-transparent rounded order-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-primary peer"
            placeholder=" "
            value={formData.name}
            onChange={handleChange}
          />
          <label
            htmlFor="floating_password"
            className="peer-focus:font-medium absolute text-sm md:text-base text-grey duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 z-10"
          >
            {common("namePlaceholder")}
          </label>
          {errors.name && (
            <p className="text-red-500 text-xs mt-1">{errors.name}</p>
          )}
        </div>
        <div
          className="relative z-0 w-full mb-5 group"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <textarea
            name="question"
            id="floating_area"
            className="block py-2.5 px-0 w-full text-sm md:text-base-grey bg-transparent rounded order-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-primary peer"
            placeholder=" "
            value={formData.question}
            onChange={handleChange}
          />
          <label
            htmlFor="floating_area"
            className="peer-focus:font-medium absolute text-sm md:text-base text-grey duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 z-10"
          >
            {common("questionPlaceholder")}
          </label>
          {errors.question && (
            <p className="text-red-500 text-xs mt-1">{errors.question}</p>
          )}
        </div>
        <div
          className="text-center xl:text-left"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <ButtonBlack text="Submit" size="xs md:text-base" />
        </div>
      </form>
    </>
  );
};

export default FaqForm;
