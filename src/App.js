import './App.css';
import Board from './components/Board/Board';
import Header from './components/header/Header';
import { useEffect, useState } from 'react';
import Filters from './utils';

function App() {
  const [boardData, setBoardData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.quicksell.co/v1/internal/frontend-assignment');
        const data = await response.json();
        console.log(data);
        setBoardData(data);
      } catch (err) {
        console.log("error during fetch data from API: " + err);
      }

    }
    fetchData();

  }, [])
  return (
    <div className="App">
      <div className='app_navbar'>
        <Header />
      </div>
      <div className='app_outer'>
        <div className='app_board'>
          {Filters.Status.map((filterData) => (
            <Board key={filterData.id} name={filterData.name} icon={filterData.icon} boardData={boardData} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
