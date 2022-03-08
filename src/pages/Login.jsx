import React from 'react';
import { Redirect } from 'react-router-dom';
import { createUser } from '../services/userAPI';
import Load from './Load';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      button: true,
      name: '',
      load: false,
      redirect: false,
    };
  }

 RequirimentApi=(event) => {
   event.preventDefault();
   const { name } = this.state;
   this.setState({ load: true },
     async () => {
       await createUser({ name });
       this.setState({
         load: false,
         redirect: true,
       });
     });
 }

  change = (event) => {
    const valueButton = 3;
    this.setState(() => ({
      name: event.target.value,
      button: event.target.value.length < valueButton,
    }));
  }

  render() {
    const {
      redirect,
      button,
      load,

    } = this.state;
    return (
      <div data-testid="page-login">
        {
          load ? <Load /> : (
            <form action="submit">
              <input
                type="text"
                data-testid="login-name-input"
                name="name"
                onChange={ this.change }
              />
              <button
                type="button"
                data-testid="login-submit-button"
                name="button"
                id="button"
                disabled={ button }
                onClick={ this.RequirimentApi }
              >
                Entrar
              </button>
              {redirect && <Redirect to="/search" /> }
            </form>
          )
        }
      </div>

    );
  }
}
export default Login;
