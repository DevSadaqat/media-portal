import { Navigate, Route, Routes } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { NotFound, Playlists, PlaylistVideos, Videos } from './routes';
import Layout from './components/layout';
import VideoItem from './components/video-item';
import PlaylistItem from './components/playlist-item';

export default function App() {

const [videoData, setVideoData] = useState([]);
const [playListData, setPlayListData] = useState([]);

//request to fetch the data related to videos 
useEffect(() => {
  fetch('./videos.json').then(response => {
    return response.json();
  }).then(data => {
    // Work with JSON data here
    setVideoData(data);
    console.log(videoData);
  }).catch(err => {
    // Do something for an error here
    console.log("Error Reading data " + err);
  });
},[]);

//request to fetch the data related to playlists 
useEffect(() => {
  fetch('./playlists.json').then(response => {
    return response.json();
  }).then(data => {
    // Work with JSON data here
    setPlayListData(data);
    console.log(playListData);
  }).catch(err => {
    // Do something for an error here
    console.log("Error Reading data " + err);
  });
}, []);


  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='' element={<Navigate to='/playlists' replace />} />
        <Route path='playlists'>
          <Route index element={<PlaylistItem playLists = {playListData} />} />
          <Route path=':id' element={<PlaylistVideos />} />
        </Route>
        <Route path='videos' element={<VideoItem videos = {videoData} />}/>
        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  );
}