import AddItem from '../AddBlock';
import CalculationsBlock from '../CalculationsBlock';
import Header from '../Header';
import ListContainer from '../ListContainer';
import './index.css';

function App() {
  return (
    <div className="App">
      <div className="main">
        <Header></Header>
        <ListContainer></ListContainer>
      </div>
      <div className="side">
        <AddItem></AddItem>
        <CalculationsBlock></CalculationsBlock>
      </div>
    </div>
  );
}

export default App;
