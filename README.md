### Preview
#### Main flow
![alt text](https://github.com/nikromiks/react-native-locationviewer/blob/master/Main_flow.gif)

#### Map Flow
![alt text](https://github.com/nikromiks/react-native-locationviewer/blob/master/Map_flow.gif)


### Pre-requirements
Android SDK and Xcode [instruction](https://facebook.github.io/react-native/docs/getting-started.html)

Cocoapods for installing iOS dependencies [link](https://cocoapods.org/)

### Available Scripts
##### Installation
Please use apropriate method.

`npm install` or `yarn` in root folder

`pod install` to install pods in `./ios` folder 

#### Run

`react-native run-ios` and `react-native run-android`

#### Code quality

`npm test` or `yarn test`

Runs the [jest](https://github.com/facebook/jest) test runner on your tests.

`npm run lint` or `yarn run lint`

Runs the [eslint](https://eslint.org/) code checker.

`npm run flow status` or `yarn run flow status`

Runs the [Flow](http://flowtype.org/) static type checker.

### User-Cases

##### Adding location on map
- User should choose the place for feature pin via zoom or pinch. 
- Then need to do a long press interaction with point on map.
- When you will see dialog with input field for new name.

##### Editing places from map
- User should choose the place for feature pin via zoom or pinch. 
- Then need to do a tap on pin
- Then you will see the Name of place
- Then need to do a tap on this name
- When you will see Detail screen with notes about place

##### Editing places from list
- User should scroll to the interested place
- Then need to do a tap on item in list
- When you will see Detail screen with notes about place

##### Saving note about place
- User should open Detail screen
- Then need to do type any notes
- Then need to do tap on Save button
- When you will see Map or List screen with saved information


