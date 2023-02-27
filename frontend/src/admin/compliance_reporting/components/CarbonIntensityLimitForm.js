/*
 * Presentational component
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

import CarbonIntensityLimitFormDetails from './CarbonIntensityLimitFormDetails'
import * as Lang from '../../../constants/langEnUs'
import Errors from '../../../app/components/Errors'
import Tooltip from '../../../app/components/Tooltip'
import { withRouter } from '../../../utils/withRouter'

class CarbonIntensityLimitForm extends Component {
  _getValidationMessages () {
    const validationMessage = []

    if (this.props.fields.effectiveDate === '') {
      validationMessage.push('Please enter an effective date.')
    }

    if (this.props.fields.expiryDate === '') {
      validationMessage.push('Please enter an expiry date.')
    }

    return validationMessage
  }

  render () {
    return (
      <div className="page-admin-compliance-reporting-details">
        <h1>{this.props.title}</h1>
        <form
          onSubmit={event => this.props.handleSubmit(event)}
        >
          <CarbonIntensityLimitFormDetails
            edit={this.props.edit}
            fields={this.props.fields}
            handleInputChange={this.props.handleInputChange}
            item={this.props.item}
          />

          {Object.keys(this.props.errors).length > 0 &&
          <Errors errors={this.props.errors} />
          }

          <div className="carbon-intensity-limits-actions">
            <div className="btn-container">
              <button
                className="btn btn-default"
                onClick={() => this.props.navigate(-1)}
                type="button"
              >
                <FontAwesomeIcon icon="arrow-circle-left" /> {Lang.BTN_APP_CANCEL}
              </button>
              <Tooltip
                show={this._getValidationMessages().length > 0}
                title={this._getValidationMessages()}
              >
                <button
                  className="btn btn-default"
                  data-target="#confirmSubmit"
                  data-toggle="modal"
                  disabled={this._getValidationMessages().length > 0}
                  type="button"
                >
                  <FontAwesomeIcon icon="save" /> {Lang.BTN_SAVE}
                </button>
              </Tooltip>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

CarbonIntensityLimitForm.defaultProps = {
  edit: false,
  errors: [],
  item: {}
}

CarbonIntensityLimitForm.propTypes = {
  edit: PropTypes.bool,
  errors: PropTypes.arrayOf(PropTypes.shape()),
  fields: PropTypes.shape({
    compliancePeriod: PropTypes.string,
    density: PropTypes.number,
    effectiveDate: PropTypes.string,
    expiryDate: PropTypes.string
  }).isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  item: PropTypes.shape(),
  title: PropTypes.string.isRequired,
  navigate: PropTypes.func.isRequired
}

export default withRouter(CarbonIntensityLimitForm)
