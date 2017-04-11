// Type definitions for react-native-triangle 0.0.6
// Project: https://github.com/Jpoliachik/react-native-triangle
// Definitions by: Kyle Roach <https://github.com/iRoachie>
// TypeScript Version: 2.2.2

import React, { Component } from 'react'

type TrianglePropsDirection = 'up' | 'right' | 'down' | 'left' | 'up-left' | 'up-right' | 'down-left' | 'down-right'

interface TriangleProps {
  /**
   * The width of the rendered triangle
   */
  width: number

  /**
   * Height of the rendered triangle
   */
  height: number


  /**
   * Fill color of triangle
   * Accepts color strings such as hex, literals, rgba
   */
  color: string

  /**
   * Orientation for the triangle
   */
  direction: TrianglePropsDirection
}

export default class Triangle extends Component<TriangleProps, {}> { }

