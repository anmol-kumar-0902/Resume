import Navigator from './Components/Navigator/Navigator'
import Homepage from './Components/HomePage/Homepage'
import MainPage from './Components/Forms/MainPage/MainPage'
import {
  BrowserRouter ,
  Switch,
  Route
} from 'react-router-dom';
function App() {
  return (
    <div >
     
      <BrowserRouter>
      <Navigator /> 
      <Switch>
      <Route component={Homepage} exact path='/' />
      <Route component={MainPage} exact path='/form' /> 
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
