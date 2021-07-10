import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomeScreen from './screens/WebPages/HomeScreen';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomeScreen} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
