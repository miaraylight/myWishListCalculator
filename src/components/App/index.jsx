import AddItem from '../AddBlock';
import CalculationsBlock from '../CalculationsBlock';
import Header from '../Header';
import ListContainer from '../ListContainer';
import './index.css';

function App() {
  return (
    <div className="App">
      <Header></Header>
     <AddItem></AddItem>
     <ListContainer></ListContainer>
     <CalculationsBlock></CalculationsBlock>
    </div>
  );
}

export default App;
