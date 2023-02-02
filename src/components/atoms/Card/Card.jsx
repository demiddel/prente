import "../../../theme.css";
import "./Card.css";

const Card = ({ children, highlight }) => {
  const cardClassName = highlight ? "card sale" : "card";

  return <article className={cardClassName}>{children}</article>;
};

export { Card };
