import { useState } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import List from "../List/List";

const TodoList = () => {
  // eslint-disable-next-line no-unused-vars
  const [list, setList] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [text,setText]= useState('');
  const btnClickhandler=() => {
          // const updatedList = [...list];
          // updatedList.push(text);
          // setList(updatedList);
          const textTrim = text.trim();
          if (textTrim) {
            setList([...list, textTrim]);
          setText('');
          }
        }
        
  return (
    <>
      <Input
        onChangehandler={(str) => {
          setText(str);
        }}
        textValue={text}
        keyhandler={(e) => {
        if(e.key === 'Enter')
        btnClickhandler();
        }}
      />
      <Button
        btnClickhandler={btnClickhandler}
        btnlabel="Add To Cart"
        isDisabled={text.trim().length ===0}
        
      
      />
      <List message={list} />
    </>
  );
};
export default TodoList;
