import "../styles/App.scss";
import quotes from "../data/quotes.json";
import { useState } from "react";

function App() {
  const [data, setData] = useState(quoteList);
  const [search, setSearch] = useState("");
  const [newContact, setNewContact] = useState({
    quote: "",
    character: "",
  });
  const handleSearch = (ev) => {
    setSearch(ev.target.value);
  };
  const handleNewQuote = (ev) => {
    setNewQuote({
      ...setNewQuote,
      [ev.target.id]: ev.target.value,
    });
  };

  const handleClick = (ev) => {
    ev.preventDefault();
    setData([...data, newQuote]);
    setNewQuote({
      quote: "",
      character: "",
    });
  };

  const htmlData = data
    .filter(
      (quote) =>
        quote.name.toLowerCase().includes(search.toLowerCase()) ||
        quote.lastname.toLowerCase().includes(search.toLowerCase())
    )
    .map((quote, i) => {
      return (

        





      
      );
    });

  return (
    <div className='page'>
      <header className='header'></header>
      <h1 className='header_title'>Frases de Friends</h1>

      <form>
        <input
          className='quotes__search'
          autoComplete='off'
          type='search'
          name='search'
          placeholder='Filtrar por frase'
          onChange={handleSearch}
          value={search}
        />
        <input
          className='character__search'
          autoComplete='off'
          type='search'
          name='search'
          placeholder='Filtrar por personajes'
          onChange={handleSearch}
          value={search}
        />
      </form>

      <footer className='footer'>
        <h2 className='h2'>Añadir una nueva frase</h2>
        <form>
          <input
            className='quote2__search'
            autoComplete='off'
            type='search'
            name='search'
            placeholder='Frase'

            onChange={handleSearch}
            value={search}
          />
          <input
            className='character2__search'
            autoComplete='off'
            type='search'
            name='search'
            placeholder='Personaje'

            onChange={handleSearch}
            value={search}
          />
        </form>
      </footer>
    </div>
  );
}

export default App;
