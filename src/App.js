import Header from "./Components/Header";
import Tasks from "./Components/Task";

function App() {
  return (
    <div className="container">
      <Header 
        title = "React Refresher"
        />
        <Tasks />
    </div>
  );
}

export default App;
