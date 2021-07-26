import { BrowserRouter, Route, Switch } from 'react-router-dom';

import RegisterScreen from './screens/RegisterScreen/RegisterScreen';
import BackofficeScreen from './screens/BackOffice/Backoffice';
import LoginScreen from './screens/LoginScreen/LoginScreen';
import HomeScreen from './screens/WebPages/HomeScreen/Home';
import NewScreen from './screens/WebPages/NewsScreen/News';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomeScreen} />
        <Route exact path="/news" component={NewScreen} />
        <Route exact path="/login" component={LoginScreen} />
        <Route exact path="/register" component={RegisterScreen} />
        <Route exact path="/backoffice" component={BackofficeScreen} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
