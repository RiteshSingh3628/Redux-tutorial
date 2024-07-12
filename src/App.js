import logo from './logo.svg';
import './App.css';
import User from './components/User';
import HomeContainer from './Container/HomeContainer'
import Header from './components/Header';

function App() {
  return (
    <div>
      <Header/>
      {/* <User data ={{name:"anil",age:"56",address:"sambalpur"}}/> */}
      <HomeContainer/>
    </div>
  );
}

export default App;
