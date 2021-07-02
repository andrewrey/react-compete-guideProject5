import { useRef, useImperativeHandle, forwardRef } from "react";
import classes from "./Input.module.css";

const Input = forwardRef(
  ({ type, id, value, onChange, onBlur, isValid, label }, ref) => {
    const inputRef = useRef();
    const activate = () => {
      inputRef.current.focus();
    };

    useImperativeHandle(ref, () => {
      return {
        activate,
      };
    });
    return (
      <div
        className={`${classes.control} ${
          isValid === false ? classes.invalid : ""
        }`}
      >
        <label htmlFor={id}>{label}</label>
        <input
          ref={inputRef}
          type={type || "text"}
          id={id}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        />
      </div>
    );
  }
);

export default Input;
