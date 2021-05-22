import './App.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Main from "./components/main";
import Chart from "./components/chart";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/"
            exact
            component={Main}
          />
           <Route path="/Calendar"
            exact
            component={Main}
          />
          <Route path="/Data"
            exact
            component={Chart}
          />
        </Switch>

      </Router>

    </div>
  );
}

export default App;
