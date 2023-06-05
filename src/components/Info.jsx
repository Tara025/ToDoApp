import uebersichtImg from "../assets/uebersicht-components.webp"

const Info = () => (
  <div className="info">
    <br />
    <h2 >Component Übersicht</h2>
    <img className="img" src={uebersichtImg} alt="Übersicht"/>

<ol >
  <li><strong>TodoApp</strong>: the parent or root component. It holds two direct child components.</li>
  <li><strong>Header</strong>: display the todos heading text.</li>
  <li><strong>TodosLogic</strong>: contains the application logic. It includes two direct child components.</li>
  <li><strong>InputTodo</strong>: will take the user’s input.</li>
  <li><strong>TodosList</strong>: serves as a container for the todos items.</li>
  <li><strong>TodoItem</strong>: renders the individual todos item.</li>
</ol>

  </div>
)

export default Info;


