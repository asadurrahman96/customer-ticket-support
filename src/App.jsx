import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Tickets from "./components/Tickets";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    fetch("/tickets.json")
      .then((res) => res.json())
      .then((result) => {
        setData(result);
        setLoading(false);
      });
  }, []);

  const handleCardClick = (ticket) => {
    const alreadyAdded = taskList.find((t) => t.id == ticket.id);
    if (alreadyAdded) {
      alert(`"${ticket.title}" is already in Task Status.`);
      return;
    }
    setTaskList([...taskList, { id: ticket.id, title: ticket.title, completed: false }]);
    alert(`✅ "${ticket.title}" added to Task Status!`);
  };

  const handleComplete = (taskId) => {
    const task = taskList.find((t) => t.id == taskId);
    setTaskList(
      taskList.map((t) => (t.id == taskId ? { ...t, completed: true } : t))
    );
    alert(`🎉 "${task.title}" has been marked as Complete!`);
  };

  const inProgressCount = taskList.filter((t) => !t.completed).length;

  return (
    <div>
      <Navbar />
      <Banner data={data} inProgressCount={inProgressCount} />
      <Tickets
        data={data}
        loading={loading}
        taskList={taskList}
        handleCardClick={handleCardClick}
        handleComplete={handleComplete}
      />
    </div>
  );
}

export default App;
