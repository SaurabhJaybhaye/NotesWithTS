// Importing necessary dependencies and hooks from the app
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import Notes from "./Notes";
import { deleteNote, selectNotes } from "./noteSlice";

// Defining the Props interface (currently empty)
interface Props {}

const NotesList = (props: Props) => {
  // Using the selectNotes selector to get all notes from the Redux store
  const allNotes = useAppSelector(selectNotes);
  const notes = allNotes.notes;
  const dispatch = useAppDispatch();

  // Function to handle note deletion
  const handleDelete = (noteId: string) => {
    dispatch(deleteNote(noteId));
  };

  /**
   *  Function to render individual notes
   * @returns JSX Note
   */
  const renderNotes = (): JSX.Element[] => {
    return notes.map((note) => (
      <Notes key={note.id} note={note} handleDelete={handleDelete} />
    ));
  };

  // Component JSX
  return (
    <>
      <div className="mt-3 mb-3">
        <b>NotesList</b>
      </div>

      {/* Container for the list of notes with a scrollbar */}
      <div className="overflow-auto" style={{ maxHeight: "500px" }}>
        {renderNotes()}
      </div>
    </>
  );
};

export default NotesList;
