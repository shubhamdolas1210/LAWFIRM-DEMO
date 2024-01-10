import Cardblock from "../Cardblock";
import "./index.css";

export default () => {
  return (
    <div className="marginSetter">
      <h4>Why Choose us?</h4>
      <div className="card-row">
        <Cardblock />
        <div className="cardblock special-card">
          <div className="cardblock">
            <img src="Group 19.png" alt="img" />
            <h3>98% Success Rate</h3>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequatduis enim velit mollit Exer.
            </p>
            <button className="btn">Read More</button>
          </div>
        </div>
        <Cardblock />
      </div>
    </div>
  );
};
