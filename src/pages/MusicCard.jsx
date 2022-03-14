import React from 'react';
import PropTypes from 'prop-types';
import { addSong, getFavoriteSongs } from '../services/favoriteSongsAPI';
import Load from './Load';

class MusicCard extends React.Component {
  constructor() {
    super();
    this.state = {
      load: false,
      list: [],
    };
  }

  componentDidMount() {
    this.takeFavorites();
  }

  myFavoritesSongs = async (event) => {
    const { songs } = this.props;
    const favorites = songs.find((index) => index.trackId === +event.target.value);
    this.setState((beforeState) => ({
      load: true,
      list: [...beforeState.list, favorites.trackId],
      // add um novo id ao list , mas continuando o estado anterior
      // trackId e o id de cada musica
    }));
    await addSong(favorites);
    this.setState({
      load: false,
    });
  }

 takeFavorites = async () => {
   const listFavorites = await getFavoriteSongs();
   // chamando a funcao da api req 9
   const takeById = listFavorites.map((idMusic) => idMusic.trackId);
   this.setState({
     list: takeById,
     // takebyId sao as mscs favoritas
   });
 }

 render() {
   const { songs } = this.props;
   const { load, list } = this.state;
   return (
     <div>
       { load ? <Load />
         : songs.map((index) => (
           <div key={ index.trackId }>
             <p>
               {index.trackName}
             </p>
             <audio data-testid="audio-component" src={ index.previewUrl } controls>
               <track kind="captions" />
               O seu navegador não suporta o elemento
               <code>audio</code>
               .
             </audio>
             <label htmlFor="MySongs">
               Favorita
               <input
                 data-testid={ `checkbox-music-${index.trackId}` }
                 type="checkbox"
                 name="favoriteSongs"
                 onChange={ this.myFavoritesSongs }
                 id="MySongs"
                 value={ index.trackId }
                 checked={ list.some((haveId) => haveId === index.trackId) }
                 // verifica se a musica tem o id
               />
             </label>
           </div>
         ))}
     </div>
   );
 }
}

MusicCard.propTypes = {
  trackName: PropTypes.string,
  previewUrl: PropTypes.string,
  trackId: PropTypes.number,
}.isRequired;

export default MusicCard;
