import { styles } from "@/app/styles/style";
import { FaRegCircle } from "react-icons/fa";
import React, { FC } from "react";
import toast from "react-hot-toast";

type Props = {
  benefits: { title: string }[];
  setBenefits: (benefits: { title: string }[]) => void;
  prerequisites: { title: string }[];
  setPrerequisites: (prerequisites: { title: string }[]) => void;
  active: number;
  setActive: (active: number) => void;
};

const CourseData: FC<Props> = ({
  setBenefits,
  benefits,
  setActive,
  active,
  prerequisites,
  setPrerequisites,
}) => {
  const handleBenefitChange = (index: number, value: string) => {
    const updatedBenefits = [...benefits];
    updatedBenefits[index].title = value;
    setBenefits(updatedBenefits);
  };

  const handleAddBenefit = () => {
    setBenefits([...benefits, { title: "" }]);
  };

  const handlePrerequisitesChange = (index: number, value: string) => {
    const updatedPrerequisites = [...prerequisites];
    updatedPrerequisites[index].title = value;
    setPrerequisites(updatedPrerequisites);
  };

  const handleAddPrerequisites = () => {
    setPrerequisites([...prerequisites, { title: "" }]);
  };

  const prevButton = () => {
    setActive(active - 1);
  };

  const handleOptions = () => {
    if (
      benefits[benefits.length - 1]?.title !== "" &&
      prerequisites[prerequisites.length - 1]?.title !== ""
    ) {
      setActive(active + 1);
    } else {
      toast.error("Please fill the fields first");
    }
  };

  return (
    <div className="w-[80%] ml-4 block">
      {/* Benefits Section */}
      <div className="w-[80%] mt-10 block">
        <label htmlFor="benefits" className={`${styles.label} text-[20px]`}>
          What are the Benefits of this course?
        </label>
        <br />
        {benefits.map((benefit: any, index: number) => (
          <input
            type="text"
            key={`benefit-${index}`} // Unique key for each input
            name={`Benefit-${index}`} // Unique name for each input
            placeholder="You will be able to build a full stack application..."
            required
            className={`${styles.input} my-2`}
            value={benefit.title}
            onChange={(e) => handleBenefitChange(index, e.target.value)}
          />
        ))}
        <FaRegCircle
          style={{ margin: "10px 0px", cursor: "pointer", width: "30px" }}
          onClick={handleAddBenefit}
        />
      </div>

      {/* Prerequisites Section */}
      <div className="w-[80%] mt-10 block">
        <label
          htmlFor="prerequisites"
          className={`${styles.label} text-[20px]`}
        >
          What are the Prerequisites of this course?
        </label>
        <br />
        {prerequisites.map((prerequisite: any, index: number) => (
          <input
            type="text"
            key={`prerequisite-${index}`} // Unique key for each input
            name={`Prerequisite-${index}`} // Unique name for each input
            placeholder="Basic knowledge of JavaScript..."
            required
            className={`${styles.input} my-2`}
            value={prerequisite.title}
            onChange={(e) => handlePrerequisitesChange(index, e.target.value)}
          />
        ))}
        <FaRegCircle
          style={{ margin: "10px 0px", cursor: "pointer", width: "30px" }}
          onClick={handleAddPrerequisites}
        />
      </div>

      {/* Navigation Buttons */}
      <div className="w-full flex items-center justify-between mt-8">
        <div className="w-[50%]">
          <input
            type="button" // Changed from 'submit' to 'button'
            value="Previous"
            className="w-full 800px:w-[180px] h-[40px] bg-[#37a39a] text-center text-[#fff] rounded mt-8 cursor-pointer"
            onClick={prevButton}
          />
        </div>
        <div className="w-[50%]">
          <input
            type="button" // Changed from 'submit' to 'button'
            value="Next"
            className="w-full 800px:w-[180px] h-[40px] bg-[#37a39a] text-center text-[#fff] rounded mt-8 cursor-pointer"
            onClick={handleOptions}
          />
        </div>
      </div>
    </div>
  );
};

export default CourseData;
