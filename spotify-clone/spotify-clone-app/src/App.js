import Login from './Login'
import './App.css';
import { useEffect,useState } from 'react';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js'
import Player from './Player';
import { useDataLayerValue } from './DataLayer';

const spotify = new SpotifyWebApi();

function App() {

 

  const [{user,token}, dispatch ] = useDataLayerValue();
   
  useEffect(() => {
          const hash = getTokenFromUrl(); //getting token from the url and storing in hash variable
          window.location.hash = ""; //setting url hash to empty string to make it invisible from the end user view
          const _token = hash.access_token; //hash is an object so pulling access_token from the hash object
          if(_token) {
              dispatch({
                type : "SET_TOKEN",
                token : _token
              })
              spotify.setAccessToken(_token)
              spotify.getMe().then(user => {
              dispatch({
                type : "SET_USER",
                user : user  
              })
              })

              spotify.getUserPlaylists().then((playlists) => {
                dispatch({
                  action : "SET_PLAYLISTS",
                  playlists : playlists
                })
              })
          }
         
  },[])

  

  return (
    <div className="app">
      {
        token ? (<Player spotify={spotify}/>) : (<Login />)
      }
     
    </div>
  );
}

export default App;
