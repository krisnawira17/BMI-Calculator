/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from "react";

export default function BMI_Form_Imperial() {
  const [feet, setFeet] = useState("");
  const [inch, setInches] = useState("");
  const [stone, setStones] = useState("");
  const [pounds, setPounds] = useState("");
  const [bmi, setBMI] = useState(null);

  useEffect(() => {
    const calculateBMI = () => {
      const heightInMetersVal =
        parseFloat(feet) * 0.3048 + parseFloat(inch) * 0.0254;
      const weightVal =
        parseFloat(stone) * 6.35029 + parseFloat(pounds) * 0.453592;

      if (!isNaN(heightInMetersVal) && !isNaN(weightVal)) {
        const bmiVal = weightVal / (heightInMetersVal * heightInMetersVal);
        setBMI(bmiVal.toFixed(1));
      } else {
        setBMI(null);
      }
    };

    calculateBMI();
  }, [feet, inch, stone, pounds]);

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
    const heightInInches = parseFloat(feet) * 12 + parseFloat(inch);

    const idealLowerKg = (18.5 * (heightInInches * heightInInches)) / 703;
    const idealUpperKg = (24.9 * (heightInInches * heightInInches)) / 703;

    const idealLowerPounds = Math.floor(idealLowerKg * 2.20462);
    const idealUpperPounds = Math.floor(idealUpperKg * 2.20462);

    const idealLowerStones = Math.floor(idealLowerPounds / 14);
    const idealLowerRemainingPounds = idealLowerPounds % 14;

    const idealUpperStones = Math.floor(idealUpperPounds / 14);
    const idealUpperRemainingPounds = idealUpperPounds % 14;

    return [
      `${idealLowerStones} st ${idealLowerRemainingPounds} lbs`,
      `${idealUpperStones} st ${idealUpperRemainingPounds} lbs`,
    ];
  };

  const [idealLower, idealUpper] = idealWeight();

  return (
    <>
      <div className="flex flex-col mt-[3.5rem] ">
        <div className="lg:mr-[1.5rem]">
          <h2 className="font-semibold text-dark-electric-blue text-bodyS mb-3">
            Height
          </h2>
          <div className="flex flex-row gap-[1.5rem]">
            <form className="flex flex-row border border-borders p-3 rounded-xl">
              <input
                type="text"
                className="focus:outline-none font-semibold text-headingM w-full"
                placeholder="0"
                value={feet}
                onChange={(e) => setFeet(e.target.value)}
              ></input>
              <span className="text-blue text-headingM font-semibold">ft</span>
            </form>

            <form className="flex flex-row border border-borders p-3 rounded-xl">
              <input
                type="text"
                className="focus:outline-none font-semibold text-headingM w-full"
                placeholder="0"
                value={inch}
                onChange={(e) => setInches(e.target.value)}
              ></input>
              <span className="text-blue text-headingM font-semibold">in</span>
            </form>
          </div>
        </div>

        <div>
          <h2 className="font-semibold text-dark-electric-blue text-bodyS mb-3">
            Weight
          </h2>
          <div className="flex flex-row gap-[1.5rem]">
            <form className="flex flex-row border border-borders p-3 rounded-xl">
              <input
                type="text"
                className="focus:outline-none font-semibold text-headingM w-full"
                placeholder="0"
                value={stone}
                onChange={(e) => setStones(e.target.value)}
              ></input>
              <span className="text-blue text-headingM font-semibold">st</span>
            </form>

            <form className="flex flex-row border border-borders p-3 rounded-xl">
              <input
                type="text"
                className="focus:outline-none font-semibold text-headingM w-full"
                placeholder="0"
                value={pounds}
                onChange={(e) => setPounds(e.target.value)}
              ></input>
              <span className="text-blue text-headingM font-semibold">lbs</span>
            </form>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-gradientBmiFrom to-gradientBmiTo lg:rounded-r-full rounded-xl h-[20rem] lg:h-[10rem] mt-5 flex flex-row p-6  lg:w-[31rem] w-full  ">
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
              <p className="text-white font-bodyS lg:w-[15rem] w-full">
                Your BMI suggest that you're <span>{bmiStatus()}.</span> Your
                ideal weight is between{" "}
                <span>
                  {idealLower} - {idealUpper}.
                </span>
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
