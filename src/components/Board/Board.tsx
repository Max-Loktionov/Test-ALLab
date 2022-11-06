import { JobIFace } from "../../helpers/jobIFace";
import BoardItem from "../BoardItem";

interface IBoard {
  job: JobIFace[];
}

function Board({ job }: IBoard) {
  return (
    <>
      <ul className="grid grid-cols-1 gap-2">
        {job &&
          job.map((j) => (
            <li key={j.id}>
              <BoardItem
                title={j.title}
                pictures={j.pictures[1]}
                name={j.name}
                id={j.id}
                created={j.updatedAt}
                address={j.address}
              />
            </li>
          ))}
      </ul>
    </>
  );
}

export default Board;
