import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTasksInfo } from "../redux/asyncActions";
import { motion, AnimatePresence } from "framer-motion";
import Loading from "./Loading";
import { selectItems } from "../redux/selectors";
import { AppDispatch } from "../redux/store";
import Result from "./Result";

const Results: React.FC = () => {
  const { items, loading } = useSelector(selectItems);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getTasksInfo());
  }, [dispatch]);

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
                <Result id={value.id} done={value.done} text={value.text} />
              </motion.li>
            ))}
          </ul>
        </AnimatePresence>
      )}
    </div>
  );
};

export default Results;
