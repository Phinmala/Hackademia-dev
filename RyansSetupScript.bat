npm install -g node-gyp
echo {\n"targets": [\n{\n"target_name": "binding",\n"sources": [ "src/binding.cc" ]\n}\n]\n} > binding.gyp
cd . > src/binding.cc
node-gyp configure
node-gyp build
npm uninstall -g create-react-app
npm install -g create-react-app
npm install
echo Run command "npm start" to view the web app! Yay!