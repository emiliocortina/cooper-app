# Client

## ECMAScript 2015 features 
(está guay pascribir código moderno)
https://babeljs.io/docs/en/learn/

## Running
Es to facil, instalaos las cosas q pone aqui. Comprobad que estáis viendo 
el tutorial para React Native CLI Quickstart no Expo y luego elegid Windows y Android vosotros.
https://facebook.github.io/react-native/docs/0.60/getting-started
Esto os lo abrirá en un emulador que está bien pa ir desarrollando se actualiza solo.

### Run on device
https://facebook.github.io/react-native/docs/0.60/running-on-device 

## Links varios de cosas guays

### Animaciones to fancy pa la navegacion
https://github.com/fram-x/FluidTransitions

### Animacion mas fancy para las cards
https://github.com/wcandillon/can-it-be-done-in-react-native.git


## Performance

### Optimizar rendimiento
https://facebook.github.io/react-native/docs/0.60/performance

Navigator vs NavigatorIOS en iOS???
Use the new react navigation library: https://facebook.github.io/react-native/docs/0.60/navigation
Uses native components to deliver 60FPS animations that are run on the native thread.

FlatList/SectionList vs ListView

### Production builds
https://facebook.github.io/react-native/docs/0.60/running-on-device#building-your-app-for-production

## Typescript
https://facebook.github.io/react-native/docs/0.60/typescript

## iOS troubleshooting
If it cannot build due to pods problems do:
If you don't have cocoa pods installed you need to:

sudo gem install cocoapods
Then run:

cd /ios
pod install
delete the build folder in ios folder of your react native project

run:

react-native run-ios
if error persists:

delete build folder again
open the /ios folder in Xcode
navigate File -> Project Settings -> Build System -> change (Shared workspace settings and Per-User workspace settings): Build System -> Legacy Build System
