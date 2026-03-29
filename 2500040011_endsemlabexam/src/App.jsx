import { useState } from "react";
import AccountCard from "./components/AccountCard";
import "./App.css";

function App() {
  const [account, setAccount] = useState({
    name: "Shreshta",
    balance: 5000,
    status: "Active",
  });

  const toggleStatus = () => {
    setAccount((prevAccount) => ({
      ...prevAccount,
      status: prevAccount.status === "Active" ? "Blocked" : "Active",
    }));
  };

  return (
    <div className="app-container">
      <h1>Bank Dashboard</h1>

      <AccountCard
        name={account.name}
        balance={account.balance}
        status={account.status}
        onToggleStatus={toggleStatus}
      />
    </div>
  );
}

export default App;