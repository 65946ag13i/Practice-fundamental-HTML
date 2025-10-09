import "../styles/main.scss";

interface Card {
  title?: string; // 可選，因為你用了 `title && <h3>`
  children: React.ReactNode; // 必填內容
  className?: string;
  variant?: "default" | "primary"; // 限制 variant 的可能值
}

const Card = ({
  title,
  children,
  className = "",
  variant = "default",
}: Card) => {
  const cardClass = `grid-item ${
    variant === "primary" ? "bg-primary text-white" : ""
  } ${className}`;

  return (
    <div className={cardClass}>
      {title && <h3 className="mb-2">{title}</h3>}
      <div>{children}</div>
    </div>
  );
};

export default Card;
