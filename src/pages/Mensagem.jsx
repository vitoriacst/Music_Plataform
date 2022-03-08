// import React from 'react';
// import { Link } from 'react-router-dom';
// import searchAlbumsAPI from '../services/searchAlbumsAPI';

// class Mensagem extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       procura: '',
//       load: false,
//       artistas: '',
//       album: [],
//       found: false,
//     };
//   }

//   ApiRequired = async () => {
//     const { procura } = this.setState;
//     const procurandoArtista = procura;
//     this.setState({
//       load: true,
//       procura: '',
//       found: procurandoArtista,
//     });
//     const GuardaAlbuns = await searchAlbumsAPI(procurandoArtista);
//     this.setState({
//       load: false,
//       album: GuardaAlbuns,
//       found: true,

//     });
//   }

//   render() {
//     const {
//       load,
//       procura,
//       artistas,
//       album,
//       found,
//     } = this.state;
//     return (
//       <div>
//         {album.length > 0 && found ? <p>Nenhum álbum foi encontrado</p>
//           : album.map((i) => (

//             <Link
//               key={ album.collectionId }
//               data-testid={ `link-to-album-${i.collectionId}` }
//               to={ `/i/${i.collectionId}` }
//             >
//               <div key={ album.collectionId }>
//                 <img
//                   src={ i.artworkUrl100 }
//                   alt={ `Capa do i ${i.collectionName}` }
//                 />
//                 <p>{ i.collectionName }</p>
//                 <p>{ i.artistName }</p>
//               </div>
//             </Link>
//           ))}
//       </div>
//     );
//   }
// }
// export default Mensagem;
