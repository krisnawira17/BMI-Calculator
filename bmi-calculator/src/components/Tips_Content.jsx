/* eslint-disable react/prop-types */
export default function Tips_Content(props) {
  const { imgSrc, heading, paragraph } = props;
  return (
    <div className="flex flex-col w-[22rem] gap-[1.5rem]">
      <img src={imgSrc} alt="eating icon" className="w-[4rem]" />
      <h2 className="text-headingM font-semibold text-gunmetal">{heading}</h2>
      <p className="text-bodyM text-dark-electric-blue">{paragraph}</p>
    </div>
  );
}
