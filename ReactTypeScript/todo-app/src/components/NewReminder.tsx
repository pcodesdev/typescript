import React, { useState } from "react";

type Props = { onAddReminder: (title: string) => void };

const NewReminder = ({ onAddReminder }: Props) => {
  const [title, setTitle] = useState("");

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title) return;
    onAddReminder(title);
    setTitle("");
  };
  return (
    <form onSubmit={submitForm} action="">
      <label htmlFor="title"></label>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        id="title"
        type="text"
        className="form-control"
      />
      <button type="submit" className="btn btn-primary rounded-pill my-3">
        Add Reminder
      </button>
    </form>
  );
};

export default NewReminder;
