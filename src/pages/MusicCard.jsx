import React from 'react';
import PropTypes from 'prop-types';
 import favoriteSongAPI from '../services/favoriteSongsAPI';
 import Load from './Load';

class MusicCard extends React.Component {
  constructor() {
    super();
    this.state = {
      load: false,
      album: [],
      checked:false,
    };
  }

  // AddSong = async(({{id , checked }})) => {
  //   const { favoriteSong } = this.state;
  //   this.setState({
  //     load: true,
  //     checked: false,
  //   });
  //   const GuardaMusicas = await favoriteSong(favoriteSong);
  //   // const list = favoriteSong.find(()=>({

  //   // }))
  //   this.setState({
  //     load: false,
  //     album: GuardaMusicas,
  //   });
  // };

  render() {
    const {
      trackName,
      previewUrl,
      // trackId,
    } = this.props;

    return (
      <div>
        <p>
          {
            trackName
          }

        </p>
        <audio data-testid="audio-component" src={ previewUrl } controls>
          <track kind="captions" />
          O seu navegador não suporta o elemento
          {' '}
          <code>audio</code>
          .
        </audio>
        {/* <label htmlFor="favorite" data-testid={ `checkbox-music-${trackId}` }>
          <input type="checkbox" name="" id="favorite" />
        </label> */}
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
