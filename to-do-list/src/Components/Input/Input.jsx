// eslint-disable-next-line react/prop-types
const Input = ({ onChangehandler, textValue, keyhandler }) => {
  return (
    <input
      type="text"
      onChange={(e) => {
        onChangehandler(e.target.value);
      }}
      value={textValue}
      onKeyUp={keyhandler}
    />
  );
};
export default Input;
