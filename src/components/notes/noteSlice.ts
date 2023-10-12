import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { Note } from '../../models/note.model';

export interface NoteState {
  notes: Note[];
}

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

export const noteSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    addNote: (state, action: PayloadAction<Note>) => {
      state.notes.push(action.payload);
    },
    updateNote: (state, action: PayloadAction<Note>) => {
      const updatedNote = action.payload;
      state.notes = state.notes.map(note =>
        note.id === updatedNote.id ? updatedNote : note
      );
    },
    deleteNote: (state, action: PayloadAction<string>) => {
      const noteIdToDelete = action.payload;
      state.notes = state.notes.filter(note => note.id !== noteIdToDelete);
    },
  },
});

export const selectNotes = (state: RootState) => state.notes;

export const { addNote, updateNote, deleteNote } = noteSlice.actions;

export default noteSlice.reducer;
