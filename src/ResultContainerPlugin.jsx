import React from 'react';

function filterResults(results) {
    let filteredResults = [];
    for (var i = 0; i < results.length; ++i) {
        if (i === 0) {
            filteredResults.push(results[i]);
            continue;
        }

        if (results[i].decodedText !== results[i-1].decodedText) {
            filteredResults.push(results[i]);
        }
    }
    return filteredResults;
}

class ResultContainerTable extends React.Component {
    render() {
        var results = filterResults(this.props.data);
        return (
            <table className={'Qrcode-result-table'}>
                <thead>
                    <tr>
                        <td>#</td>
                        <td>Decoded Text</td>
                        <td>Format</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        results.map((result, i) => {
                            console.log(result);
                            return (<tr key={i}>
                                <td>{i}</td>
                                <td>{result.decodedText}</td>
                                <td>{result.result.format.formatName}</td>
                            </tr>);
                        })
                    }
                </tbody>
            </table>
        );
    }
}

class ResultContainerPlugin extends React.Component {
    render() { 
        let results = filterResults(this.props.results);
        return (<div className='Result-container'>
                <div className='Result-header'>Scanned results ({results.length})</div>
                <div className='Result-section'>
                    <ResultContainerTable data={this.props.results} />
                </div>
            </div>);
    }
}

export default ResultContainerPlugin;