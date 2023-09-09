import Logo from "../images/logo.svg";

export default function Hero() {
  return (
    <>
      <div className="pt-[4.7rem] lg:ml-[7rem]">
        <img src={Logo} alt="logo" className="w-[4rem] mx-auto lg:mx-0" />
        <div className="flex-col mt-[8rem] md:p-2">
          <h1 className="text-headingXL leading-[110%] font-semibold text-gunmetal lg:w-[32rem] w-[24rem] md:w-[32rem] mx-auto text-center lg:text-left">
            Body Mass Index Calculator
          </h1>
          <p className="text-bodyM leading-[150%] text-dark-electric-blue lg:w-[29rem] w-full mx-auto mt-[2.19rem] text-center lg:text-left">
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
