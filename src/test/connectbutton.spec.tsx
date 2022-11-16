/*********************************************************************
* Copyright (c) Intel Corporation 2019
* SPDX-License-Identifier: Apache-2.0
**********************************************************************/

import React from 'react'
import { ConnectButton, ConnectProps } from '../reactjs/KVM/ConnectButton'
import { render, screen } from '@testing-library/react'

describe('Test ConnectButton', () => {
  interface TestInput {
    state: number
    label: string
  }

  test.each<TestInput>([
    {
      state: 0,
      label: 'Connect KVM'
    },
    {
      state: 1,
      label: 'Connecting KVM'
    },
    {
      state: 2,
      label: 'Disconnect KVM'
    }

  ])('should render button with text $label when kvm state is [$state]', async (ti) => {
    const connectbuttonprops: ConnectProps = {
      kvmstate: ti.state,
      handleConnectClick: () => {}
    }
    render(<ConnectButton {...connectbuttonprops} />)
    expect(screen.getByRole('button', { name: ti.label })).toBeInTheDocument()
  })
})
