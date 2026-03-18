import { useState, Suspense } from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Tickets from "./components/Tickets";
import Footer from "./components/Footer";

const fetchTickets = async () => {
  const res = await fetch("/tickets.json");
  return res.json();
};

const fetchPromise = fetchTickets();

function App() {
  const [taskList, setTaskList] = useState([]);

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
      <div className="bg-[#FFFFFF]">
        <Navbar />

        <Suspense fallback={<div className="flex items-center justify-center h-screen"><div className="w-16 h-16 border-4 border-t-4 border-gray-300 border-t-purple-500 rounded-full animate-spin"></div></div>}>
          <Banner fetchPromise={fetchPromise} inProgressCount={inProgressCount} />
          <Tickets
            fetchPromise={fetchPromise}
            taskList={taskList}
            handleCardClick={handleCardClick}
            handleComplete={handleComplete}
          />
        </Suspense>
      </div>
      <Footer />
    </div>
  );
}

export default App;

