import React, { useState } from 'react';

interface SearchnProps {
  onSearch: (searchWord: string) => void;
}

const Searchn: React.FC<SearchnProps> = ({ onSearch }) => {
  const [searchWord, setSearchWord] = useState('');

  const handleSearch = () => {
    onSearch(searchWord);
  };

  return (
    <div className='input-box'>
      <input 
        type="text" 
        value={searchWord} 
        onChange={(e) => setSearchWord(e.target.value)} 
        placeholder="search questions" 
      />
      <button onClick={handleSearch}>Search Questions</button>

      <input 
        type="text" 
        value={searchWord} 
        onChange={(e) => setSearchWord(e.target.value)} 
        placeholder="search answers" 
      />
      <button onClick={handleSearch}>Search Answers</button>

      <button onClick={handleSearch}>Clear Search</button>
    </div>
  );
};

export default Searchn;