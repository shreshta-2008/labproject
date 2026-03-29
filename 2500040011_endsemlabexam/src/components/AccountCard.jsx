import StatusBadge from "./StatusBadge";

const AccountCard = ({ name, balance, status, onToggleStatus }) => {
  return (
    <div style={{
      border: "1px solid #ccc",
      padding: "15px",
      borderRadius: "10px",
      width: "250px",
      margin: "10px"
    }}>
      <h3>{name}</h3>
      <p>Balance: ₹{balance}</p>

      <StatusBadge status={status} />

      <br /><br />

      <button onClick={onToggleStatus}>
        Toggle Status
      </button>
    </div>
  );
};

export default AccountCard;