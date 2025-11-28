import './App.css';

function App() {
  const handleSearch = (e) => {
    e.preventDefault();
    const searchQuery = e.target.search.value;
    if (searchQuery) {
      window.open(`https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`, '_blank');
    }
  };

  const handleLuckySearch = () => {
    const searchInput = document.getElementById('search-input');
    if (searchInput.value) {
      window.open(`https://www.google.com/search?q=${encodeURIComponent(searchInput.value)}&btnI=1`, '_blank');
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="header-links">
          <a href="#about">About</a>
          <a href="#store">Store</a>
        </div>
      </header>

      <main className="App-main">
        <div className="logo-container">
          <h1 className="logo">
            <span className="logo-G">G</span>
            <span className="logo-o1">o</span>
            <span className="logo-o2">o</span>
            <span className="logo-g">g</span>
            <span className="logo-l">l</span>
            <span className="logo-e">e</span>
          </h1>
        </div>

        <form onSubmit={handleSearch} className="search-form">
          <div className="search-box">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              id="search-input"
              name="search"
              className="search-input"
              placeholder="Search Google or type a URL"
              autoComplete="off"
            />
            <span className="mic-icon">🎤</span>
          </div>

          <div className="button-container">
            <button type="submit" className="search-button">
              Google Search
            </button>
            <button type="button" className="lucky-button" onClick={handleLuckySearch}>
              I'm Feeling Lucky
            </button>
          </div>
        </form>

        <div className="language-links">
          Google offered in: <a href="#hindi">हिन्दी</a> <a href="#bengali">বাংলা</a> <a href="#telugu">తెలుగు</a> <a href="#marathi">मराठी</a>
        </div>
      </main>

      <footer className="App-footer">
        <div className="footer-country">India</div>
        <div className="footer-links">
          <div className="footer-left">
            <a href="#advertising">Advertising</a>
            <a href="#business">Business</a>
            <a href="#how-search-works">How Search works</a>
          </div>
          <div className="footer-right">
            <a href="#privacy">Privacy</a>
            <a href="#terms">Terms</a>
            <a href="#settings">Settings</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
