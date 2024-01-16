// Write your code here
import './index.css'

const TodoItem = props => {
  const {todoList, deleteite} = props
  const {id, title} = todoList

  const deletee = () => {
    deleteite(id)
  }
  return (
    <li className="itemContainer">
      <p className="title">{title}</p>
      <button onClick={deletee} type="button" className="delbtn">
        Delete
      </button>
    </li>
  )
}
export default TodoItem
