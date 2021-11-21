import React from 'react';

class HowToUse extends React.Component {
    render() {
        return (<div className='App-info-section'>
        <h3>How to use?</h3>
        <div>
          Check out&nbsp;
          <a href="https://github.com/scanapp-org/html5-qrcode-react">
          scanapp-org/html5-qrcode-react
          </a>&nbsp;
          on Github for reference.
          <br />
          <br />
          Built using&nbsp;
          <a href="https://github.com/mebjas/html5-qrcode">
          mebjas/html5-qrcode
          </a>.
          <br />
          <br />
          Free QR code scanner and barcode scanner at <a href="https://scanapp.org">scanapp.org</a>.
        </div>
      </div>);
    }
}

export default HowToUse;