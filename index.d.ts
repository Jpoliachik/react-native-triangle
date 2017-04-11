// Type definitions for react-native-triangle 0.0.6
// Project: https://github.com/Jpoliachik/react-native-triangle
// Definitions by: Kyle Roach <https://github.com/iRoachie>
// TypeScript Version: 2.2.2

import React, { Component } from 'react'

type TrianglePropsDirection = 'up' | 'right' | 'down' | 'left' | 'up-left' | 'up-right' | 'down-left' | 'down-right'

interface TriangleProps {
  /**
   * The width of the rendered triangle
   * Default value is 0
   */
  width?: number

  /**
   * Height of the rendered triangle
   * Default value is 0
   */
  height?: number


  /**
   * Fill color of triangle
   * Accepts color strings such as hex, literals, rgba
   * 
   * Default value is 'white'
   */
  color?: string

  /**
   * Orientation for the triangle
   * Default value is 'up'
   */
  direction?: TrianglePropsDirection
}

export default class Triangle extends Component<TriangleProps, {}> { }

