import React, { useContext, useEffect } from 'react';
import { NoteContext } from '../context/notes/NoteContext';
import NoteItem from './NoteItem';
import empty from '../images/empty.png';
import empty1 from '../images/empty1.png';
import empty3 from '../images/empty3.jpeg';
import { useNavigate } from "react-router-dom";
import { AlertContext } from '../context/AlertContext';

function Notes() {
    const { notes, getNotes } = useContext(NoteContext);
    const navigate = useNavigate();
    const { showAlert } = useContext(AlertContext);

    useEffect(() => {
        if (localStorage.getItem('token')) {
            getNotes();
        } else {
            navigate('/about');
            showAlert("You need to sign in first", "error");
        }
        // eslint-disable-next-line
    }, []);

    return (
        <div className="container mt-4 mb-1">
            <h1 className="display-6">Your Notes: </h1>
            {Array.isArray(notes) && notes.length > 0 ? (
                <div className="row ps-5">
                    {notes.map(note => 
                        <NoteItem key={note._id} note={note} />
                    )}
                </div>
            ) : (
                <div className="text-center mt-4">
                    <p><b>Create your first note :) !!!</b></p>
                    <img className="img-fluid mt-3" src={empty1} alt="empty" style={{ maxWidth: "80%", opacity: "1.0" }} />
                    <div className="w-100 mt-3">
                        <img className="img-fluid" src={empty} alt="empty" style={{ width: "80%", opacity: "1.0" }} />
                    </div>
                    <div className="w-100 mt-3">
                        <img className="img-fluid" src={empty3} alt="empty" style={{ width: "80%", opacity: "1.0" }} />
                    </div>
                </div>
            )}
        </div>
    );
}

export default Notes;

