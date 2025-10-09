import "../styles/main.scss";

interface ButtonPros {
  variant?: "primary" | "secondary" | "danger" | "warning" | "success"; // 可根據你的樣式調整
  size?: "small" | "medium" | "large";
  children: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
}

const Button = ({
  variant = "primary",
  size = "medium",
  children,
  disabled = false,
  onClick,
  className = "",
}: ButtonPros) => {
  const buttonClass = `btn-${variant} btn-${size} ${className}`;

  return (
    <button className={buttonClass} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
