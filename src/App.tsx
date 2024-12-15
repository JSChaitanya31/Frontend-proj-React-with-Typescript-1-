import { JSXElementConstructor, useState } from 'react';
import Nav from './components/Navbar/Nav';
import Searchn from './components/SearchBar/Searchn';
import './App.css';
import Table from './components/Table/Table';

function App (): JSX.Element {
  const [data, setData] = useState<string>("");

  const handleSubmit =(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(data);
  }
  return (
    <div className='App'>
      <div>
        <Nav />
      </div>
      <div>
        <button type="submit" className='QA-btn'>Add New QA Pair</button>
      </div>

      <div className='searchbar'>
        <span>Search Questions: &nbsp;
          <input type="text" className="searchbox-o" value={data} onChange={(e) => setData(e.target.value)} placeholder="Search Questions..." />
          <button type="submit" className='btn-one'>Search Questions</button>
        </span>

        <span>Search Answers: &nbsp;
          <input type="text" className="searchbox-t" value={data} onChange={(e) => setData(e.target.value)} placeholder="Search Answers..." />
          <button type="submit" className='btn-one'>Search Answers</button>
        </span>
        <button type="submit" className='btn-two'>Clear Search</button>
      </div>
      <div>
      <h4>LLM Training Data</h4>
      </div>
      <div>
        <Table />

      </div>

    </div>

  );
}

export default App;
