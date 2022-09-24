// import Logo from './assets/new_kc_logo.svg';
import './App.scss';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

function App() {
  return (
    <div className="App">
      <header className="app-header">
        Kitty City
      </header>
      <div className="box">
        <nav className="menu">
          <a
            className="adopt-a-cat"
          >
            Adopt a Cat
          </a>
          <a
            className="hall-of-adoptees"
          >
            Hall of Adoptees
          </a>
          <a
            className="admin"
          >
            Admin
          </a>
        </nav>
      </div>
    </div>
  )
}

export default App;
