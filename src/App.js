import './App.css';

import StyledTitle from './StyledComponents/StyledTitle';
import AdaptingBasedOnProps from './StyledComponents/AdaptingBasedOnProps';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <StyledTitle></StyledTitle>
        <AdaptingBasedOnProps></AdaptingBasedOnProps>
      </header>
    </div>
  );
}

export default App;
