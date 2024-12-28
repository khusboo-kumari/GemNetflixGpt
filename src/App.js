import {Provider} from 'react-redux' ;

import Body from './components/Body'; 

import appStore from './utils/appStore';

function App() {
  return (
    // <Body/> 
    //  Now add the reducer here using Provider 
    <Provider store={appStore}>
      <Body/> 
    </Provider>
    
  );
}

export default App ; 
