/* eslint-disable react/no-unescaped-entities */
import manEating from "../images/image-man-eating.webp";

export default function BMI_Result() {
  return (
    <div className="mt-[4rem] flex flex-row gap-[11rem] p-[4rem]">
      <img
        src={manEating}
        alt="man eating"
        className="w-[32rem] object-contain"
      />
      <div className="flex flex-col gap-[2rem] mt-[10rem]">
        <h2 className="text-headingL font-semibold w-[35rem]">
          What your BMI result means
        </h2>

        <p className="text-bodyM text-dark-electric-blue w-[29rem]">
          A BMI range of 18.5 to 24.9 is considered a 'healthy weight.'
          Maintaining a healthy weight may lower your chances of experiencing
          health issues later on, such as obesity and type 2 diabetes. Aim for a
          nutritious diet with reduced fat and sugar content, incorporating
          ample fruits and vegetables. Additionally, strive for regular physical
          activity, ideally about 30 minutes daily for five days a week.
        </p>
      </div>
    </div>
  );
}
