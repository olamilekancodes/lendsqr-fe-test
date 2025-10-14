import React from "react";
import "./Avatar.scss";

interface AvatarProps {
  src?: string;
  name: string;
  size?: number;
}

const Avatar: React.FC<AvatarProps> = ({ src, name, size = 40 }) => {
  const getInitial = (fullName: string) => {
    if (!fullName) return "?";
    return fullName.trim().charAt(0).toUpperCase();
  };

  return (
    <div
      className="avatar"
      style={{ width: size, height: size, fontSize: size / 2 }}
    >
      {src ? (
        <img src={src} alt={name} className="avatar__image" />
      ) : (
        <span className="avatar__initial">{getInitial(name)}</span>
      )}
    </div>
  );
};

export default Avatar;
