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

### Blur
https://stackoverflow.com/questions/37131278/how-to-make-the-blur-effect-with-react-native
and https://github.com/react-native-community/react-native-blur

### Subreddit
https://www.reddit.com/r/reactnative/

### Infinite scroll
https://github.com/ankeetmaini/react-infinite-scroll-component

### Accordion list
Podemos hacer una de estas con las distintas mediciones de cada categoria (colapsar las cards dentro de pollution de NO2, O3, CO2...)
https://www.reddit.com/r/reactnative/comments/dbtxu2/the_5_minutes_react_native_accordion_list/


## Styling
### Best practices
https://thoughtbot.com/blog/structure-for-styling-in-react-native
(El punto 4 lo vamos a refactorizar en otro archivo pero es el mismo concepto)

### Dark mode
https://blog.expo.io/expo-sdk-35-is-now-available-beee0dfafbf4

## Internationalization
https://whatdidilearn.info/2019/01/20/internationalization-in-react-native.html

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

## Android troubleshooting
Me imagino que habrá que instalar las mierditas de navegacion en la carpeta de android

## iOS troubleshooting
### Pods issues
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


### Issues con ld
Linker o noseque pollas https://stackoverflow.com/questions/18165747/link-error-build-products-debug-iphonesimulator-file-not-found
### IonIcons issues
https://stackoverflow.com/questions/44558326/unrecognised-font-family-ionicons-error-native-base/44558511
