import "./StatusChip.scss";

interface Props {
  status: string;
}

export const StatusChip = ({ status }: Props) => {
  const formattedStatus = status.toLowerCase();
  return (
    <button className={`status-chip status-${formattedStatus}`}>
      {status}
    </button>
  );
};
