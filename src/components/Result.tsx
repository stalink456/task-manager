import React, { useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import {
  getTasksInfo,
  putTasksInfo,
  deleteTasksInfo,
} from "../redux/asyncActions";
import { motion, AnimatePresence } from "framer-motion";
import Loading from "./Loading";
import { selectItems } from "../redux/selectors";
import { AppDispatch } from "../redux/store";

const Result: React.FC = () => {
  const { items, loading } = useSelector(selectItems);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getTasksInfo());
  }, [dispatch]);

  const onChangeDone = (text: string, done: boolean) => (e: any) => {
    e.preventDefault();
    dispatch(putTasksInfo({ id: e.target.value, text: text, done: !done }));
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="result">
      {items.length === 0 ? (
        <div className="empty">
          <h1>Пока еще нет задач</h1>
        </div>
      ) : (
        <AnimatePresence>
          <ul>
            {items.map((value, index) => (
              <motion.li
                key={value.id}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                }}
                transition={{
                  delay: index * 0.2,
                }}
                exit={{ opacity: 0 }}
              >
                <input
                  type="checkbox"
                  value={value.id}
                  checked={value.done ? true : false}
                  onChange={onChangeDone(value.text, value.done)}
                />
                <h1>
                  {value.done ? <del>{value.text}</del> : <>{value.text}</>}
                </h1>
                <button
                  className="close"
                  onClick={() => dispatch(deleteTasksInfo(value.id))}
                >
                  <FaTimes color="purple" />
                </button>
              </motion.li>
            ))}
          </ul>
        </AnimatePresence>
      )}
    </div>
  );
};

export default Result;
