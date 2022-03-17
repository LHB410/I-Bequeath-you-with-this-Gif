import '../assets/stylesheets/application.scss';

import ReactDOM from 'react-dom';
import React from 'react'; // importing jsx

import App from './components/App';

const root = document.getElementById('root');
if (root) {
  ReactDOM.render(<App />, root);
}

// Functioncal component
// const Hello = ({ name, flag }) => {
//   // const { name, flag } = props;
//   return (
//     <div>
//       <h1>Hello {name}! {flag}</h1>
//     </div>
//   );
// };

// rsc gives you component above

// eslint-disable-next-line react/prefer-stateless-function
// class Hello extends React.Component {
//   render() {
//     const { name, flag } = this.props;
//     return (
//       <div>
//         <h1>Hello {name}! {flag}</h1>
//       </div>
//     );
//   }
// }
