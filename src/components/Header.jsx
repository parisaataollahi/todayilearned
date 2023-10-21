function Header({ showForm, setShowForm }) {
  return (
    <header className="header">
      <div className="logo">
        <img src="logo.png" alt="Today I Learned Logo" />
        <h1>Today I Learned</h1>
      </div>

      <button
        onClick={() => setShowForm(showForm => !showForm)}
        className="btn btn-large"
      >
        {showForm ? "Close" : "share a fact"}
      </button>
    </header>
  );
}

export default Header;
