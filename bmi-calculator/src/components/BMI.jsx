import { useState } from "react";
import BMI_Form_Metric from "./BMI_Form_Metric";
import BMI_Form_Imperial from "./BMI_Form_Imperial";

export default function BMI() {
  const [selectedOption, setSelectedOption] = useState("metric");

  const handleRadioChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="bg-white shadow-bmi w-full md:w-[45rem] md:mx-auto lg:w-[35rem] md:h-[32rem] h-[57rem] p-[2rem] rounded-xl lg:ml-[8rem] lg:mt-40 mt-16">
      <h1 className="lg:text-headingM md:text-headingM text-headingL  text-gunmetal font-semibold mb-[2rem] ">
        Enter your details below
      </h1>

      <div className="flex flex-row lg:gap-44 gap-8 md:gap-44 text-gunmetal text-bodyM font-semibold ">
        <label className="cursor-pointer flex flex-row items-center">
          <input
            type="radio"
            value="metric"
            checked={selectedOption === "metric"}
            onChange={handleRadioChange}
            className="hidden"
          />
          <div
            className=" w-[2rem] h-[2rem] rounded-full border-gray-200 border mr-4"
            style={{
              backgroundColor:
                selectedOption === "metric"
                  ? "rgba(52, 95, 246, 0.15)"
                  : "transparent",
            }}
          >
            {selectedOption === "metric" ? (
              <div className="w-[0.95rem] h-[0.95rem] rounded-full bg-blue  mt-2 mx-auto"></div>
            ) : null}
          </div>
          <p className="font-semibold text-headingM lg:text-bodyM">Metric</p>
        </label>

        <label className="cursor-pointer flex flex-row items-center">
          <input
            type="radio"
            value="imperial"
            checked={selectedOption === "imperial"}
            onChange={handleRadioChange}
            className="hidden"
          />
          <div
            className="w-[2rem] h-[2rem] rounded-full border-gray-200 border mr-4"
            style={{
              backgroundColor:
                selectedOption === "imperial"
                  ? "rgba(52, 95, 246, 0.15)"
                  : "transparent",
            }}
          >
            {selectedOption === "imperial" ? (
              <div className="w-[0.95rem] h-[0.95rem] rounded-full bg-blue mt-2 mx-auto"></div>
            ) : null}
          </div>
          <p className="font-semibold text-headingM lg:text-bodyM">Imperial</p>
        </label>
      </div>
      {selectedOption === "metric" ? (
        <BMI_Form_Metric />
      ) : (
        <BMI_Form_Imperial />
      )}
    </div>
  );
}
