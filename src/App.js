import RoutesApp from "./routes";
import './index.css';
import { ToastContainer } from "react-toastify";

import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <RoutesApp />
      <div className="app"></div>
      <ToastContainer autoClose={3000}/>
    </div>
  );
}

export default App;
