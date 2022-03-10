import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import getMusics from '../services/musicsAPI';
import Load from './Load';
import MusicCard from './MusicCard';

class Album extends React.Component {
  constructor() {
    super();
    this.state = {
      GuardaMusicas: [],
      load: true,
      NomeArtista: '',
      NomeAlbum: '',
    };
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    this.takeAlbum(id);
  }

   takeAlbum = async (id) => {
     const musicas = await getMusics(id);
     const {
       artistName,
       collectionName,
     } = musicas[0];

     const songs = musicas.filter((_song, index) => index !== 0);

     this.setState({
       GuardaMusicas: songs,
       load: false,
       NomeAlbum: collectionName,
       NomeArtista: artistName,
     });
   }

   render() {
     const {
       load,
       NomeAlbum,
       NomeArtista,
       GuardaMusicas,
     } = this.state;

     return (
       <div data-testid="page-album">
         <Header />
         { load ? <Load /> : (
           <div>
             <p data-testid="artist-name">{`O Artista e: ${NomeArtista}`}</p>
             <p data-testid="album-name">{`O Artista e: ${NomeAlbum}`}</p>
             {
               GuardaMusicas.map((index) => (
                 <MusicCard
                   key={ index.trackId }
                   trackName={ index.trackName }
                   previewUrl={ index.previewUrl }
                   trackId={ index.trackId }
                 />
               ))
             }
           </div>
         )}
       </div>
     );
   }
}

Album.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Album;
