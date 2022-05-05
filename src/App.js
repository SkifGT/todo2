import React from 'react';

import Content from './components/Content';
import Footer from './components/Footer';
import Header from './components/Header';

import LoadStateLocalStorage from "./redux/actions/LoadStateLocalStorage"
import SaveStateLocalStorage from "./redux/actions/SaveStateLocalStorage"

import { useDispatch, useSelector } from 'react-redux';


function App() {

  const dispatch = useDispatch();

  const items = useSelector((store)=>store.items);

  const store = useSelector((store)=>store);

  const [isLocalStorageLoaded, setIsLocalStorageLoaded] = React.useState(false);

  const prevItemLength = React.useRef(null);

  React.useEffect(()=>{
    dispatch(LoadStateLocalStorage());
    setIsLocalStorageLoaded(true)
  }, []);

  React.useEffect(()=>{
    if (isLocalStorageLoaded){
      if (!prevItemLength.current){
        prevItemLength.current = -1;
      }
      if (items.length !== prevItemLength.current) {
        dispatch(SaveStateLocalStorage(items));
        if (items.length === 0) {
          prevItemLength.current = -1;
        } else {
          prevItemLength.current = items.length;
        }
      }
    }
  })

  return (
    <div className="app__container">
      <Header/>
      <Content store={store}/>
      <Footer/>
    </div>
  );
}

export default App;
