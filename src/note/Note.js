import React, {Component} from 'react';
import './Note.css';

class Note extends Component {
    render() {
        console.log('this.props', this.props);
        return (
        <div className="Note">
           <div className="left"> 
            <h2>{this.props.note.name}</h2>
            <p>{this.props.note.modified}</p>
           </div>
           <div className="right">
            <button className="delete-note-button">Delete Note</button>
           </div>
        </div>
        )
    }
}

export default Note