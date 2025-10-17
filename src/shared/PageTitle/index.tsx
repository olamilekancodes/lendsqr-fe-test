import { MoveLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

import "./PageTitle.scss";
interface PageTitleProps {
  title: string;
  children?: React.ReactNode;
}
export const PageTitle = ({ title, children }: PageTitleProps) => {
  return (
    <div className="title-container">
      <h2>{title}</h2>
      <div>{children}</div>
    </div>
  );
};

interface EnhancedPageTitleProps {
  title: string;
  children?: React.ReactNode;
  backlinkTitle: string;
}

export const EnhancedPageTitle = ({
  title,
  backlinkTitle,
  children,
}: EnhancedPageTitleProps) => {
  const navigate = useNavigate();
  return (
    <div className="enhanced-title-container">
      <p
        className="back-link"
        onClick={() => navigate(`/${backlinkTitle.toLowerCase()}`)}
      >
        <MoveLeft size={20} />
        Bact to {title}
      </p>

      <PageTitle title={title} children={children} />
    </div>
  );
};
