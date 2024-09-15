import './App.css';
import TasksList from './TasksList'
import { DragDropContext } from 'react-beautiful-dnd'

function App() {
  return (
    <DragDropContext onDragEnd={() => {}}>
      <TasksList />
    </DragDropContext>
  );
}

export default App;
