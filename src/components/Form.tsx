import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { postTasksInfo } from "../redux/asyncActions";
import { setText } from "../redux/TaskSlice";
import { motion } from "framer-motion";
import { formAnimation } from "./Animation";
import { selectText } from "../redux/selectors";
import { AppDispatch } from "../redux/store";

const Form = () => {
  const text = useSelector(selectText);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <motion.div initial="hidden" whileInView="visible" className="container">
      <motion.div variants={formAnimation} className="form">
        <h2>Опишите свою задачу</h2>
        <div className="input-group">
          <input
            type="text"
            placeholder="Опишите свою задачу"
            value={text || ""}
            onChange={(e) => dispatch(setText(e.target.value))}
          />
          <button
            disabled={text.length > 5 ? false : true}
            onClick={(e) => {
              e.preventDefault();
              dispatch(postTasksInfo({ text: text, done: false }));
            }}
          >
            Создать
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Form;
