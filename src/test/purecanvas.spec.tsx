/*********************************************************************
* Copyright (c) Intel Corporation 2019
* SPDX-License-Identifier: Apache-2.0
**********************************************************************/

import React from 'react'
import { PureCanvas, PureCanvasProps } from '../reactjs/KVM/PureCanvas'
import { fireEvent, render, screen } from '@testing-library/react'

describe('Testing purecanvas component', () => {
  let height = '768'
  let width = '1366'
  let props: PureCanvasProps

  beforeEach(() => {
    height = '768'
    width = '1366'
    props = {
      contextRef: (ctx: CanvasRenderingContext2D) => {},
      mouseDown: (event: React.MouseEvent) => {},
      mouseUp: (event: React.MouseEvent) => {},
      mouseMove: (event: React.MouseEvent) => {},
      canvasHeight: height,
      canvasWidth: width
    }
  })
  it('should render with width and height', () => {
    render(<PureCanvas {...props} />)
    const canvas = screen.getByTestId<HTMLCanvasElement>('pure-canvas-testid')
    fireEvent.contextMenu(canvas)
    expect(canvas.getAttribute('height')).toBe(height)
    expect(canvas.getAttribute('width')).toBe(width)
    expect(canvas).toHaveClass('canvas')
  })
  it('should not blow up with no context', () => {
    render(<PureCanvas {...props} />)
    const canvas = screen.getByTestId<HTMLCanvasElement>('pure-canvas-testid')
    fireEvent.contextMenu(canvas)
    expect(canvas.getAttribute('height')).toBe(height)
    expect(canvas.getAttribute('width')).toBe(width)
    expect(canvas).toHaveClass('canvas')
  })
  it('should component update returns false', () => {
    const canvas = new PureCanvas(props)
    expect(canvas.shouldComponentUpdate()).toBeFalsy()
  })
})
