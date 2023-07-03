import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import styles from './ListHeader.module.css'

const ListHeader=()=>{

    return (
      <>
        <header className={styles.head}>
          <Navbar bg="primary" data-bs-theme="dark">
            <Container>
              <Navbar.Brand href="#home">Todo List</Navbar.Brand>
            </Container>
          </Navbar>
        </header>
      </>
    );
};
export default ListHeader;