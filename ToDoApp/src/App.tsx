import Header from "./components/Header";
import TaskContainer from "./components/TaskContainer";

function App() {
  return (
    <div className="h-screen flex flex-col border-4 border-black-400">
      <Header />
      <main className="flex flex-1 flex-row  border-4 border-black">
        <TaskContainer />
      </main>
    </div>
  );
}

export default App;
