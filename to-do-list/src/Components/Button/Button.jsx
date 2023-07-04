import styles from "./Button.module.css";
// eslint-disable-next-line react/prop-types
const Button = ({ btnClickhandler, btnlabel, isDisabled }) => {
  return (
    <button
      className={styles.btn}
      onClick={btnClickhandler}
      disabled={isDisabled}
      >
      {btnlabel}
    </button>
  );
};
export default Button;
