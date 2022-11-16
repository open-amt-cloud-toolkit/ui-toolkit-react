/*********************************************************************
* Copyright (c) Intel Corporation 2019
* SPDX-License-Identifier: Apache-2.0
**********************************************************************/

import React from 'react'
import Term, { IPropTerminal } from '../reactjs/SerialOverLAN/Terminal'
import { Terminal as XTerm } from 'xterm'
import { render } from '@testing-library/react'

describe('Testing SOL Terminal', () => {
  let xterm: XTerm
  let props: IPropTerminal
  beforeEach(() => {
    xterm = new XTerm({
      cursorStyle: 'block',
      fontWeight: 'bold',
      rows: 30,
      cols: 100
    })

    props = {
      handleKeyPress: jest.fn(),
      xterm,
      handleKeyDownPress: jest.fn()
    }
  })

  it('should render successfully', () => {
    const openSpy = jest.spyOn(xterm, 'open').mockImplementation()
    const container = render(<Term {...props} />)
    expect(container).not.toBeNull()
    expect(openSpy).toHaveBeenCalled()
  })

  it('should render only once', () => {
    const term = new Term(props)
    expect(term.mountedWorkaround).toBeFalsy()
    term.componentDidMount()
    expect(term.mountedWorkaround).toBeTruthy()
    term.componentDidMount()
    expect(term.mountedWorkaround).toBeTruthy()
  })
})
