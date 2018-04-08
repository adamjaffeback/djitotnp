import React, { Component, Fragment } from 'react';
import Loadable from 'react-loadable';
import Papa from 'papaparse';
import LazyLoading from '../../common/components/LazyLoading/LazyLoading'

require('../../../style/index.css');

const UploadFile = Loadable({
  loader: () => import('../../common/components/UploadButton/UploadButton'),
  loading: LazyLoading,
})

class HomeView extends Component {
  download = (csvText) => {
    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(csvText));
    element.setAttribute('download', 'Track 1.txf');

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
  }

  handleFileProcess = (ev) => {
    const file = ev.target.files[0];
    Papa.parse(file, {
      delimiter: ' ',
      dynamicTyping: true,
      complete: (results) => {
        results.data.shift(); // get rid of headers
        const clean = results.data.map((row) => {
          row.shift();
          row.shift();
          row.shift();

          const noSpaces = row.filter((value) => {
            return value !== '';
          });

          noSpaces.pop();

          return noSpaces;
        }).filter((row) => {
          return row.length > 0;
        }).map((row) => {
          row.push("\"Flight 1\"");
          row.push("ff");
          row.push(0);

          return row;
        });

        const csv = Papa.unparse(clean);
        const correctQuotes = csv.replace(/\"\"\"/g, '\"');

        this.download(correctQuotes);
      },
    });
  }

  render() {
    return (
      <Fragment>
        <h1>Convert DJI .csv to TNP .txf</h1>
        <UploadFile processFile={this.handleFileProcess} />

        <h3>Once you've downloaded the tracks from the iPad:</h3>
        <ol>
          <li><b>Click</b> the <b><i>Choose Files</i></b> button above
            to select one or more .csv files.
          </li>
          <li>The tracks will automatically process to
            Terrain Navigator Pro's .txf format, then download.
          </li>
          <li><b>Find</b> the new files in your downloads. <b>Send</b> the files
            to the Search Manager and place copies in the X drive.
          </li>
        </ol>
      </Fragment>
    )
  }
}

export default HomeView;
