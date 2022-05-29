import React from 'react';
import PropTypes from 'prop-types';
import { addSong, getFavoriteSongs } from '../services/favoriteSongsAPI';
import Load from './Load';
import '../style/cardMusic.css';

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
     <div className="main-card">
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
               <svg width="36" height="33" viewBox="0 0 36 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path
                   d="M11.7225 4.91563C10.2864
                  4.91399 8.87928
                  5.28586 7.66455
                   5.98803C6.44982 6.6902 5.47733 7.69386
                    4.86003 8.88245C4.24274 10.071
                     4.00596 11.3958
                      4.1772112.7028C4.34846 14.0098 4.9207 15.2455
                       5.82748 16.2663V16.2663L18 29.3631L30.0525
                       16.3969L30.1125 16.335L30.1725 16.2663C30.8307
                        15.5386 31.3205 14.6956 31.6119 13.7888C31.9033
                        12.8821
                       31.9903 11.9304 31.8675 10.9918C31.7448 10.0532
                        31.4148 9.1473 30.8978 8.32936C30.3808
                         7.51142 29.6876 6.79852 28.8603 6.2341C28.033
                          5.66967 27.0891 5.26554 26.0859 5.04632C25.0828 4.8271
                          24.0414 4.79738 23.0254 4.95897C22.0093 5.12056 21.0397
                           5.47008 20.1758 5.98624C19.3118 6.50239 18.5715
                           7.17438 18 7.96125C17.3056 7.02291 16.3711 6.25473
                           15.2781 5.72382C14.1851 5.19292 12.9669 4.91544
                           11.73 4.91563H11.7225Z"
                   stroke="black"
                   strokeLinecap="round"
                   strokeLinejoin="round"
                 />
               </svg>

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
