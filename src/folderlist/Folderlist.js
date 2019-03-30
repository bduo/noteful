import React, {Component} from 'react';
import './Folderlist.css';;

class Folderlist extends Component {
    render() {
        return (
            <nav className="Folderlist">
                <ul>
                    {this.props.folders.map(folder =>
                        <li 
                        className="folder-item" 
                        key={folder.id}
                        >
                            {folder.name}
                        </li>
                    )}
                    <button className="add-folder-button">Add Folder</button>     
                </ul>
            </nav>
        )
    }
}

export default Folderlist