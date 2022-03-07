import React from 'react';
import PropTypes from 'prop-types';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      button: false,
      nome: '',
    };
  }

ButtonHabilit = () => {
  const {
    button,
    nome,
  } = this.state;
  const valueButton = 3;

  if (nome.length >= valueButton) {
    this.setState({ button: true });
  } else {
    this.setState({ button: false });
  }
}

render() {
  const {
    checkButton,
    inpName,
  } = this.state;
  return (
    <div data-testid="page-login">
      <form action="submit">
        <input
          type="text"
          data-testid="login-name-input"
          name="nome"
          value={ inpName }
        />

        <button
          type="button"
          data-testid="login-submit-button"
          name="button"
          value={ checkButton }
          disabled={ ButtonHabilit }
        >
          Entrar
        </button>

      </form>
    </div>
  );
}
}
Login.propTypes = {
  checkButton: propTypes.bool.isRequired,
  inpName: propTypes.string.isRequired,
};
export default Login;
