import { MoveLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

import "./PageTitle.scss";
interface Props {
  title: string;
  children?: React.ReactNode;
}
export const PageTitle = ({ title, children }: Props) => {
  return (
    <div className="title-container">
      <h2>{title}</h2>
      <div>{children}</div>
    </div>
  );
};

export const EnhancedPageTitle = ({ title, children }: Props) => {
  const navigate = useNavigate();
  return (
    <div className="enhanced-title-container">
      <p
        className="back-link"
        onClick={() => navigate(`/${title.toLowerCase()}`)}
      >
        <MoveLeft size={20} />
        Bact to {title}
      </p>

      <PageTitle title={title} children={children} />
    </div>
  );
};
