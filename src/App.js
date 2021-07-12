import { BrowserRouter, Route, Switch } from 'react-router-dom';

import RegisterScreen from './screens/RegisterScreen/RegisterScreen';
import LoginScreen from './screens/LoginScreen/LoginScreen';
import HomeScreen from './screens/WebPages/HomeScreen';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomeScreen} />
        <Route exact path="/login" component={LoginScreen} />
        <Route exact path="/register" component={RegisterScreen} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
