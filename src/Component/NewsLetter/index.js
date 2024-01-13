import "./index.css";

export default () => {
  return (
    <div className="margin">
      <div className="Header">
        <h1>Subscribe Our Newsletter</h1>
        <div className="Searchbar1">
          <input
            placeholder="Name"
            style={{
              height: "53px",
              fontStyle: "italic",
              borderRadius: "8px 0px 0px 8px",
              fontSize: "14px",
              fontWeight: "400",
              paddingLeft: "30px",
              marginBottom: "50px",
              marginLeft: "6px",
              marginRight: "0px",
            }}
          />
          <input
            placeholder="Enter your email"
            style={{
              height: "53px",
              fontStyle: "italic",
              fontWeight: "400",
              fontSize: "14px",
              paddingLeft: "40px",
              marginLeft: "6px",
              marginRight: "164px",
            }}
          />
        </div>
        <buton className="search-btn1">Send</buton>
      </div>
    </div>
  );
};
