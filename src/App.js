import Home from "./pages/Home";
import NewFeedback from "./pages/NewFeedback";
import EditFeedback from "./pages/EditFeedback";
import RoadmapPage from "./pages/RoadmapPage";
import FeedbackDetail from "./pages/Feedbackdetail";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  document.title = "Feedback Board";
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/new-feedback" component={NewFeedback} />
        <Route path="/edit-feedback/:id" component={EditFeedback} />
        <Route path="/roadmap" component={RoadmapPage} />
        <Route path="/feedback/:id" component={FeedbackDetail} />
      </Switch>
    </Router>
  );
}

export default App;
