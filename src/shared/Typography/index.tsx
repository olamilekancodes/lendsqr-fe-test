import "./Typography.scss";

interface ValueTypographyProps {
  value: string;
}

export const ValueTypography = ({ value }: ValueTypographyProps) => {
  return <p className="value">{value}</p>;
};

interface TitleTypographyProps {
  title: string;
}

export const TitleTypography = ({ title }: TitleTypographyProps) => {
  return <p className="title">{title}</p>;
};
