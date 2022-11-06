import { Link, useLocation } from "react-router-dom";
import Stars from "./stars";
import noImage from "../../pages/no-image-icon-23485.png";
import postedDay from "../../helpers/postedDay";
import { MapPinIcon } from "@heroicons/react/24/solid";
import { BookmarkIcon } from "@heroicons/react/24/outline";

interface IBoardI {
  title: string;
  pictures: string;
  id: string;
  name: string;
  created: Date;
  address: string;
}

function BoardItem({ title, pictures, id, name, created, address }: IBoardI) {
  const location = useLocation();

  const postedAgo = postedDay(created);

  return (
    <div className=" bg-grey-mobBack font-proxi ">
      <Link
        to={`/${id}`}
        state={{ from: location }}
        className="flex bg-grey-mobCard p-4 rounded-lg shadow-3xl cursor-pointer xl:shadow-3xlDesk xl:bg-white"
      >
        {pictures && (
          <img
            className="h-16 w-16 my-4 rounded-full shrink-0 xl:h-20 xl:w-20  self-center"
            loading="lazy"
            src={!pictures ? noImage : pictures}
            alt={name}
          />
        )}
        <div className="ml-4 grow xl:flex xl:flex-row-reverse ">
          <div className=" min-[420px]:flex justify-between flex-row-reverse items-end  xl:flex-col-reverse xl:relative">
            <div className="text-md items-center  text-grey-sec font-light">
              {postedAgo}
            </div>
            <dl className=" flex xl:flex-col-reverse">
              <dt className="sr-only">Rating</dt>
              <dd className="flex xl:absolute xl:top-9 xl:-left-32">
                <Stars />
              </dd>
              <dt className="sr-only">Bookmark</dt>
              <dd className="flex ">
                <BookmarkIcon className=" w-6 h-8 mr-1 stroke-grey-sec stroke-2 invisible xl:visible" />
              </dd>
            </dl>
          </div>
          <div className="text-start xl:grow">
            <p className="text-lg  text-grey-dark xl:font-bold">{name}</p>
            <h2 className="text-lg text-start text-grey-dark">{title}</h2>
            <div className="flex  ">
              <MapPinIcon className="w-5 h-6 mr-1 text-grey-sec" />
              <p className="ml-1 text-grey-sec">{address}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default BoardItem;
