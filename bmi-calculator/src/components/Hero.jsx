import Logo from "../images/logo.svg";

export default function Hero() {
  return (
    <>
      <div className="pt-[4.7rem] ml-[7rem]">
        <img src={Logo} alt="logo" className="w-[4rem]" />
        <div className="flex-col mt-[8rem]">
          <h1 className="text-headingXL leading-[110%] font-semibold text-gunmetal w-[32rem]">
            Body Mass Index Calculator
          </h1>
          <p className="text-bodyM leading-[150%] text-dark-electric-blue w-[29rem] mt-[2.19rem]">
            Better understand your weight in relation to your height using our
            body mass index (BM) calculator. While BMI is not the sole
            determinant of a healthy weight, it offers a valuable starting point
            to evaluate your overall health and well-being.
          </p>
        </div>
      </div>
    </>
  );
}
