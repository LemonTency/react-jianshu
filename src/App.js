import { Provider } from 'react-redux'
import { BrowserRouter, Route } from "react-router-dom";
import Header from './common/header';
import Home from './pages/home'
import Detail from './pages/detail'
import Login from './pages/login'
import store from './store'

function App() {
  return (
    // provider包裹起来的组件都有能力使用store
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Route path="/" exact component={Home}></Route>
        <Route path="/login" exact component={Login}></Route>
        <Route path="/detail" exact component={Detail}></Route>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
