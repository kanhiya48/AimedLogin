import { useEffect, useState } from 'react';
import logo from './logo.svg';
import { Right } from './right';
import { Wrapper,GridContainer, Image } from './sty';
// import './App.css';


function App() {

  
const [showGrids, setShowGrids] = useState(false);
  useEffect(() => {
    // Trigger the animation after a delay (you can adjust the delay to your preference)
    setTimeout(() => {
      setShowGrids(true);
    }, 500);
  }, []);

  return (
    <Wrapper show={showGrids} >
      <GridContainer>
   <div className='imgcss'>
    
    <Image src='undraw_authentication_re_svpt1.png' alt='noimg'></Image>
    
   </div>
   <div className='rightcssouter'>
   <Right></Right>
   </div>
   </GridContainer>
    </Wrapper>
  );
}

export default App;
