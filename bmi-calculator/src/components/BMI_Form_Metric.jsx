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
      <div className="flex flex-row mt-[3.5rem] ">
        <div className="mr-[1.5rem]">
          <h2 className="font-semibold text-dark-electric-blue text-bodyS mb-3">
            Height
          </h2>
          <form className="flex flex-row border border-borders p-3 rounded-xl">
            <input
              type="text"
              className="focus:outline-none font-semibold text-headingM w-[11rem]"
              placeholder="0"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            ></input>
            <span className="text-blue text-headingM font-semibold">cm</span>
          </form>
        </div>

        <div>
          <h2 className="font-semibold text-dark-electric-blue text-bodyS mb-3">
            Weight
          </h2>
          <form className="flex flex-row border border-borders p-3 rounded-xl">
            <input
              type="text"
              className="focus:outline-none font-semibold text-headingM w-[11rem]"
              placeholder="0"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            ></input>
            <span className="text-blue text-headingM font-semibold">Kg</span>
          </form>
        </div>
      </div>

      <div className="bg-gradient-to-r from-gradientBmiFrom to-gradientBmiTo rounded-r-full mt-5 flex flex-row p-6  w-[31rem] ">
        {bmi === null ? (
          <div className="flex flex-col gap-8">
            <h1 className="text-white text-headingM font-semibold">Welcome!</h1>
            <p className="text-white text-bodyS">
              Enter your height and weight and you’ll see your BMI result here
            </p>
          </div>
        ) : (
          <div className="flex flex-row  items-center">
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
              <p className="text-white font-bodyS w-[15rem]">
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
