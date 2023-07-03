const List = ({task}) => {
const listItems= task.map((task,index) => <li key={index}>task</li>)
  return (
    <ul>
      {listItems}
    </ul>
  );
};
export default List;
