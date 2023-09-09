/* eslint-disable react/prop-types */
export default function Tips_Content(props) {
  const { imgSrc, heading, paragraph } = props;
  return (
    <div className="flex flex-col md:flex-row lg:flex-col w-[22rem] gap-[1.5rem] md:gap-[4rem]">
      <img src={imgSrc} alt="eating icon" className="w-[4rem]" />
      <div className="flex flex-col md:gap-[2rem]">
        <h2 className="text-headingM font-semibold text-gunmetal">{heading}</h2>
        <p className="text-bodyM text-dark-electric-blue lg:w-[15rem] md:w-[30rem]">
          {paragraph}
        </p>
      </div>
    </div>
  );
}
