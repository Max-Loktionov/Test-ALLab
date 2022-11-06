import SplitedDescr from "./splitedDescr";
import postedDay from "../../helpers/postedDay";
import Button from "../Button";
import { JobIFace } from "../../helpers/jobIFace";

interface IDetails {
  details: JobIFace;
}

function DetailsInfo({ details }: IDetails) {
  const {
    title,
    pictures,
    name,
    description,
    employment_type,
    salary,
    createdAt,
    benefits,
  } = details;

  // we need to change output view of salary 30k => 30 000
  const re = /k/gi;
  const sal = salary.replace(re, " 000");
  const postedAgo = postedDay(createdAt);

  return (
    <main className="">
      <Button class={"descktop"}>APPLY NOW</Button>
      <div className=" xl:relative xl:mb-2 xl:flex">
        <div className="xl:pb-8  xl:mr">
          <h1 className="text-2xl text-start text-grey-dark font-bold">
            {name}
          </h1>
          <p className="mb-1 text-xl text-start text-grey-dark font-bold">
            {title}
          </p>
        </div>

        <dl className=" flex items-center mb-3 xl:items-start xl:shrink-0">
          <dt className="sr-only xl:absolute left-0 bottom-0">Relevance</dt>
          <dd className="flex  xl:absolute left-0 bottom-0 ">
            <p className="text-xs items-center  text-grey-sec font-light xl:text-lg xl:font-normal">
              {postedAgo}
            </p>
          </dd>
          <dt className="sr-only">Salary</dt>
          <dd className="flex items-end flex-col-reverse grow xl:flex-col xl:grow-1 xl:items-start">
            <p className="text-xl text-start text-grey-dark font-bold">
              &#8364; {sal}
            </p>
            <p className="text-lg text-grey-text  ">Brutto per year</p>
          </dd>
        </dl>
      </div>

      {/* ======================== section details===================== */}
      <section className="xl:font-robot ">
        {description && <SplitedDescr descr={description} />}
        <Button class={"mobile"}>APPLY NOW</Button>
      </section>
      <div className="xl:flex flex-col-reverse">
        <div>
          {/* =========================Attached images===================== */}
          <section className="mb-16">
            <h2 className="section-title ">Attached images</h2>

            <div>
              <div className="grid  grid-cols-2 gap-2 gap-x-1 min-[768px]:grid-cols-3">
                {pictures &&
                  pictures.map((pic, idx) => (
                    <img
                      key={idx}
                      src={pic}
                      alt="our company"
                      loading="lazy"
                      className="h-28 w-52 my-4 rounded-lg object-cover max-[767px]:[&:nth-child(3)]:hidden "
                    />
                  ))}
              </div>
            </div>
          </section>
        </div>
        <div>
          {/* =========================Additional info===================== */}
          <section className="text-left mb-16 text-lg text-grey-text ">
            <h2 className="section-title ">Additional info</h2>
            <p className="mb-2 ">Employment type</p>
            <div className="flex gap-2">
              {employment_type.map((type) => (
                <div
                  key={type}
                  className="section-tab mb-5 border-[#55699e4d] bg-grey-back text-[#55699E] "
                >
                  {type}
                </div>
              ))}
            </div>
            <p className="mb-2 ">Benefits</p>
            <div className="flex gap-2">
              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="section-tab mb-8 border-[#FFCF00] text-center bg-[#ffcf0026] text-[#988B49] "
                >
                  {benefit}
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
export default DetailsInfo;
