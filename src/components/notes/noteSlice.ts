import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { Note } from '../../models/note.model';

/**
 * Defining the shape of the note state
 */
export interface NoteState {
  notes: Note[];
}

/**
 * Initializing the state with a default note
 */
const initialState: NoteState = {
  notes: [
    {
      id: new Date().toString(),
      title: "Meetings",
      text: "Testing",
      color: "#F7F7F8",
      date: new Date().toString(),
    }
  ],
};

/**
 * Creating a slice of the Redux store for notes
 */
export const noteSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    /**
     * Reducer to add a new note to the state
     * @param state :Initial state
     * @param action :Payload
     */
    addNote: (state, action: PayloadAction<Note>) => {
      state.notes.push(action.payload);
    },
    /**
     * Reducer to update an existing note in the state
     * @param state :Initial state
     * @param action :Payload
     */
    updateNote: (state, action: PayloadAction<Note>) => {
      const updatedNote = action.payload;
      state.notes = state.notes.map(note =>
        note.id === updatedNote.id ? updatedNote : note
      );
    },
    /**
     * Reducer to delete a note from the state
     * @param state  :Initial state
     * @param action :Payload
     */
    deleteNote: (state, action: PayloadAction<string>) => {
      const noteIdToDelete = action.payload;
      state.notes = state.notes.filter(note => note.id !== noteIdToDelete);
    },
  },
});

/**
 * Selector function to extract the notes from the root state
 * @param state :Initial state
 * @returns state values
 */
export const selectNotes = (state: RootState) => state.notes;

/**
 * Exporting the action creators for adding, updating, and deleting notes
 */
export const { addNote, updateNote, deleteNote } = noteSlice.actions;

export default noteSlice.reducer;
