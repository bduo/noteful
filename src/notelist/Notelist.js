import React, {Component} from 'react';
import Note from '.././note/Note';
import './Notelist.css';

class Notelist extends Component {
    render() {
        return (
            <main className="Notelist">
                {this.props.notes.map(note =>
                    <Note
                    key={note.id}
                    note={note} />
                )}
                <button className="add-note-button">Add Note</button>  
            </main>
        )
    }
}

export default Notelist;