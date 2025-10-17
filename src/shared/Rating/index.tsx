import { IoStarOutline, IoStarSharp } from "react-icons/io5";

import "./Rating.scss";

interface Props {
  tag: number;
}

export const Rating = ({ tag }: Props) => {
  const totalStars = 5;
  const filledStars = Math.min(tag, totalStars);
  const emptyStars = totalStars - filledStars;

  return (
    <div className="stars">
      {[...Array(filledStars)].map((_, i) => (
        <IoStarSharp key={`filled-${i}`} size={20} color="#E9B200" />
      ))}
      {[...Array(emptyStars)].map((_, i) => (
        <IoStarOutline key={`empty-${i}`} size={20} color="#E9B200" />
      ))}
    </div>
  );
};
