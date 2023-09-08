import Limitation_Card from "./Limitation_Card";
import gender from "../images/icon-gender.svg";
import age from "../images/icon-age.svg";
import muscle from "../images/icon-muscle.svg";
import pregnancy from "../images/icon-pregnancy.svg";
import race from "../images/icon-race.svg";

export default function Limitation_Of_Bmi() {
  return (
    <div className="mt-[7rem] flex flex-row gap-[20rem]">
      <div className="flex flex-col">
        <h2 className="text-headingL text-gunmetal font-semibold ">
          Limitations of BMI
        </h2>
        <p className="w-[35rem] mt-14 text-dark-electric-blue">
          Although BMI is often a practical indicator of healthy weight, it is
          not suited for every person. Specific groups should carefully consider
          their BMI outcomes, and in certain cases, the measurement may not be
          beneficial to use.
        </p>
      </div>

      <div className="flex flex-col gap-16">
        <Limitation_Card
          imgSrc={gender}
          header="Gender"
          paragraph="The development and body fat composition of girls and boys vary with age. Consequently, a child's age and gender are considered when evaluating their BMI."
        />

        <div className=" absolute flex flex-row gap-8 mt-[18rem] left-[36rem]">
          <Limitation_Card
            imgSrc={age}
            header="Age"
            paragraph="In aging individuals, increased body fat and muscle loss may cause BMI to underestimate body fat content."
          />

          <Limitation_Card
            imgSrc={muscle}
            header="Muscle"
            paragraph="BMI may misclassify muscular individuals as overweight or obese, as it doesn't differentiate muscle from fat."
          />
        </div>

        <div className="absolute flex flex-row gap-8 mt-[32rem] left-[16rem]">
          <Limitation_Card
            imgSrc={pregnancy}
            header="Pregnancy"
            paragraph="Expectant mothers experience weight gain due to their growing baby. Maintaining a healthy pre-pregnancy BMI is advisable to minimise health risks for both mother and child."
          />

          <Limitation_Card
            imgSrc={race}
            header="Race"
            paragraph="Certain health concerns may affect individuals of some Black and Asian origins at lower BMIs than others. To learn more, it is advised to discuss this with your GP or practice nurse."
          />
        </div>
      </div>
    </div>
  );
}
