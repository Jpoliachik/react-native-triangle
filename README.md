# react-native-triangle
Draw triangles in code with React Native

A class to encapsulate the CSS triangle hack. Based off the output of the triangle generator http://apps.eky.hk/css-triangle-generator/ but modified for React Native syntax.

## Installation
`npm install react-native-triangle --save`

Then

`import Triangle from 'react-native-triangle';`

## Usage
Sample JSX will produce the triangle below:
```
<Triangle
  width={90}
  height={150}
  color={'#D80016'}
  direction={'right'}
/>
```
![alt text](https://raw.githubusercontent.com/Jpoliachik/react-native-triangle/master/sampletriangle.png "react-native-triangle")

The width and height act as bounds to fit the triangle into. 

### Supported Directions
- up
- right
- down
- left
- up-left
- up-right
- down-left
- down-right
