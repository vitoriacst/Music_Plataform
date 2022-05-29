import React from 'react';
import { Redirect } from 'react-router-dom';
import { createUser } from '../services/userAPI';
import Load from './Load';
import '../style/InitialLogin.css';

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
      <>
        <div data-testid="page-login" className="main-login">
          {
            load ? <Load /> : (
              <form action="submit" className="login-input">
                <svg width="78" height="69" viewBox="0 0 78 69" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M34.4467 53.912L48.1049 37.8019M7.3125 20.0819V24.9148V20.0819ZM17.875 14.4426V30.5526V14.4426ZM23.1562 8.80469V36.1919V8.80469ZM28.4375
                   14.4426V30.5526V14.4426ZM33.7188 16.859V28.1362V16.859ZM39 12.0261V32.9705V12.0261ZM12.5938 16.859V28.1362V16.859ZM44.2812 
                  16.859V28.1362V16.859ZM49.5625 14.4426V30.5526V14.4426ZM54.8438 
                  8.80469V36.1919V8.80469ZM60.125 14.4426V30.5526V14.4426ZM65.4062 16.859V28.1362V16.859ZM70.6875 20.0819V24.9148V20.0819ZM29.8951 37.8019L43.5533 53.912L29.8951 37.8019Z" stroke="#F8F8F8" strokeLinecap="round"
                   strokeLinejoin="round" />
                  <path d="M31.1691 60.1967C33.3823 60.1967 35.1764 58.6096 35.1764 56.6519C35.1764 54.6941 33.3823 53.107 31.1691 53.107C28.956 53.107 27.1619 54.6941 27.1619 56.6519C27.1619 58.6096 28.956 60.1967 31.1691 60.1967Z" stroke="#F8F8F8" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M46.8309 60.1967C49.044 60.1967 50.8381 58.6096 50.8381 56.6519C50.8381 54.6941 49.044 53.107 46.8309 53.107C44.6177 53.107 42.8236 54.6941 42.8236 56.6519C42.8236 58.6096 44.6177 60.1967 46.8309 60.1967Z" stroke="#F8F8F8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <h1 className="Text-input">TrybeTunes</h1>
                <input
                  className="name-input"
                  placeholder="User"
                  type="text"
                  data-testid="login-name-input"
                  name="name"
                  onChange={ this.change }
                />
                <button
                  className="button-input"
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
        <svg className="Waves" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            className="waveOne"
            fill="#43818A"
            fillOpacity="1"
            d="M0,96L48,101.3C96,107,192,117,288,133.3C384,149,480,171,576,165.3C672,160,
            768,128,864,117.3C960,107,1056,117,1152,138.7C1248,160,1344,192,1392,208L1440
            ,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,
            320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,
            320Z"
          />
          <path
            className="waveTwo"
            fill="#57A7B3"
            fillOpacity="1"
            d="M0,256L48,229.3C96,203,192,149,288,144C384,139,480,181,576,213.3C672,
            245,768,267,864,240C960,213,1056,139,1152,133.3C1248,128,1344,192,1392,
            224L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,
            864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,
            320L0,320Z"
          />
          <path
            className="waveThree"
            fill="#66C3D0"
            fillOpacity="1"
            d="M0,320L48
            ,282.7C96,
            245,192,171,
            288,122.7C384,
            75,480,53,576,
            85.3C672,117,768,
            203,864,202.7C960,
            203,1056,117,1152,96C1248,
            75,1344,117,1392,138.7L1440,
            160L1440,320L1392,320C1344,320
            ,1248,320,1152,320C1056,320,960,320,864,320C768,
            320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </>
    );
  }
}
export default Login;
