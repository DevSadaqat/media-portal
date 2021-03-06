import { Col, Row } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

// interface PlaylistItemProps {
//   playlist: Playlist;
// }

export default function PlaylistItem(props) {
  // const { playlist } = props;

  // const videoCount = props.playLists.map((playlist) => playlist.videoIds.length === 1 ? '1 video' : `${playlist.videoIds.length} videos`);

  // iterate over the playlist and display each playlist as an individual item 
  const playLists = props.playLists.map((playlist) => 
   
   <Row key={playlist.id} className='border rounded p-2 mb-2'>
      <Col xs='12' md='3'>
        <h2 className='h5'>{playlist.name}</h2>
        {/* <p className='mb-0'>{videoCount}</p> */}
        <Button onClick={() => props.removePlayList(playlist.id)}variant="danger" size="sm">Delete</Button> 
      </Col>
      <Col xs='12' md='9'>
        <p className='mb-0'>{playlist.description}</p>
      </Col>
    </Row>
  );

  return (
    <div>
      {playLists}
      <Link to='/playlists/newPlayList'><Button variant="primary">Add new PlayList</Button></Link> 
    </div>
  )
}