import { BrowserRouter, Route, Switch } from 'react-router-dom';

import LoginScreen from './screens/LoginScreen/LoginScreen';
import HomeScreen from './screens/WebPages/HomeScreen';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomeScreen} />
        <Route exact path="/login" component={LoginScreen}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
