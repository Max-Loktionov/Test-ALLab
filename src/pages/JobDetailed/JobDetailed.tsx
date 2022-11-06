import { Link, useParams } from "react-router-dom";
import DetailsInfo from "../../components/DetailsInfo";
import Save from "../../components/DetailsInfo/Save";
import Share from "../../components/DetailsInfo/Share";
import ContactsLoc from "../../components/DetailsInfo/ContactsLoc";
import { JobIFace } from "../../helpers/jobIFace";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";

interface IJob {
  data: JobIFace[];
}

function JobDetailed(prop: IJob) {
  const { jobId } = useParams();

  const details = prop.data.find((job) => jobId === job.id);

  return (
    <div className=" max-w-[1400px] mx-auto ">
      {details && (
        <div className="py-6 px-4 max-w-[1258px] mx-auto xl:flex">
          <div className="mb-8 xl:mr-20 xl:relative xl:pr-12">
            <div className="mb-8 ">
              <h1 className="mb-6 pb-3 text-3xl text-start text-grey-dark font-bold border-b border-grey-dark border-opacity-[0.13]">
                Job Details
              </h1>
              <div className="flex xl:absolute top-0 right-12 ">
                <Save />
                <Share />
              </div>
            </div>
            <DetailsInfo details={details} />
          </div>

          <ContactsLoc job={details} />
        </div>
      )}
      <Link
        to={"/"}
        className=" max-w-max hidden mt-24 mb-5 border border-[#55699e4d] bg-grey-back text-[#55699E] text-xs font-semibold leading-4  py-5 px-4 rounded-lg xl:flex"
      >
        <span>
          <ChevronLeftIcon className="chevronIcon  inline mr-6" />
        </span>
        RETURN TO JOB BOARD
      </Link>
    </div>
  );
}
export default JobDetailed;
