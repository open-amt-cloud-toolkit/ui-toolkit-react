/*********************************************************************
* Copyright (c) Intel Corporation 2023
* SPDX-License-Identifier: Apache-2.0
**********************************************************************/

import React from 'react'
import { IDER } from './ider'

export class AttachDiskImage extends React.Component<{
  deviceId: string | null
  mpsServer: string | null
  authToken?: string
}, { selectedFile: File | null,  iderState: number }> {

  constructor(props) {
    super(props)
    this.state = {
      selectedFile: null,
      iderState: 0, // State to track the IDER state
    }
  }

  handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null
    this.setState({ selectedFile: file })
  }

  updateIderState = (newState) => {
    this.setState({ iderState: newState })
  }

  render() {
    return (
      <div>
        <IDER
          iderState={this.state.iderState}
          updateIderState={this.updateIderState}
          deviceId={this.props.deviceId}
          mpsServer={this.props.mpsServer}
          authToken={this.props.authToken}
          cdrom={this.state.selectedFile}
          floppy={null}
          data-testid="ider-component" iderData={null}        />
        <input data-testid="file-input" type="file" onChange={this.handleFileChange} />
        <button 
          onClick={() => this.state.iderState === 0 ? this.updateIderState(1) : this.updateIderState(0)}
          disabled={!this.state.selectedFile}
        >
          {this.state.iderState === 0 ? 'Start IDER' : 'Stop IDER'}
        </button>
      </div>
    )
  }
}
