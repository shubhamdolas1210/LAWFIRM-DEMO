import "./index.css";
export default () => {
  return (
    <div className="Navbar">
      <img src="Group 10386.png" alt="img" className="logo" />
      <div className="Navbar-tab">
        <p>Home</p>
        <p>Attorneys</p>
        <p>Practice Areas</p>
        <p>About Us</p>
      </div>
      <div>
        <button className="Navbar-btn">Contact Now</button>
      </div>
    </div>
  );
};
