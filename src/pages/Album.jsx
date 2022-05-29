import React from 'react';
import PropTypes from 'prop-types';
import MusicCard from './MusicCard';
import Header from './Header';
import getMusics from '../services/musicsAPI';
import '../style/Album.css';

class Album extends React.Component {
  constructor() {
    super();
    this.state = {
      GuardaMusicas: [],
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
       NomeAlbum: collectionName,
       NomeArtista: artistName,
     });
   }

   render() {
     const {
       NomeAlbum,
       NomeArtista,
       GuardaMusicas,
     } = this.state;

     return (
       <div data-testid="page-album">
         <Header />
         <div className="albuns">
           <p data-testid="artist-name">{`O Artista é: ${NomeArtista}`}</p>
           <p
             className="text-album"
             data-testid="album-name"
           >
             {`O Album é: ${NomeAlbum}`}

           </p>
           <MusicCard
             className="songs"
             songs={ GuardaMusicas }
           />
         </div>
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
