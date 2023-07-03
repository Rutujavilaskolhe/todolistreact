import styles from './Button.module.css';
const Button = () => {
  return <button className={styles.btn} onClick={()=>{
    console.log('button clicked');
  }}>Add To List</button>;
};
export default Button;
