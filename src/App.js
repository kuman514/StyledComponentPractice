import './App.css';

import StyledTitle from './StyledComponents/StyledTitle';
import AdaptingBasedOnProps from './StyledComponents/AdaptingBasedOnProps';
import ExtendingStyle from './StyledComponents/ExtendingStyle';
import StylingAnyComponent from './StyledComponents/StylingAnyComponent';
import PassedProps from './StyledComponents/PassedProps';
import StyledCounter from './StyledComponents/StyledCounter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <StyledTitle></StyledTitle>
        <AdaptingBasedOnProps></AdaptingBasedOnProps>
        <ExtendingStyle></ExtendingStyle>
        <StylingAnyComponent></StylingAnyComponent>
        <PassedProps></PassedProps>
        <StyledCounter></StyledCounter>
      </header>
    </div>
  );
}

export default App;
