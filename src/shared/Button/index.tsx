import "./Button.scss";

interface Props {
  title: string;
  color: string;
  action?: () => void;
}

const StyledButton = ({ title, color, action }: Props) => {
  return (
    <button
      className="action-button"
      style={
        {
          "--button-base-color": color,
        } as React.CSSProperties
      }
      onClick={action}
    >
      {title}
    </button>
  );
};

export default StyledButton;
