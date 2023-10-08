import './App.css';
import { useEffect, useState } from 'react';

function App() {
  let [data, setData] = useState([]);
  let [search, setSearch] = useState('');
  useEffect(() => {
    fetch(`https://emoji-api.com/emojis?access_key=682f140c6011d6f69e71e879b1d1069a486fc62e`)
      .then(response => response.json())
      .then(response => setData(response))
  }, []);
let handleSearch=(e) => {
setSearch(e.target.value);
}

let handleSubmit=(e) => {
if(search!=='')
{ 
  fetch(`https://emoji-api.com/emojis?search=${search}&access_key=682f140c6011d6f69e71e879b1d1069a486fc62e`)
  .then(response => response.json())
  .then(response => setData(response))
  .catch(error => console.error('Fetch error:', error));
}
}
  return (
    <div className="App">
      <div className="menu">
        <div className="menu_text">
          <h1>EmojiHunt</h1>
          <p>Search, Find, Express with Emojis..</p>
          <input type="text" placeholder="Give some hints.." value={search} onChange={(e)=>handleSearch(e)}/>
          <button className="search" onClick={()=>handleSubmit()}>Search</button>
        </div>
      </div>
      <div className="container">
        {
          data.map((e, i) => (
            <div className="card" key={e.slug}>
              <p className="emo">{e.character}</p>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default App;
