import React from 'react';

class App2 extends React.Component {
   render() {
      return (
         <div>
            <Header/>
            <Content/>
         </div>
      );
   }
}
class Header extends React.Component {
   render() {
      return (
         <div>
            <h1>Header</h1>
         </div>
      );
   }
}
class Content extends React.Component {
   render() {
      return (
         <div>
            <h2>APP 2 Content</h2>
            <p>APP 2 - The content text!!!</p>
         </div>
      );
   }
}
export default App2;