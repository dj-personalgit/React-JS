import { useState } from "react";

const App = () => {

  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const [task, setTask] = useState([]);

  // Define some gradient color combinations
  const gradients = [
    "from-indigo-500 to-purple-600",
    "from-pink-500 to-rose-500",
    "from-blue-500 to-cyan-500",
    "from-green-400 to-emerald-500",
    "from-orange-400 to-red-500",
    "from-teal-400 to-sky-500"
  ];

  // Helper: Format date and time nicely
  const formatDate = (date) => {
    return date.toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    // pick a random gradient
    const randomGradient = gradients[Math.floor(Math.random() * gradients.length)];

    const newNote = {
      title,
      details,
      color: randomGradient,
      timestamp: formatDate(new Date()),
    };

    setTask((prev) => [...prev, newNote]);

    console.log('Form Submited by', title);

    setTitle('');
    setDetails('');

  }

  function deleteNote(index) {
    const newNote = [...task]
    // console.log(index);

    newNote.splice(index, 1);
    setTask(newNote);


  }

  return (
    <div className="min-h-screen flex flex-col md:flex-row items-start justify-center gap-10 px-6 py-12 bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200">
      {/* Form Section */}
      <form
        onSubmit={(e) => submitHandler(e)}
        className="w-full md:max-w-md p-8 bg-white/80 backdrop-blur-xl shadow-2xl rounded-2xl border border-gray-200 transition-all duration-300 hover:shadow-[0_10px_40px_rgba(0,0,0,0.1)]"
      >
        <h1 className="text-3xl font-bold mb-6 text-gray-900 tracking-tight">
          Add Notes
        </h1>

        <div className="flex flex-col gap-5 font-medium">
          <div>
            <label htmlFor="task-heading" className="text-sm text-gray-600 mb-2 block">
              Task Heading
            </label>
            <input
              id="task-heading"
              autoComplete="off"
              type="text"
              placeholder="Enter task heading"
              className="w-full px-5 py-3 border border-gray-300 rounded-lg bg-gray-50 focus:border-blue-500 focus:ring-2 focus:ring-blue-400 transition-all duration-200 outline-none placeholder:text-gray-400"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="task-details" className="text-sm text-gray-600 mb-2 block">
              Details
            </label>
            <textarea
              id="task-details"
              autoComplete="off"
              placeholder="Write details"
              className="w-full px-5 py-3 h-36 border border-gray-300 rounded-lg bg-gray-50 focus:border-blue-500 focus:ring-2 focus:ring-blue-400 transition-all duration-200 outline-none resize-none placeholder:text-gray-400"
              value={details}
              onChange={(e) => setDetails(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-lg font-semibold tracking-wide shadow-md hover:shadow-lg hover:from-blue-700 hover:to-indigo-700 active:scale-95 transition-all duration-200 ease-out"
          >
            Add Notes
          </button>
        </div>
      </form>


      {/* Notes Display Section */}
      <div className="w-full md:flex-1 max-w-5xl mx-auto bg-white/80 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-200 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] overflow-hidden">
        {/* Header */}
        <div className="sticky top-0 z-10 bg-white/70 backdrop-blur-md border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Your Notes</h1>
          <span className="text-sm text-gray-500">Organize, review, and create</span>
        </div>

        {/* Notes Grid */}
        <div className="px-6 py-4 h-[498px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {/* Example Notes */}
            <div className="group relative h-56 w-full rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 p-4 text-white">
              <h2 className="text-lg font-semibold mb-2">Project Plan</h2>
              <p className="text-sm opacity-90"> Outline the roadmap and key deliverables for next week’s sprint... </p>
              <div className="absolute bottom-3 right-3 text-xs opacity-75 group-hover:opacity-100 transition-opacity duration-200"> Nov 6, 2025 </div>
            </div>



            {/* Dynamically added notes will map here */}

            {task.map(function (notedata, index) {
              return <div key={index} className={`group relative h-56 w-full rounded-xl bg-gradient-to-br ${notedata.color} shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 p-4 text-white`}>

                <button
                  className="absolute top-2 right-2 text-white rounded-full p-1 transition-all duration-150 active:scale-90"
                  onClick={() => {
                    deleteNote(index)
                  }}
                  aria-label="Delete note"> ✕ </button>

                <h2 className="text-lg font-semibold mb-2">{notedata.title}</h2>
                <p className="text-sm opacity-90">
                  {notedata.details}
                </p>
                <div className="absolute bottom-3 right-3 text-xs opacity-75 group-hover:opacity-100 transition-opacity duration-200">
                  {notedata.timestamp}
                </div>
              </div>
            })}


          </div>
        </div>

        {/* footer */}
        <div className="h-6 lg:h-4 sticky top-0 z-10 bg-white/70 backdrop-blur-md border-t border-gray-200">

        </div>
      </div>

    </div>

  )
}

export default App