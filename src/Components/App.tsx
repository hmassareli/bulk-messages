import { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <div className="bg-green h-10 flex items-center p-4 w-full">
          <Link to="/send">
            {" "}
            <p className="text-white">Bulk messages</p>
          </Link>
        </div>
      </div>
    </>
  );
}

export default App;
