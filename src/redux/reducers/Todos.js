import { v1 } from 'uuid';

import { ADD_TODO, 
        ITEM_COMPLITED, 
        DELETE_TODO, 
        CANCEL_EDIT_ITEM, 
        EDIT_ITEM, 
        SELECT_EDIT_ITEM } from '../actions/actionTypes';

const TodosReducer = (state, action) => {
  switch (action.type) {
    case ADD_TODO: {
      const id = v1();
      const todoItem = {
        value: action.payload.value,
        id,
        completed: false,
      };
      return { ...state, items: [...state.items, todoItem] };
    };

    case ITEM_COMPLITED: {
      const items = state.items.map((item) =>  item.id===action.payload.modifiedItem.item.id ?
        ({...item, completed: !item.completed}
        ) : (
          item)
      );
      return { ...state, items };
    };

    case DELETE_TODO: {
      const items = state.items.filter(({ id }) => id !== action.payload.id);
      return { ...state, items };
    };

    case SELECT_EDIT_ITEM: {
      const item = state.items.find(({ id }) => id === action.payload.id);
      return { ...state, editingItem: item };
    }

    case EDIT_ITEM: {
      console.log('state', state);
      console.log('actionPayload', action.payload);
      const items = state.items.map(item => {
        if (item.id === action.payload.modifiedItem.id) {
          item.value = action.payload.modifiedItem.value;
        }
        return item;
      });
      return { ...state, items, editingItem: {} };
    };

    case CANCEL_EDIT_ITEM: {
      const newState = state.items.length ? {...state, editingItem: {}} : {...state}
      return newState;
    };

    default: return state;
      
  }
}
export default TodosReducer;