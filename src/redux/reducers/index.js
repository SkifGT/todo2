import reduceReducers from 'reduce-reducers';

import  TodosReducer  from './Todos';
import LocalStorageReducer from './LocalStorage';
import  InitialState  from './InitialState';

const AppReducer = reduceReducers( InitialState, TodosReducer, LocalStorageReducer );

export default AppReducer;