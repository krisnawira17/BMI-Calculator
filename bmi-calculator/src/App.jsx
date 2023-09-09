import BMI from "./components/BMI";
import BMI_Result from "./components/BMI_Result";
import Hero from "./components/Hero";
import Limitation_Of_Bmi from "./components/Limitations_Of_BMI";
import Tips from "./components/Tips";

function App() {
  return (
    <>
      <div className="relative container mx-auto flex-col flex overflow-hidden">
        <div className=" absolute z-1 top-0 left-0 lg:h-[46rem] h-[50rem] gradient-custom rounded-b-3xl w-screen  lg:w-[64rem]" />
        <div className="relative flex lg:flex-row flex-col">
          <Hero />
          <BMI />
        </div>
        <div className="mt-20 mb-[40rem] flex flex-col gap-[6rem]">
          <BMI_Result />
          <Tips />
          <Limitation_Of_Bmi />
        </div>
      </div>
    </>
  );
}

export default App;
