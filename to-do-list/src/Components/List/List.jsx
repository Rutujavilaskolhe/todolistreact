// eslint-disable-next-line react/prop-types
const List = ({ message }) => {
  // eslint-disable-next-line react/prop-types
  const listitem = message.map((val, index) => <li key={index}>{val}</li>);

  return <ul>{listitem}</ul>;
};
export default List;
