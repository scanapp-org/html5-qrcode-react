import './App.css';

import React from 'react';
import Html5QrcodePlugin from './Html5QrcodePlugin.jsx'
import ResultContainerPlugin from './ResultContainerPlugin.jsx'
import Result2 from './Result2.jsx'
import Lookup from './components/Lookup'

export default function App(props) {


  const [decodedResults, setDecodedResults] = React.useState()
  

    // This binding is necessary to make `this` work in the callback.
   //  this.onNewScanResult = this.onNewScanResult.bind(this);
  

  
    return (
      <div className="App">
        <section className="App-section">
          <div className="App-section-title"> Html5-qrcode React demo</div>
          <br />
          <br />
          <br />
          <Html5QrcodePlugin 
            fps={10}
            qrbox={250}
            disableFlip={false}
            qrCodeSuccessCallback={onNewScanResult}/>
          <ResultContainerPlugin results={decodedResults} />
          
          <Lookup results={decodedResults} />
          {console.log(decodedResults)}
        </section>
      </div>
    );
  

  function onNewScanResult(decodedText, decodedResult)  {
    console.log(
      "App [result]", decodedResult);

      console.log("State :" + decodedResults)

    // let decodedResults = this.state.decodedResults;
    // decodedResults.push(decodedResult);

    setDecodedResults( decodedResult)
    
  }
}
