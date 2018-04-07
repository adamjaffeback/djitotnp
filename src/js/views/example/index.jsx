import React, { Component, Fragment } from 'react';
import Loadable from 'react-loadable';
import XLSX from 'xlsx';
import LazyLoading from '../../common/components/LazyLoading/LazyLoading'

require('../../../style/index.css');

const UploadFile = Loadable({
  loader: () => import('../../common/components/UploadButton/UploadButton'),
  loading: LazyLoading,
})

class ExampleView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      workbook: null,
    }
  }

  onLoad = (e) => {
    const bstr = e.target.result;
    const workbook = XLSX.read(bstr, { type: 'binary', cellDates: true });
    this.setState({ workbook });
  }

  onLoadEnd = () => {
    console.log('done loading', this.state.workbook);
  }

  handleFileProcess = (ev) => {
    const file = ev.target.files[0];
    const reader = new FileReader();

    reader.onload = this.onLoad
    reader.onloadend = this.onLoadEnd

    reader.readAsBinaryString(file);
  }

  render() {
    return (
      <Fragment>
        <UploadFile processFile={this.handleFileProcess} />
      </Fragment>
    )
  }
}

export default ExampleView;
