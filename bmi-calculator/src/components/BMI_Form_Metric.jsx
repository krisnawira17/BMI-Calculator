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
              className="focus:outline-none font-semibold text-headingM w-[10rem]"
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
              className="focus:outline-none font-semibold text-headingM w-[10rem]"
              placeholder="0"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            ></input>
            <span className="text-blue text-headingM font-semibold">Kg</span>
          </form>
        </div>
      </div>

      <div className="bg-gradient-to-r from-gradientBmiFrom to-gradientBmiTo rounded-tr-full rounded-br-full  mt-5 flex flex-row p-4">
        <div className="flex flex-col">
          <h1 className="text-bodyM font-semibold text-white">
            Your BMI is...
          </h1>
          <span className="text-headingXL font-semibold text-white">{bmi}</span>
        </div>
        <div>
          <p>Your BMI suggest that you're</p>
        </div>
      </div>
    </>
  );
}
