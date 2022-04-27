import './App.css';

import StyledTitle from './StyledComponents/StyledTitle';
import AdaptingBasedOnProps from './StyledComponents/AdaptingBasedOnProps';
import ExtendingStyle from './StyledComponents/ExtendingStyle';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <StyledTitle></StyledTitle>
        <AdaptingBasedOnProps></AdaptingBasedOnProps>
        <ExtendingStyle></ExtendingStyle>
      </header>
    </div>
  );
}

export default App;
