import { ShareIcon } from "@heroicons/react/24/outline";

function Share() {
  return (
    <div className=" ml-9 text-left  text-base text-grey-text xl:ml-6">
      <a className="flex " href="#">
        <ShareIcon className=" w-5 h-5 inline stroke-2 mr-3 xl:w-6 xl:h-6" />
        <span>Share</span>
      </a>
    </div>
  );
}
export default Share;
