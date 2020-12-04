# ionic3-radio-app
A reference implementation of mobile online streaming app.

# Copyright Notice
Code based on [ionic3-radio-app](https://github.com/code-fi/ionic3-radio-app) by [Frank Owusu-Agyemang](https://github.com/code-fi) release under MIT license.

## Installation
Create a new ionic 3 app using
``` npm install -g ionic cordova ```

Browse to your desired project location and open terminal

Then clone this repo into your project directory, make sure you override the existing files

 
Add cordova platforms android and browser

```ionic cordova platform add android```

```ionic cordova platform add browser```

```ionic cordova plugin add cordova-plugin-media```

then run
```ionic cordova prepare --prod```

serve the app by running

``` npm run ionic:serve ```
