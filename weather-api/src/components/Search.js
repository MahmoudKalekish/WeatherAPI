import React, { useState } from "react";
import '../App.css'
const Search = (props) => {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.click(input);
// try{
//   alert("adfqwfewf");
// } catch (error) {

//   }
   
  };

  

  return (
    <>
      <header>
        <form>
          <input
            placeholder="Type in a city name"
            className="cityInput"
            onChange={handleChange}
          />
          <button onClick={handleSubmit}>FIND WEATHER</button>
        </form>
      </header>
    </>
  );
};

export default Search;
