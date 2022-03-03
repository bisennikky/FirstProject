import React from 'react';

function App() {
    let currDate = new Date(2022,3,1,6);
    currDate = currDate.getHours();
    let nikky = "";
    let cssforall = { };
  
    if(currDate >= 1 && currDate < 12){
      nikky = 'Good Morning Time To Wake Up.';
      cssforall.color = "green";
  
    }else if(currDate >= 12 && currDate < 19){
      nikky = 'Good Afternoon Time To Study.';
      cssforall.color = "red"
    }else{
      nikky  = 'Good Night Time To Sleep Now.';
      cssforall.color = "black";
    }
    return (
        <>
        <div>
        <h1>Hello Nikky  <span style = {cssforall}> {nikky} </span></h1>
        </div>
      </>
    );
}
export default App;