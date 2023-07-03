import { useState } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import List from "../List/List";

const TodoList = () => {
const [olist, setOlist]= useState();
  return (
    <>
      <Input />
      <Button />
      <List task={olist}/>
    </>
  );
};
export default TodoList;
