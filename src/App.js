import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Land, Layout } from "./component/Portal";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Land />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
