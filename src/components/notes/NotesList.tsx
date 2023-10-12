import { useAppDispatch, useAppSelector } from "../../app/hooks";
import Notes from "./Notes";
import { deleteNote, selectNotes } from "./noteSlice";

interface Props {}
const NotesList = (props: Props) => {
  const allNotes = useAppSelector(selectNotes);
  const notes = allNotes.notes;
  const dispatch = useAppDispatch();

  const handleDelete = (noteId: string) => {
    dispatch(deleteNote(noteId));
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
