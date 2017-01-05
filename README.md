# Native-Starter
A starter repo for iOS and Android with a Navigator, TabBar, and MobX store for app state.

### Up and Running

```shell
$ git clone git@github.com:constelation/native-starter.git <YOUR_REPO_NAME>
$ cd <YOUR_REPO_NAME>
$ ./rename.sh <YourProjectName>    # this script will rename your project from NativeStarter
$ git remote set-url origin <YOUR_NEWLY_CREATED_GIT_REPO_URL>
$ npm install
```

#### Environment Setup

ToDo

#### How to Run
##### iOS
```shell
$ npm start                     # Start react-native packager server, which serves up the js bundle to the emulators
$ npm run xcode                 # Open xcode for the project
```

Click on Play button (cmd+r) to run the app on the ios Simulator

##### Android
You will need a maximum of 3 terminal tabs/windows to run the React Native packager, Android Virtual Devices, and view the Android logs

```shell
$ npm start                     # note: not needed if it is already running (from ios step)
$ npm run android-emulator      # Open the android emulator manager
```

1. Select the Emulator that you've already created (from the Getting Started steps)
2. Click Start...
3. Click Launch

```shell
$ npm run android               # Deploy the app to the already running emulator and hook in to its logs
```


### Dev notes
#### Please consult the [React Playbook](https://github.com/kylpo/react-playbook)
* Be sure to enable live reload if you want your file changes to immediately reload the app
* [YellowBox](https://github.com/iamdustan/yellowbox-react) is disabled. See `index.android.js` and `index.ios.js` to re-enable it if you'd like.

#### Directory Layout

```
.
├── /android/                   # android-specific code (bootstrapped from `react-native init`)
├── /ios/                       # ios-specific code (bootstrapped from `react-native init`)
|
├── /assets
│   ├── /fonts/
│   ├── /images/
│   └── /videos/
|
├── /app                        # Your app-specific source code of the application
│   ├── /store/                 # Responsible for you app state. Houses MobX actions and observables
│   ├── /scenes/                # Components that are handled by a Navigator. Same as pages, views, etc for the app.
│   |   ├── /App/               # Root scene
│   |       ├── /_/             # Subcomponents of App
│   |       └── /App.js         # Component used in index.ios.js
│   ├── /shared/                # Shared components used in 2+ scenes
│   └── /utils/                 # **Optional** Helper js functions that are app and/or model aware
|
├── /lib                        # Your non-app-specific Components and functions
|
├── /node_modules/              # 3rd-party libraries and utilities
└── package.json                # The list of 3rd party libraries and utilities
```


#### Run targets

- `npm start` - `start react packager`
- `npm run ios` - starts iOS simulator
- `npm run xcode` - launch XCode
- `npm run android-emulator` - launch Android Virtual Device Manager (to start emulator)
- `npm run android` - run app on emulator and show logs in terminal
- `npm run reinstall` - wipe out `node_modules`, reset `watchman`, then install `node_modules` again
- `npm run upgrade` - `react-native upgrade`, then `react-native link` (BE SURE TO READ THE UPGRADE DOC ABOVE!)

#### [import-js](https://github.com/Galooshi/import-js) for auto-imports
This project is set up for [import-js](https://github.com/Galooshi/import-js) to organize and include your imports. Just
create a new file, start writing the code that matters, then fire off a `ImportJSFix` from your editor to have it
auto-populate.

### Support

  * Talk to @kylpo
