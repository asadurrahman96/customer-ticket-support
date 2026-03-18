const Tickets = ({ data, loading, taskList, handleCardClick, handleComplete }) => {
  const filteredData = data;

  const activeTasks = taskList.filter((t) => !t.completed);
  const resolvedTasks = taskList.filter((t) => t.completed);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 border-4 border-t-4 border-gray-300 border-t-purple-500 rounded-full animate-spin"></div>
          <div className="mt-4 text-xl text-gray-700">Loading...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-10">

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold mb-4">Customer Tickets</h2>

          {filteredData.length == 0 ? (
            <h2 className="font-bold text-[35px] text-center mt-10 text-purple-500">
              No Tickets
            </h2>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredData.map((ticket) => {
                const isAdded = !!taskList.find((t) => t.id == ticket.id);
                return (
                  <div
                    key={ticket.id}
                    onClick={() => handleCardClick(ticket)}
                    className={`shadow-md rounded-md cursor-pointer p-4 transition-all
                      ${isAdded
                        ? "bg-green-50 border border-green-300 opacity-70"
                        : "bg-slate-100 hover:shadow-lg"
                      }`}
                  >
                    <div className="flex justify-between items-start gap-2 mb-2">
                      <h2 className="font-bold text-[17px]">{ticket.title}</h2>
                      <span
                        className={`font-semibold py-1 px-2 shadow rounded-2xl text-sm shrink-0
                          ${ticket.status == "Open" ? "text-red-500 bg-red-100"
                          : ticket.status == "In Progress" ? "text-yellow-500 bg-yellow-100"
                          : "text-green-500 bg-green-100"}`}
                      >
                        {ticket.status}
                      </span>
                    </div>
                    <p className="text-[15px] text-slate-700 line-clamp-2 mb-3">
                      {ticket.description}
                    </p>
                    <div className="flex justify-between items-center text-sm text-gray-400">
                      <div className="flex items-center gap-2">
                        <span>{ticket.id}</span>
                        <span
                          className={`font-semibold py-0.5 px-2 shadow rounded-2xl text-sm
                            ${ticket.priority == "High" ? "text-red-500 bg-red-100"
                            : ticket.priority == "Medium" ? "text-yellow-500 bg-yellow-100"
                            : "text-green-500 bg-green-100"}`}
                        >
                          {ticket.priority}
                        </span>
                      </div>
                      <span>{ticket.customer}</span>
                      <span>{new Date(ticket.createdAt).toLocaleDateString()}</span>
                    </div>

                    {isAdded && (
                      <p className="text-green-600 font-semibold text-sm mt-2">
                        ✓ Added to Task Status
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
        <div className="lg:col-span-1">
          <h2 className="text-2xl font-bold mb-4">Task Status</h2>

          <div className="space-y-4">
            {activeTasks.length == 0 ? (
              <div className="shadow-md rounded-md bg-slate-100 p-4">
                <p className="text-gray-400 text-sm">
                  Click any ticket card to add it here.
                </p>
              </div>
            ) : (
              activeTasks.map((task) => (
                <div key={task.id} className="shadow-md rounded-md bg-slate-100 p-4">
                  <p className="font-semibold text-[16px] mb-3">{task.title}</p>
                  <button
                    className="w-full py-2 rounded-lg font-semibold text-white bg-green-600 hover:bg-green-700 cursor-pointer"
                    onClick={() => handleComplete(task.id)}
                  >
                    Complete
                  </button>
                </div>
              ))
            )}
            <div className="shadow-md rounded-md bg-slate-100 p-4">
              <h3 className="font-bold text-[18px] mb-3 text-black">Resolved Task</h3>
              {resolvedTasks.length == 0 ? (
                <p className="text-gray-400 text-sm">No resolved tasks yet.</p>
              ) : (
                <ul className="space-y-2">
                  {resolvedTasks.map((t) => (
                    <li key={t.id} className="flex items-center gap-2 text-sm text-green-700 font-medium">
                      <span className="w-2 h-2 rounded-full bg-green-500"></span>
                      {t.title}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Tickets;
