/*********************************************************************
* Copyright (c) Intel Corporation 2019
* SPDX-License-Identifier: Apache-2.0
**********************************************************************/

import React from 'react'
import { Sol, SOLProps } from '../reactjs/SerialOverLAN/Sol'
import { render } from '@testing-library/react'
import restoreAllMocks = jest.restoreAllMocks

let props: SOLProps
beforeEach(() => {
  props = {
    deviceId: 'acfae359-be7b-4861-8e0c-54b20389bb68',
    mpsServer: 'https://localhost:9300',
    authToken: 'authToken'
  }
})

describe('Testing purely SOL UI', () => {
  it('should render successfully', () => {
    const container = render(<Sol {...props} />)
    expect(container).not.toBeNull()
  })
})

describe('Testing SOL Terminal', () => {
  let sol
  let redirector
  let term
  let terminal
  beforeEach(() => {
    restoreAllMocks()
    redirector = {
      start: jest.fn(),
      stop: jest.fn()
    }
    term = {
      reset: jest.fn(),
      write: jest.fn()
    }
    terminal = {
      TermSendKeys: jest.fn(),
      handleKeyDownEvents: jest.fn()
    }

    sol = new Sol(props)
    sol.setState = jest.fn((newState: any) => {
      Object.assign(sol.state, sol.state, newState)
    })
    sol.init = jest.fn()
    sol.dataProcessor = {}
    sol.redirector = redirector
    sol.term = term
    sol.terminal = terminal
  })
  it('should handle state changes', () => {
    sol.onTerminalStateChange({}, 0)
    sol.handleSOLConnect({ persist: jest.fn() })
    expect(redirector.start).toHaveBeenCalledTimes(1)
    expect(redirector.stop).toHaveBeenCalledTimes(0)

    const cleanUpSpy = jest.spyOn(sol, 'cleanUp')
    sol.onTerminalStateChange({}, 3)
    sol.handleSOLConnect({ persist: jest.fn() })
    expect(redirector.start).toHaveBeenCalledTimes(1)
    expect(redirector.stop).toHaveBeenCalledTimes(1)
    expect(term.reset).toHaveBeenCalledTimes(1)
    expect(cleanUpSpy).toHaveBeenCalledTimes(1)
    expect(sol.init).toHaveBeenCalledTimes(1)
  })
})
