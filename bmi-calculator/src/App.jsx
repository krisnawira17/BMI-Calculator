import BMI from "./components/BMI";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <div className="relative container mx-auto">
        <div className=" absolute z-1 top-0 left-0 h-[46rem] bg-gradient-to-r rounded-b-3xl from-gradientFrom to-gradientTo w-[64rem]" />
        <div className="relative flex flex-row">
          <Hero />
          <BMI />
        </div>
      </div>
    </>
  );
}

export default App;
