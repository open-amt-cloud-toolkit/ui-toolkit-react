/*********************************************************************
* Copyright (c) Intel Corporation 2019
* SPDX-License-Identifier: Apache-2.0
**********************************************************************/

import React from 'react'
import { IEncodingOptions, EncodingOptions } from '../reactjs/KVM/EncodingOptions'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe('Testing DesktopSettings', () => {
  const labelRLE08 = 'RLE 8'
  const labelRLE16 = 'RLE 16'

  it('should notify encodings', async () => {
    const settings: IEncodingOptions = {
      changeEncoding: jest.fn(),
      getConnectState: jest.fn(() => 1)
    }
    render(<EncodingOptions {...settings} />)
    const encodingSelector = screen.getByRole<HTMLSelectElement>('combobox')
    const optionRLE08 = screen.getByText<HTMLOptionElement>(labelRLE08)
    const optionRLE16 = screen.getByText<HTMLOptionElement>(labelRLE16)

    expect(encodingSelector).not.toBeNull()
    expect(encodingSelector).not.toHaveAttribute('disabled')
    expect(optionRLE08).not.toBeNull()
    expect(optionRLE08.selected).toBeTruthy()
    expect(optionRLE16).not.toBeNull()
    expect(optionRLE16.selected).toBeFalsy()

    await userEvent.selectOptions(encodingSelector, optionRLE16)
    expect(settings.changeEncoding).toHaveBeenCalledWith('2')
    expect(encodingSelector).toHaveTextContent(labelRLE16)
    await userEvent.selectOptions(encodingSelector, optionRLE08)
    expect(settings.changeEncoding).toHaveBeenCalledWith('1')
    expect(encodingSelector).toHaveTextContent(labelRLE08)
  })

  it('should be disabled in connect state 2', async () => {
    const settings: IEncodingOptions = {
      changeEncoding: jest.fn(),
      getConnectState: jest.fn(() => 2)
    }
    render(<EncodingOptions {...settings} />)

    const encodingSelector = screen.getByRole<HTMLSelectElement>('combobox')
    const optionRLE16 = screen.getByText<HTMLOptionElement>(labelRLE16)

    expect(encodingSelector).not.toBeNull()
    expect(encodingSelector).toHaveAttribute('disabled')
    expect(optionRLE16).not.toBeNull()
    expect(optionRLE16.selected).toBeFalsy()

    await userEvent.selectOptions(encodingSelector, optionRLE16)
    expect(settings.changeEncoding).not.toHaveBeenCalled()
  })
})
