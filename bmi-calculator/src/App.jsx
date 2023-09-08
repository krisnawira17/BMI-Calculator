import BMI from "./components/BMI";
import BMI_Result from "./components/BMI_Result";
import Hero from "./components/Hero";
import Limitation_Of_Bmi from "./components/Limitations_Of_BMI";
import Tips from "./components/Tips";

function App() {
  return (
    <>
      <div className="relative container mx-auto flex-col flex">
        <div className=" absolute z-1 top-0 left-0 h-[46rem] gradient-custom rounded-b-3xl  w-[64rem]" />
        <div className="relative flex flex-row">
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
