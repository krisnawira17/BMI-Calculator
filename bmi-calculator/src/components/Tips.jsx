import eating from "../images/icon-eating.svg";
import excercise from "../images/icon-exercise.svg";
import sleeping from "../images/icon-sleep.svg";
import Tips_Content from "./Tips_Content";

export default function Tips() {
  return (
    <>
      <div className="gradient-custom absolute w-full z-10 lg:h-[25rem] h-[64rem] lg:top-[95rem] top-[195rem] opacity-25 rounded-3xl"></div>
      <div className="relative flex lg:flex-row flex-col h-[25rem] p-[4rem] lg:justify-between gap-20">
        <Tips_Content
          imgSrc={eating}
          heading="Healthy Eating"
          paragraph="Healthy eating promotes weight control, disease prevention, better digestion, immunity, mental clarity, and mood."
        />

        <Tips_Content
          imgSrc={excercise}
          heading="Regular exercise"
          paragraph="Exercise improves fitness, aids weight control, elevates mood, and reduces disease risk, fostering wellness and longevity."
        />

        <Tips_Content
          imgSrc={sleeping}
          heading="Healthy Eating"
          paragraph="Sleep enhances mental clarity, emotional stability, and physical wellness, promoting overall restoration and rejuvenation."
        />
      </div>
    </>
  );
}
