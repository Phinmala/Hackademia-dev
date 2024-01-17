# How I created the Node.js server and React app and everything

1. Run these commands in cmd in the directory you want this React app:
    - `npm install -g node-gyp`
    - `node-gyp configure`
    - `node-gyp build`
2. One of the previous two commands will fail though, so you have to create the binding.gyp file, as seen
in this directory, and the src/binding.cc file. The current binding.gyp file is basically a blank
template. After creating these two files, run the commands again. I followed these directions from [here](https://github.com/nodejs/node-gyp?tab=readme-ov-file#on-window).
3. You might also have to do that command about Visual C++ Build Tools version from above link.
4. I also uninstalled and reinstalled the create-react-app Node module (I think that's what it is, at least),
following [this](https://github.com/facebook/create-react-app) link. I used the command `npm uninstall -g create-react-app` to uninstall, then `npm install -g create-react-app`
to reinstall. The "-g" flag means global, so it installs for your whole computer and not just this specific
directory.
5. Run `npm install` in the react-app (frontend-dev here) folder to install the node_modules from the
package.json file dependencies (without having to create a whole new app, since most of the app is here).

Now you should be able to run `npm start` and see the website load in your browser!

**ALSO**, I wrote a .bat file that theoretically at least will do all of this for you, but if you run into that
Visual C++ Build Tools version issue then you'll have to do it manually, command by command. Which still
isn't too bad.