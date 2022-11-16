/*********************************************************************
* Copyright (c) Intel Corporation 2019
* SPDX-License-Identifier: Apache-2.0
**********************************************************************/

import React from 'react'
import { IDesktopSettings, DesktopSettings } from '../reactjs/KVM/DesktopSettings'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe('Testing DesktopSettings', () => {
  const labelRLE08 = 'RLE 8'
  const labelRLE16 = 'RLE 16'

  it('should notify encodings', async () => {
    const settings: IDesktopSettings = {
      changeDesktopSettings: jest.fn(),
      getConnectState: jest.fn(() => 1)
    }
    render(<DesktopSettings {...settings} />)
    const encodingSelector = screen.getByRole<HTMLSelectElement>('combobox')
    await userEvent.selectOptions(encodingSelector, screen.getByText<HTMLOptionElement>(labelRLE16))
    expect(settings.changeDesktopSettings).toHaveBeenCalledWith({ encoding: '2' })
    await userEvent.selectOptions(encodingSelector, screen.getByText<HTMLOptionElement>(labelRLE08))
    expect(settings.changeDesktopSettings).toHaveBeenCalledWith({ encoding: '1' })
  })
})
