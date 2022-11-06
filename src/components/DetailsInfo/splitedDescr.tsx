interface IDescr {
  descr: string;
}

function SplitedDescr(prop: IDescr) {
  const { descr } = prop;

  const text = descr.split(/\r?\n/).filter(Boolean);

  const description = text[0];
  const respTitle = text[2];
  const responsopilities = text[3];
  const benefitsTitle = text[5];
  const benefits = text[6];

  return (
    <article className="text-left  text-lg text-grey-text ">
      <h2 className="sr-only">Job detailed info</h2>
      <p className=" mb-10 ">{description}</p>
      <h3 className="mb-2 text-xl  text-grey-dark font-bold">{respTitle}</h3>
      <p className=" mb-10 ">{responsopilities}</p>
      <h3 className="mb-2 text-xl  text-grey-dark font-bold">
        {benefitsTitle}
      </h3>
      <p className=" mb-10 ">{benefits}</p>
    </article>
  );
}
export default SplitedDescr;
