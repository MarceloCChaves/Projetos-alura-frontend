import Carrinho from 'pages/Carrinho';
import Feira from 'pages/Feira';
import Login from 'pages/Login';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { UsuarioProvider } from 'common/context/Usuario';

const Router = () => {
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <UsuarioProvider>
            <Login/>
          </UsuarioProvider>
        </Route>
        <Route path="/feira" component={Feira}/>
        <Route path="/carrinho" component={Carrinho}/>
      </Switch>
    </BrowserRouter>
  )
}

export default Router;