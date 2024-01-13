import "./index.css";
export default () => {
  return (
    <div style={{ backgroundColor: "var(--css-black)" }}>
      <div className="Navbar">
        <img src="Group 10386.png" alt="img" className="logo" />
        <div className="Navbar-tab">
          <p>Home</p>
          <p>Attorneys</p>
          <p>Practice Areas</p>
          <p>About Us</p>
        </div>
        <div>
          <div className="icon-logo">
            <img
              src="Icon.png"
              alt="img"
              style={{ paddingLeft: "20px", paddingRight: "20px" }}
            />
            <img
              src="Icon (1).png"
              alt="img"
              style={{ paddingRight: "20px" }}
            />
            <img
              src="Icon (2).png"
              alt="img"
              style={{ paddingRight: "20px" }}
            />
            <img
              src="Icon (3).png"
              alt="img"
              style={{ paddingRight: "20px", marginRight: "140px" }}
            />
          </div>
        </div>
      </div>
      <div className="Footer">
        <p>© 2020 Acme. All right</p>
        <p>Privacy Policy</p>
        <p>Terms of Service</p>
      </div>
    </div>
  );
};
