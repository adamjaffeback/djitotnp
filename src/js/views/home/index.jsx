import React, { Component, Fragment } from 'react';
import Loadable from 'react-loadable';
import { Link } from 'react-router-dom';
import Papa from 'papaparse';
import createGpx from 'gps-to-gpx';
import LazyLoading from '../../common/components/LazyLoading/LazyLoading'

require('../../../style/index.css');

const UploadFile = Loadable({
  loader: () => import('../../common/components/UploadButton/UploadButton'),
  loading: LazyLoading,
})

class HomeView extends Component {
  download = (gpxText, trackNumber) => {
    const element = document.createElement('a');
    element.setAttribute('href', `data:text/plain;charset=utf-8,${encodeURIComponent(gpxText)}`);
    element.setAttribute('download', `DroneTrack ${trackNumber.toString()}.gpx`);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
  }

  needsTrailingZero = (latLongNum) => {
    return latLongNum.toString().search(/\./) === -1;
  }

  addTrailingZero = (latLongNum) => {
    if (this.needsTrailingZero(latLongNum)) {
      return parseFloat(latLongNum).toFixed(1);
    }

    return latLongNum;
  }

  parse = (file, fileIndex) => {
    Papa.parse(file, {
      delimiter: ' ',
      dynamicTyping: true,
      complete: (results) => {
        results.data.shift(); // get rid of headers
        const waypoints = results.data.map((row) => {
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
          return {
            latitude: this.addTrailingZero(row[0]),
            longitude: this.addTrailingZero(row[1]),
          };
        });

        const gpx = createGpx(waypoints, {
          activityName: `Flight ${fileIndex.toString()}`,
          creator: 'DJI CSV to GPX',
        });

        this.download(gpx, fileIndex);
      },
    });
  }

  handleFileProcess = (ev) => {
    const files = ev.target.files;

    for (let i = 0; i < files.length; i++) {
      this.parse(files.item(i), i + 1);
    }
  }

  render() {
    return (
      <Fragment>
        <h1>Convert DJI .csv to GPX</h1>
        <UploadFile processFile={this.handleFileProcess} />

        <h3>Once you've <Link to="/instructions">downloaded the tracks</Link> from the iPad:</h3>
        <ol>
          <li><b>Click</b> the <b><i>Choose Files</i></b> button above
            to select one or more .csv files.
          </li>
          <li>The tracks will automatically process to GPX format, then download.
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
