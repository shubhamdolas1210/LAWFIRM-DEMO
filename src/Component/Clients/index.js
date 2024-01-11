import ClientBlock from "../ClientBlock";
import "./index.css";

export default () => {
  return (
    <div className="marginSetter">
      <div className="ert">
        <h4>What says our</h4>
        <h4>happy Clients</h4>
        <div className="carousel-btn">
          <button className="btn-left">
            <img src="Down 1.png" alt="img" />
          </button>
          <button className="btn-right">
            <img src="Down 1.png" alt="img" />
          </button>
        </div>
      </div>
      <div className="client-row">
        <ClientBlock />
        <div className="client-special-card">
          <ClientBlock />
        </div>
        <ClientBlock />
      </div>
    </div>
  );
};
