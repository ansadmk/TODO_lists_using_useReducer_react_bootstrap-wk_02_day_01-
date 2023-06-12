import { Button } from "react-bootstrap";

function Task({ array, setarr }) {
     

  return (
    <div className="container d-flex flex-column align-items-center " >
      {array == "" ? (
        <h3 style={{ background: "#ff6666" }} className="p-2 rounded-3 w-50 ">
          No Tasks added
        </h3>
      ) : (
        array.map((a, i) => (
          <h1
            style={{ background: "#ccffcc" }}
            className="p-2 rounded-3 w-50  overflow-auto"
          >
            {a}
            <div>
              <Button
                className="h6 border-0 bg-danger text-white"
                onClick={() => {
                  setarr((b) => (b = b.filter((c, o) => o != i)));
                }}
              >
                Delete
              </Button>
            </div>
          </h1>
        ))
      )}
    </div>
  );
}
export default Task;
