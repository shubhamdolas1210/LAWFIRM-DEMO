import "./index.css";

export default () => {
  return (
    <div className="heroSection">
      <div className="Content">
        <span style={{ fontWeight: "500" }}>You don’t have to </span>
        <span
          style={{
            fontWeight: "600",
          }}
        >
          Fight them Alone.
        </span>
      </div>
      <div className="ContentDetails">
        <p>
          Lorem ipsum dolor sit amet consectetur adipiscing elit blandit,
          curabitur sodales conubia ut inceptos faucibus himenaeos tortor eget,
          hac massa gravida arcu interdum proin curae.
        </p>
      </div>
      <div className="Searchbar">
        <input
          placeholder="Enter your email address"
          style={{
            width: "438px",
            height: "74px",
            borderRadius: "43px",
            fontWeight: "500",
            paddingLeft: "40px",
          }}
        />
        <buton className="search-btn">Let’s Talk</buton>
      </div>
      <div className="ImgSrc">
        <img src="Image (1).png" alt="Img not visible" />
        <div className="ImgSrc-frame"></div>
      </div>
    </div>
  );
};
