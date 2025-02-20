import React, { useState, useEffect } from "react";
import './App.css';

function App() {
  const [searchArtist, setSearchArtist]  = useState("");
  const [searchResult, setSearchResult] = useState([{id: 0, name: "default"}]);
  const dev_url = "http://localhost:3000";
  const prod_url = "https://verificationspotifyplaysong-ti178owv.b4a.run";

  useEffect (() => {
    console.log(searchArtist);
  },[searchArtist]);

  const handleInputChange = ( event ) => {
    setSearchArtist(event.target.value);
  }

  const handleSearch = async(artist) => {
    try{
      const response = await fetch(`${prod_url}/posts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          post: {
            name: artist
          }
        })
      })
      const fetch_data = await response.json();
      console.log("fetch_data", fetch_data);
      setSearchResult(fetch_data)
    }catch(error){
      console.error(error);
    }
  }

  return (
    <>
    {/* アーティスト名入力フォーム */}
      <input 
        type="text"
        id="artistName"
        placeholder="アーティスト名を入力"
        className="border border-black ext-sm/6 font-medium text-gray-900"
        onChange={handleInputChange}/>
      <button
        type="button"
        className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50"
        onClick={() => {
          if (searchArtist === ""){
            console.log("検索ボタンがクリックされました")
            return;
          }
          console.log("検索ボタンがクリックされました")
          handleSearch(searchArtist);
        }}>
       保存 
      </button>
      <div>
        <ul>
          {searchResult.map((result) => (
            <li key={result.id}>{result.name}</li>
          )
          )}
        </ul>
      </div>
    </>
  );
}

export default App;
