import './App.css'
import {Modal} from "./components/modal/Modal.tsx";

function App() {
  return (
      <>
          <Modal
              title="Card title"
              text="Some quick example text to build on the card title and make up the bulk of the card's content."
          >
              <img src="" className="card-img-top" alt="Image cap"></img>
          </Modal>
          <Modal
              title = "Special title treatment"
              text="With supporting text below as a natural lead-in to additional content."
          >
          </Modal>
      </>
  )
}

export default App
