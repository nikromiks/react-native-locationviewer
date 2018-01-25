
# react-native-fetcher

## Getting started

`$ npm install react-native-fetcher --save`

### Mostly automatic installation

`$ react-native link react-native-fetcher`

### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-fetcher` and add `RNFetcher.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNFetcher.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.reactlibrary.RNFetcherPackage;` to the imports at the top of the file
  - Add `new RNFetcherPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-fetcher'
  	project(':react-native-fetcher').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-fetcher/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-fetcher')
  	```


## Usage
```javascript
import RNFetcher from 'react-native-fetcher';

// TODO: What do with the module?
RNFetcher;
```
  