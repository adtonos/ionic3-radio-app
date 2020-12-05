# ionic3-radio-app
A reference implementation of mobile online streaming app.

# Copyright Notice
Code based on [ionic3-radio-app](https://github.com/code-fi/ionic3-radio-app) by [Frank Owusu-Agyemang](https://github.com/code-fi) release under MIT license.

## Requirements

On Ubuntu 20.04 LTS
```
npm i -g native-run
sudo apt update
sudo apt install openjdk-8-jdk-headless
sudo apt install android-sdk

git clone https://github.com/mherod/android-sdk-licenses.git
sudo cp android-sdk-licenses/* $ANDROID_HOME/licenses/ -r
sudo chown adtonos:adtonos /usr/lib/android-sdk -R

export ANDROID_HOME=/usr/lib/android-sdk
export PATH=/usr/lib/android-sdk/platform-tools:/usr/lib/android-sdk/tools/bin:/usr/lib/android-sdk/tools/bin:/usr/lib/android-sdk/tools/proguard/bin:/usr/lib/android-sdk/build-tools/27.0.1:${PATH}
export JAVA_HOME=/usr/lib/jvm/java-1.8.0-openjdk-amd64/
```

## Installation
Create a new ionic 3 app using
``` npm install -g ionic cordova ```

Browse to your desired project location and open terminal

Then clone this repo into your project directory, make sure you override the existing files

 
Add cordova platforms android and browser

```ionic cordova platform add android```

```ionic cordova platform add browser```

```sed -i 's/android-26/android-28/g' platforms/android/project.properties```

then run

```ionic cordova prepare --prod```

serve the app in the browser by running

``` npm run ionic:serve ```

run your app on Android device using

```
ionic cordova run android --device
native-run android --app platforms/android/build/outputs/apk/android-debug.apk --device
```