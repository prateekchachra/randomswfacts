# Random SW Facts

Write an app that pulls data from the graphql implementation of SWAPI.

Every time the user shakes the device, a new random planet is shown alongisde the films it appears in.

See an example at https://wireframe.cc/Rk72PV

The api can be reached at https://graphql.org/swapi-graphql

# How to run this Application

The shaking feature of this application uses **react-native-shake** and it will only run on **real devices.**

Ensure that the package manager **npm** and the global packages **yarn** and **react-native-cli** are already installed and good to go.

First step is to run **yarn** to install all the relevant packages

## Important: This application won't run using NPM. Only yarn command is allowed to install the repositories (This is done to ensure no cacheing/optimization issues happen.)

## Android

Ensure that **android-sdk** is installed and it is in your **environment variables**

You can also edit your path in **/android/local.properties**

Run this application on a real Android Device by connecting it via a USB (And making sure the developer options is on) and execute the following command on your console **react-native run-android**

## IoS

Ensure that you have a developer account linked to your **X-Code** and that you're running the latest version.

You can either build the project by running **/ios/RandomSWFacts.xcode/project.pbxproj** and execute it directly on your iphone, or run **react-native run-ios** for the command to run automatically.

## Screenshots

To be added
