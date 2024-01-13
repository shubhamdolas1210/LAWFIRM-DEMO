import "./index.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

export default () => {
  return (
    <div className="marginS">
      <div className="contain">
        <h1>FAQ</h1>
        <p>Amet minim mollit non deserunt ullamco est sit</p>
        <p>aliqua dolor do amet sint.</p>
      </div>
      <div className="wrapper">
        <Accordion
          style={{
            backgroundColor: "#1d1d1d",
            color: "white",
            font: "Inter",
            paddingTop: "10px",
            paddingBottom: "10px",
          }}
        >
          <AccordionSummary
            expandIcon={
              <AddCircleOutlineIcon
                style={{
                  backgroundColor: "var(--css-primary)",
                  color: "#1d1d1d",
                  borderRadius: "50%",
                }}
              />
            }
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography
              style={{
                display: "flex",
                color: "var(--css-white)",
                fontFamily: "Inter, sans-serif",
                fontSize: "22px",
                fontWeight: 600,
              }}
            >
              Do I need a personal injury report?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              style={{
                display: "flex",
                color: "var(--css-white)",
                fontFamily: "Inter, sans-serif",
                opacity: 0.3,
                fontSize: "16px",
                fontWeight: 500,
              }}
            >
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequatduis enim velit mollit Exer.
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequatduis enim velit mollit Exer.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          style={{
            backgroundColor: "#1d1d1d",
            color: "white",
            font: "Inter",
            paddingTop: "10px",
            paddingBottom: "10px",
          }}
        >
          <AccordionSummary
            expandIcon={
              <AddCircleOutlineIcon
                style={{
                  backgroundColor: "var(--css-primary)",
                  color: "#1d1d1d",
                  borderRadius: "50%",
                }}
              />
            }
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography
              style={{
                display: "flex",
                color: "var(--css-white)",
                fontFamily: "Inter, sans-serif",
                fontSize: "22px",
                fontWeight: 600,
                paddingTop: "10px",
                paddingBottom: "10px",
              }}
            >
              How much is my case worth?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              style={{
                display: "flex",
                color: "var(--css-white)",
                fontFamily: "Inter, sans-serif",
                opacity: 0.3,
                fontSize: "16px",
                fontWeight: 500,
                justifyContent: "flex-start",
              }}
            >
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequatduis enim velit mollit Exer.
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequatduis enim velit mollit Exer.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          style={{
            backgroundColor: "#1d1d1d",
            color: "white",
            font: "Inter",
            paddingTop: "10px",
            paddingBottom: "10px",
          }}
        >
          <AccordionSummary
            expandIcon={
              <AddCircleOutlineIcon
                style={{
                  backgroundColor: "var(--css-primary)",
                  color: "#1d1d1d",
                  borderRadius: "50%",
                }}
              />
            }
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography
              style={{
                display: "flex",
                color: "var(--css-white)",
                fontFamily: "Inter, sans-serif",
                fontSize: "22px",
                fontWeight: 600,
              }}
            >
              What should I do right after car accidect
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              style={{
                display: "flex",
                color: "var(--css-white)",
                fontFamily: "Inter, sans-serif",
                opacity: 0.3,
                fontSize: "16px",
                fontWeight: 500,
                justifyContent: "flex-start",
              }}
            >
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequatduis enim velit mollit Exer.
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequatduis enim velit mollit Exer.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          style={{
            backgroundColor: "#1d1d1d",
            color: "white",
            font: "Inter",
            paddingTop: "10px",
            paddingBottom: "10px",
          }}
        >
          <AccordionSummary
            expandIcon={
              <AddCircleOutlineIcon
                style={{
                  backgroundColor: "var(--css-primary)",
                  color: "#1d1d1d",
                  borderRadius: "50%",
                }}
              />
            }
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography
              style={{
                display: "flex",
                color: "var(--css-white)",
                fontFamily: "Inter, sans-serif",
                fontSize: "22px",
                fontWeight: 600,
              }}
            >
              How much is my case worth?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              style={{
                display: "flex",
                color: "var(--css-white)",
                fontFamily: "Inter, sans-serif",
                opacity: 0.3,
                fontSize: "16px",
                fontWeight: 500,
                justifyContent: "flex-start",
              }}
            >
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequatduis enim velit mollit Exer.
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequatduis enim velit mollit Exer.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};
