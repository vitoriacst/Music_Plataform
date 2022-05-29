import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Load from './Load';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import '../style/Search.css';

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      Button: true,
      load: false,
      album: [],
      foundAlbum: false,
      name: '',
      Salva: '',

    };
  }

  change = (event) => {
    const valueCheck = 2;
    this.setState(() => ({
      Button: event.target.value.length < valueCheck,
      name: event.target.value,
    }));
  }

  Button= async (event) => {
    event.preventDefault();
    const { name } = this.state;
    console.log(name);
    this.setState({
      load: true,
      Salva: name,
    });
    const GuardaAlbuns = await searchAlbumsAPI(name);
    this.setState({
      load: false,
      album: GuardaAlbuns,
      foundAlbum: true,
      name: '',
    });
  };

  render() {
    const {
      Button,
      load,
      album,
      foundAlbum,
      name,
      Salva,
    } = this.state;

    return (
      <div data-testid="page-search" className="main-search">
        { load ? <Load /> : (
          <>
            <Header />
            <form action="submit" className="login-search">
              <input
                className="search-input"
                type="text"
                name="name"
                id="Artista"
                data-testid="search-artist-input"
                placeholder="Explore"
                onChange={ this.change }
                value={ name }
              />
              <button
                className="button-input"
                data-testid="search-artist-button"
                type="submit"
                name="Button"
                disabled={ Button }
                onClick={ this.Button }
                value={ name }
              >
                Pesquisar
              </button>
            </form>
            {
              foundAlbum ? (<h1 className="text-search">
                {
                  `Resultado de álbuns de: ${Salva}`
                }

              </h1>) : null
            }
            {album.length <= 0 && !name ? <p>Nenhum álbum foi encontrado</p>
              : album.map((i) => (

                <Link
                  className="music-albuns"
                  key={
                    album.collectionId
                  }
                  data-testid={ `link-to-album-${i.collectionId}` }
                  to={ `/album/${i.collectionId}` }
                >
                  <div key={ album.collectionId }>
                    {' '}
                    <img
                      className="image-album"
                      src={ i.artworkUrl100 }
                      alt={ `Capa do i ${i.collectionName}` }
                    />
                    <p>{ i.collectionName }</p>
                    <p>{ i.artistName }</p>
                  </div>
                </Link>
              ))}
          </>
        )}
      </div>

    );
  }
}
export default Search;
