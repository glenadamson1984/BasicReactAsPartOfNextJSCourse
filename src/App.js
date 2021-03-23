import Todo from "./components/Todo"
import Modal from "./components/Modal"
import Backdrop from "./components/Backdrop"

function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text="learn react" />
      <Todo text="advanced react" />
      <Todo text="overview react" />
      <Modal></Modal>
      <Backdrop></Backdrop>
    </div>
  );
}

export default App;
