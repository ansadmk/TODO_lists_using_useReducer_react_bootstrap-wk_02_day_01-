import { useReducer } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container, Navbar, NavDropdown, Nav } from "react-bootstrap";
// import Show from './task'

function App() {
  const i = [];

  const reduce = (state, action) => {
    const { id, arra, value } = action;

    switch (id) {
      case "add":
        return arra != undefined
          ? { inp: "", arr: [...arra, value] }
          : { inp: "", arr: [value] };
      case "inp":
        return { inp: value, arr: state.arr };
      case "remove":
        const arr2 = arra.filter((a, i) => {
          return i != value;
        });
        return { inp: " ", arr: arr2 };
    }
  };
  const [{ inp, arr }, dispach] = useReducer(reduce, i);
  console.log(arr);

  return (
    <>
      <Navbar expand="lg" bg="warning" variant="light">
        <Container>
          <Navbar.Brand>TODO LISTS</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto ">
              <Nav.Link>Home</Nav.Link>

              <NavDropdown id="basic-nav-dropdown">
                <NavDropdown.Item>remainder </NavDropdown.Item>
                <NavDropdown.Item>Another remainder</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>Separated remainder</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className="text-center mt-5">
        <h1>Task Reminder</h1>

        <form
          className="text-center "
          onSubmit={(e) => {
            e.preventDefault();
            console.log(arr);
            dispach({
              id: "add",
              value: inp,
              arra: arr,
            });
          }}
        >
          <h4 className="d-inline">Enter your Task: </h4>
          <input
            className="m-3"
            type="text"
            value={inp}
            onChange={(e) => {
              dispach({ value: e.target.value, id: "inp", arra: arr });
            }}
          />

          <Button variant="primary" type="submit">
            Add Task
          </Button>
        </form>

        <div className="container d-flex flex-column align-items-center ">
          {arr == [] ? (
            <h3
              style={{ background: "#ff6666" }}
              className="p-2 rounded-3 w-50 "
            >
              No Tasks added
            </h3>
          ) : (
            arr?.map((a, i) => (
              <h1
                style={{ background: "#ccffcc" }}
                className="p-2 rounded-3 w-50  overflow-auto"
              >
                {a}
                <div>
                  <Button
                    className="h6 border-0 bg-danger text-white"
                    onClick={() => {
                      dispach({ id: "remove", value: i, arra: arr });
                    }}
                  >
                    Delete
                  </Button>
                </div>
              </h1>
            ))
          )}
        </div>
      </Container>
    </>
  );
}

export default App;

