import React from 'react';
import { Redirect } from 'react-router-dom';
import { createUser } from '../services/userAPI';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      button: true,
      nome: '',
      redirect: false,
      inputName: '',
    };
  }

  RequirimentApi=(event) => {
    event.preventDefault();
    const { inputName } = this.state;
    createUser({ name: inputName });
  }

  change = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    }, this.ButtonHabilit);
  };

  ButtonHabilit = () => {
    const {
      nome,
    } = this.state;
    const valueButton = 3;

    if (nome.length >= valueButton) {
      this.setState({ button: false });
    } else {
      this.setState({ button: true });
    }
  }

  CallRedirect = () => {
    this.setState({ redirect: true });
  }

  render() {
    const {
      redirect,
      button,

    } = this.state;
    return (
      <div data-testid="page-login">
        <form action="submit">
          <input
            type="text"
            data-testid="login-name-input"
            name="nome"
            onChange={ this.change }
          />

          <button
            type="button"
            data-testid="login-submit-button"
            name="button"
            id="button"
            disabled={ button }
            onClick={ this.CallRedirect }
          >
            Entrar
          </button>
          {redirect && <Redirect to="/search" /> }
        </form>
      </div>
    );
  }
}
export default Login;
