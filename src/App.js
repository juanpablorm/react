import './App.css';
import GoogleMap from './components/GoogleMap';
import {Helmet} from "react-helmet";

function App() {
  return (
    <div className="App">
      <h1>Google Maps App</h1>
      <h2>Juan Pablo</h2>
      <GoogleMap />
      <Helmet>
      <script defer data-key="c599bcfd-c25f-4af9-b7de-6588459fcf77" src="https://widget.tochat.be/bundle.js"></script>
       </Helmet>
    </div>
  );
}

export default App;
