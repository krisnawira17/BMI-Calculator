/* eslint-disable no-unused-vars */
export default function Limitation_Card(props) {
  // eslint-disable-next-line react/prop-types
  const { imgSrc, header, paragraph } = props;
  return (
    <div className="bg-white shadow-bmi p-8 rounded-xl w-[23rem] flex flex-col gap-[1.25rem]">
      <div className="flex flex-row gap-[1rem]">
        <img src={imgSrc} alt="gender icon" className="w-8" />
        <h3 className="text-gunmetal text-headingS font-semibold">{header}</h3>
      </div>

      <p className="text-dark-electric-blue text-bodyM ">{paragraph}</p>
    </div>
  );
}
