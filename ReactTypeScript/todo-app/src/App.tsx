import React, { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ReminderList from "./components/ReminderList";
import Reminder from "./modals/reminder";

import ReminderService from "./services/reminder";

function App() {
  const [reminders, setReminders] = useState<Reminder[]>([]);
  const loadReminders = async () => {
    const reminders = await ReminderService.getReminders();
    setReminders(reminders);
  };
  useEffect(() => {
    loadReminders();
  }, []);

  return (
    <div className="App">
      <ReminderList items={reminders} />
    </div>
  );
}

export default App;
