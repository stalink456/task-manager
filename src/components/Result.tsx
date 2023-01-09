import React from "react";
import { FaTimes } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { putTasksInfo, deleteTasksInfo } from "../redux/asyncActions";
import { AppDispatch } from "../redux/store";

type ResultType = {
  id: number;
  done: boolean;
  text: string;
};

const Result: React.FC<ResultType> = React.memo(
  ({ id, done, text }) => {
    const dispatch = useDispatch<AppDispatch>();

    const onChangeDone = (text: string, done: boolean) => (e: any) => {
      e.preventDefault();
      dispatch(putTasksInfo({ id: e.target.value, text: text, done: !done }));
    };

    return (
      <>
        <input
          type="checkbox"
          value={id}
          checked={done ? true : false}
          onChange={onChangeDone(text, done)}
        />
        <h1>{done ? <del>{text}</del> : <>{text}</>}</h1>
        <button className="close" onClick={() => dispatch(deleteTasksInfo(id))}>
          <FaTimes color="purple" />
        </button>
      </>
    );
  },
  (prevProps: Readonly<ResultType>, nextProps: Readonly<ResultType>) => {
    if (prevProps.done !== nextProps.done) {
      return false;
    } else {
      return true;
    }
  }
);

export default Result;
