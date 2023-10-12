import React from "react";
import { Note } from "../../models/note.model";
import Notes from "./Notes";

interface Props {
  notes: Note[];
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
}

const NotesList = ({ notes, setNotes }: Props) => {
  const handleDelete = (id: string) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const renderNotes = (): JSX.Element[] => {
    return notes.map((note) => (
      <Notes key={note.id} note={note} handleDelete={handleDelete} />
    ));
  };

  return (
    <>
      <div className="mt-3">NotesList</div>
      <div>{renderNotes()}</div>
    </>
  );
};

export default NotesList;
