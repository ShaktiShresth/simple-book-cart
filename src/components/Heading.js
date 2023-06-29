import "../styles/heading.css";

const Heading = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h3 style={{ letterSpacing: "1px", color: "firebrick" }}>
        Available Books
      </h3>
      <code style={{ color: "gray" }}>
        "So many books, so little time." - Frank Zappa
      </code>
    </div>
  );
};

export default Heading;
