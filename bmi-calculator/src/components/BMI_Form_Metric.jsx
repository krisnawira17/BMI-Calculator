/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";

export default function BMI_Form_Metric() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBMI] = useState(null);

  useEffect(() => {
    const calculateBMI = () => {
      const heightInMetersVal = parseFloat(height) / 100;
      const weightVal = parseFloat(weight);

      if (!isNaN(heightInMetersVal) && !isNaN(weightVal)) {
        const bmiVal = weightVal / (heightInMetersVal * heightInMetersVal);
        setBMI(bmiVal.toFixed(1));
      } else {
        setBMI(null);
      }
    };

    calculateBMI();
  }, [weight, height]);

  const bmiStatus = () => {
    if (bmi !== null) {
      if (bmi < 18.5) {
        return "underweight";
      } else if (bmi >= 18.5 && bmi <= 24.9) {
        return "a healthy weight";
      } else if (bmi > 24.9) {
        return "obese";
      }
    }
    return "";
  };

  const idealWeight = () => {
    const heightInMetersVal = parseFloat(height) / 100;
    const idealLower =
      18.5 * (heightInMetersVal * heightInMetersVal).toFixed(1);
    const idealUpper =
      24.9 * (heightInMetersVal * heightInMetersVal).toFixed(1);

    return `${idealLower}Kgs - ${idealUpper}kgs `;
  };

  return (
    <>
      <div className="flex md:flex-row flex-col mt-[3.5rem]  ">
        <div className="md:mr-[1.5rem]">
          <h2 className="font-semibold text-dark-electric-blue text-bodyS mb-3">
            Height
          </h2>
          <form className="flex flex-row border border-borders p-4 md:p-3  rounded-xl justify-between ">
            <input
              type="text"
              className="focus:outline-none font-semibold text-headingM lg:w-[11rem] w-full"
              placeholder="0"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            ></input>
            <span className="text-blue text-headingM font-semibold">cm</span>
          </form>
        </div>

        <div className="mt-4 md:mt-0">
          <h2 className="font-semibold text-dark-electric-blue text-bodyS mb-3">
            Weight
          </h2>
          <form className="flex flex-row border border-borders p-4 md:p-3  rounded-xl justify-between">
            <input
              type="text"
              className="focus:outline-none font-semibold text-headingM lg:w-[11rem] w-full"
              placeholder="0"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            ></input>
            <span className="text-blue text-headingM font-semibold">kg</span>
          </form>
        </div>
      </div>

      <div className="bg-gradient-to-r from-gradientBmiFrom to-gradientBmiTo md:rounded-r-full rounded-xl h-[20rem] md:h-[10rem] mt-5 flex flex-row p-6  lg:w-[31rem] w-full ">
        {bmi === null ? (
          <div className="flex flex-col gap-8">
            <h1 className="text-white text-headingM font-semibold">Welcome!</h1>
            <p className="text-white text-bodyS">
              Enter your height and weight and you’ll see your BMI result here
            </p>
          </div>
        ) : (
          <div className="flex lg:flex-row flex-col ">
            <div className="flex flex-col mr-20 w-[8rem]">
              <h1 className="text-bodyM font-semibold text-white">
                Your BMI is...
              </h1>
              <span
                className={`${
                  bmi < 1000 ? "text-[4rem]" : "text-[2rem]"
                } font-semibold text-white`}
              >
                {bmi}
              </span>
            </div>
            <div>
              <p className="text-white lg:text-bodyS text-bodyM lg:w-[15rem] w-full">
                Your BMI suggest that you're <span>{bmiStatus()}.</span> Your
                ideal weight is between <span>{idealWeight()}</span>
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
