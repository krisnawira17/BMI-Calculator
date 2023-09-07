import { useState } from "react";
import BMI_Form_Metric from "./BMI_Form_Metric";

export default function BMI() {
  const [selectedOption, setSelectedOption] = useState("imperial");

  const handleRadioChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="bg-white shadow-bmi w-[35rem] h-[30rem] p-[2rem] rounded-xl ml-[8rem] mt-40">
      <h1 className="text-headingM text-gunmetal font-semibold mb-[2rem]">
        Enter your details below
      </h1>

      <div className="flex flex-row gap-44 text-gunmetal text-bodyM font-semibold">
        <label className="cursor-pointer flex flex-row items-center">
          <input
            type="radio"
            value="metric"
            checked={selectedOption === "metric"}
            onChange={handleRadioChange}
            className="hidden"
          />
          <div
            className="w-[2rem] h-[2rem] rounded-full border-gray-200 border mr-4"
            style={{
              backgroundColor:
                selectedOption === "metric"
                  ? "rgba(52, 95, 246, 0.15)"
                  : "transparent",
            }}
          >
            {selectedOption === "metric" ? (
              <div className="w-[0.95rem] h-[0.95rem] rounded-full bg-blue mt-2 mx-auto"></div>
            ) : null}
          </div>
          Metric
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
          Imperial
        </label>
      </div>

      <BMI_Form_Metric />
    </div>
  );
}
