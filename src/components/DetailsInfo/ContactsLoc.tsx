import { MapPinIcon } from "@heroicons/react/24/solid";
import { JobIFace } from "../../helpers/jobIFace";

interface IJob {
  job: JobIFace;
}

function ContactsLoc({ job }: IJob) {
  return (
    <div>
      <section className="text-left max-w-[372px] text-lg text-grey-text xl:w-[400px] ">
        <h2 className=" pb-4 mb-4 text-lg text-start font-bold text-grey-dark border-b border-grey-dark border-opacity-[0.13]  xl:hidden ">
          Contacts
        </h2>

        <div className="flex mx-auto bg-[#2A3047] rounded-lg  text-base text-[#e7eaf0]">
          <div className=" self-center">
            {/* ==================address======================= */}
            <address className="mx-16 my-8 leading-6 not-italic">
              <p className="font-bold mb-4">{job.name}</p>
              <p className="flex items-center ">
                <MapPinIcon className="w-5 h-7 mr-1 " />
                <a href={`#`}>{job.address}</a>
              </p>
              <p>
                <a href={`tel:${job.phone}`}>{job.phone}</a>
              </p>
              <p>
                <a href={`mailto:${job.email}`}>{job.email}</a>
              </p>
            </address>
            {/* ======================================map================ */}
            <div className="rounded-lg">
              <img
                className="bg-black rounded-b-lg"
                src={`https://static.maps.2gis.com/1.0?s=404x222&pt=${job.location.lat},${job.location.long}&z=2`}
                alt="job.name"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactsLoc;
