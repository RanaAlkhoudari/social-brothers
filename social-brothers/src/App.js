import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BlogPage from "./pages/BlogPage";
import Error from "./components/Error";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage}></Route>
        <Route path="/blogs" exact component={BlogPage}></Route>
        <Route path="*" component={Error}></Route>
      </Switch>
    </Router>
  );
}

export default App;
