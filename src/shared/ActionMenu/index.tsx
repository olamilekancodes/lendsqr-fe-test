import { useEffect, useRef, useState, type ReactNode } from "react";
import { EllipsisVertical } from "lucide-react";
import "./ActionMenu.scss";

interface ActionMenuProps {
  items: { label: ReactNode; onClick?: () => void }[];
  toggleAction: () => void;
}

const ActionMenu = ({ items, toggleAction }: ActionMenuProps) => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const toggleMenu = () => {
    setOpen((prev) => !prev);
    toggleAction();
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="action-menu" ref={menuRef}>
      <button className="menu-trigger" onClick={toggleMenu}>
        <EllipsisVertical size={18} />
      </button>

      {open && (
        <div className="menu-list">
          {items.map((item, index) => (
            <button
              key={index}
              className="menu-item"
              onClick={() => {
                if (item.onClick) {
                  item.onClick();
                }
                setOpen(false);
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ActionMenu;
