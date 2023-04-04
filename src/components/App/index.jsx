import AddItem from '../AddBlock';
import Header from '../Header';
import ListContainer from '../ListContainer';
import './index.css';

function App() {
  return (
    <div className="App">
      <Header></Header>
     <AddItem></AddItem>
     <ListContainer></ListContainer>
    </div>
  );
}

export default App;
