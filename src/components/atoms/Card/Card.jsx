import "../../../theme.css";
import "./Card.css";

const Card = ({ children, highlight }) => {
  const cardClassName = highlight ? "card sale" : "card";

  return <div className={cardClassName}>{children}</div>;
};

export { Card };
