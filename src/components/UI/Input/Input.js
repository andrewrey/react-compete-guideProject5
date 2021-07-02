import classes from "./Input.module.css";

const Input = ({
  type,
  id,
  value,
  onChange,
  onBlur,
  isValid,
  label,
  htmlFor,
}) => {
  console.log(isValid);
  return (
    <div
      className={`${classes.control} ${
        isValid === false ? classes.invalid : ""
      }`}
    >
      <label htmlFor={htmlFor}>{label}</label>
      <input
        type={type || "text"}
        id={id}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  );
};

export default Input;