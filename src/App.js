import React, { Component } from 'react';
import Notelist from './notelist/Notelist';
import Folderlist from './folderlist/Folderlist';
import STORE from './STORE';
import './App.css';

class App extends Component {
  state = {
    folders: STORE.folders,
    notes: STORE.notes,
    selectedFolder: null
  }

  render() {
    return (
      <div className="App">
        <h1>Noteful</h1>
        <div className="note-folder-container">
          <Notelist notes={STORE.notes} />
          <Folderlist 
          folders={STORE.folders}
          />
        </div>
      </div>
    );
  }
}

export default App;
