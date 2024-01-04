/*********************************************************************
* Copyright (c) Intel Corporation 2023
* SPDX-License-Identifier: Apache-2.0
**********************************************************************/
import React from 'react'
import { AttachDiskImage } from '../reactjs/IDER/AttachDiskImage'
import { render, fireEvent, screen } from '@testing-library/react'
import { IDER } from '../reactjs/IDER/ider'

describe('AttachDiskImage Component', () => {
  test('renders the component', () => {
    render(<AttachDiskImage deviceId="123" mpsServer="http://example.com" />)
    expect(screen.getByText(/start IDER/i)).toBeInTheDocument()
  })

  test('handles file selection', () => {
    render(<AttachDiskImage deviceId="123" mpsServer="http://example.com" />)
    const fileInput = screen.getByTestId('file-input') as HTMLInputElement
    const file = new File(['dummy content'], 'example.txt', { type: 'text/plain' })
    fireEvent.change(fileInput, { target: { files: [file] } })
    expect(fileInput.files).toHaveLength(1)
  })

  test('handles IDER connect/disconnect', () => {
    render(<AttachDiskImage deviceId="123" mpsServer="http://example.com" />)
    const button = screen.getByText(/start IDER/i)
    fireEvent.click(button)
  })
})