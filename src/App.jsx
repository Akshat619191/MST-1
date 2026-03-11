import { useState } from "react";
import Header from "./Components/Header";
import NotificationButton from "./Components/NotificationButton";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const addNotification = () => {
    setCount(count + 1);
  };

  return (
    <div className="container">
      <Header count={count} />
      <NotificationButton addNotification={addNotification} />
    </div>
  );
}

export default App;