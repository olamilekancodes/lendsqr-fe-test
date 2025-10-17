import { ValueTypography } from "./Typography";

interface CardTitleProps {
  title: string;
}

const CardTitle = ({ title }: CardTitleProps) => {
  return (
    <div className="card-title">
      <ValueTypography value={title} />
    </div>
  );
};

export default CardTitle;
