# Bring your robot alive using JavaScript

[![N|Solid](https://scontent.fomr1-1.fna.fbcdn.net/v/t1.0-9/31713323_1748070791905540_1671021944939479040_o.jpg?_nc_cat=0&_nc_eui2=v1%3AAeF28IUJD9nAqU_DANm798HybyebMGtmiV3xWpHSiVRpO_B-QUFUmN5ZLg8bpcj3EqQhGXlgcOtU-1a4a4-i7i2OL7Q-X0egwrqocKDmAI5ViQ&oh=24858cc22703b648a6285dc8bfb099be&oe=5B52AE1F)](https://www.meetup.com/fullstack-cluj/)
# 1. Install NodeJS
### Windows

Installing Node and NPM is pretty straightforward using the installer package available from the [Node.js®][df1] web site.

  1. **Download the Windows installer** from the [Node.js®][df1] web site.
  2. **Run the installer**
  3. **Follow the prompts** in the installer (Accept the license agreement, click the NEXT button a bunch of times and accept the default installation settings).
  4. **Restart your computer**. You won’t be able to run Node.js® until you restart your computer.
  
To use Node you must type command-line instructions, so you need to be comfortable with (or at least know how to start) a command-line tool like the Windows Command Prompt.

**Test it**

Make sure you have Node and NPM installed by running simple commands to see what version of each is installed and to run a simple test program:

- **Test Node**. To see if Node is installed, open the Windows Command Prompt, Powershell or a similar command line tool, and type `node -v`. This should print a version number, so you’ll see something like this v0.10.35.

- **Test NPM**. To see if NPM is installed, type `npm -v` in Terminal. This should print NPM’s version number so you’ll see something like this 1.4.28
- Create a test file and run it. A simple way to test that node.js works is to create a JavaScript file: name it `hello.js`, and just add the code `console.log('Node is installed!');`. To run the code simply open your command line program, navigate to the folder where you save the file and type `node hello.js`. This will start Node and run the code in the `hello.js` file. You should see the output **Node is installed!**.


### Mac OS X

Installing Node.js and NPM is pretty straightforward using Homebrew. Homebrew handles downloading, unpacking and installing Node and NPM on your system. The whole process (after you have XCode and Homebrew installed) should only take you a few minutes.

1. **Open the Terminal** app and type `brew install node`. 
2. **Sit back and wait**. Homebrew downloads some files and installs them. And that’s it.

You can uninstall Node anytime you want using the command `brew uninstall node`. 

**Test it**

Make sure you have Node and NPM installed by running simple commands to see what version of each is installed and to run a simple test program:

- **Test Node**. To see if Node is installed, **open the Terminal** and type `node -v`. This should print a version number, so you’ll see something like this v0.10.35.

- **Test NPM**. To see if NPM is installed, type `npm -v` in **Terminal**. This should print NPM’s version number so you’ll see something like this 1.4.28

- Create a test file and run it. A simple way to test that node.js works is to create a JavaScript file: name it `hello.js`, and just add the code `console.log('Node is installed!');`. To run the code simply open your command line program, navigate to the folder where you save the file and type `node hello.js`. This will start Node and run the code in the `hello.js` file. You should see the output **Node is installed!**.


## Linux

Nodejs is available in the default repositories of most Linux distributions. It might not be latest version, but stable. If you want to have a stable Node.js on your Linux, you better install it using your distribution’s package manager as shown below.

1. **Open the Terminal** and type `sudo apt-get install nodejs npm`

**Note:**  Since the packages from the default repositories are outdated, you will get the following error when you try to install any NodeJS modules using npm.

```sh
/usr/bin/env: ‘node’: No such file or directory
```

To solve this error, you need to create symlink. **Type in Terminal** the following command:  `sudo ln -s /usr/bin/nodejs /usr/bin/node`.

**Test it**

Make sure you have Node and NPM installed by running simple commands to see what version of each is installed and to run a simple test program:

- **Test Node**. To see if Node is installed, **open the Terminal** and type `node -v`. This should print a version number, so you’ll see something like this v0.10.35.

- **Test NPM**. To see if NPM is installed, type `npm -v` in **Terminal**. This should print NPM’s version number so you’ll see something like this 1.4.28

- Create a test file and run it. A simple way to test that node.js works is to create a JavaScript file: name it `hello.js`, and just add the code `console.log('Node is installed!');`. To run the code simply open your command line program, navigate to the folder where you save the file and type `node hello.js`. This will start Node and run the code in the `hello.js` file. You should see the output **Node is installed!**.


# 2. Install [Johnny-Five][df2]

Johnny-Five can be installed using npm.

**Open the terminal** (or Command Prompt on Windows) and type the following commands: 

```shell
mkdir fullstack-workshop && cd fullstack-workshop
```
and then
```shell
npm install johnny-five
```

# 3. Install the Nodebot 

Make sure you are in the directory created before (fullstack-workshop). In **terminal** run the following command:

```s
npm install -g nodebot-workshop
```

# 4. Prepare Arduino board ( if you have one )

- Download [Arduino IDE][df2]
- Connect the board ( Arduino IDE should recognize the board automatically )
- Upload StandardFirmata ( File -> Examples -> Firmata -> StandardFirmata )




   [df1]: <https://nodejs.org/en/download/>
   [df2]: <http://johnny-five.io/>
   [df3]: <https://www.arduino.cc/en/Main/Software>
