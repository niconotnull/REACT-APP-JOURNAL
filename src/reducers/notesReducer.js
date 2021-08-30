import { types } from '../types/types';

const initialState = {
  notes: [],
  active: null,
};

export const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.notasActive:
      return {
        ...state,
        active: {
          ...action.payload,
        },
      };

    case types.notasAddNew:
      return {
        ...state,
        notes: [action.payload, ...state.notes],
      };
    case types.notasLoad:
      return {
        ...state,
        notes: [...action.payload],
      };
    case types.notasUpadated:
      return {
        ...state,
        notes: state.notes.map((note) =>
          note.id === action.payload.id ? action.payload.note : note
        ),
      };
    case types.notasDelete:
      console.log(action.payload);
      return {
        ...state,
        active: null,
        notes: state.notes.filter((note) => note.id !== action.payload),
      };

    case types.notasLogoutCleaning:
      return {
        ...state,
        active: null,
        notes: [],
      };

    default:
      return state;
  }
};
