import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import './UploadButton.css';

class UploadButton extends PureComponent {
  render() {
    return (
      <form onChange={this.props.processFile}>
        <input type="file" accept=".csv" multiple="true" />
      </form>
    )
  }
}

UploadButton.propTypes = {
  processFile: PropTypes.func.isRequired,
}

export default UploadButton;
