const HomePage = () => {
  return (
    <main>
      <form>
        <input
          type="text"
          placeholder="Search for Users"
          className="input--user-search"
        />
        <input
          type="text"
          placeholder="Location"
          className="input--user-location"
        />
      </form>
    </main>
  );
};

export default HomePage;
