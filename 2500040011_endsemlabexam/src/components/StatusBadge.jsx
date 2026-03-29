const StatusBadge = ({ status }) => {
  const getColor = () => {
    switch (status) {
      case "Active":
        return "green";
      case "Inactive":
        return "gray";
      case "Blocked":
        return "red";
      default:
        return "blue";
    }
  };

  return (
    <span style={{
      padding: "5px 10px",
      borderRadius: "12px",
      backgroundColor: getColor(),
      color: "white",
      fontSize: "12px"
    }}>
      {status}
    </span>
  );
};

export default StatusBadge;