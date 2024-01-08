This is a [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started with Development

## Fresh installation:
If this is a fresh installation you have to run the following commands before you can start: 

```bash
# Install node dependencies
npm install

# Install iOS Cocoapods dependencies
cd ./ios
bundle install
bundle exec pod install
```

### Usage with NVM
If you are using _Node Version Manager_. You can create the the file `./ios/.xcode.env.local` and add the the path for you version of node (>=18 recommended):

```bash
# iOS example:
export NODE_BINARY=/Users/myuser/.nvm/versions/node/v18/bin/node
```


## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
npm start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
npm run android
```

### For iOS

```bash
npm run ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

### Recommendations

This project make usega of _Prettier_ and _ESlint_ to increase code quality and readability.
We strongly recommend to activate the auto-format option from your editor and avoid using _@ignore*_ rules.
The following extensions are recommended for VSCode:

- [Prettier](`https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode`)
- [ESLint](`https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint`)