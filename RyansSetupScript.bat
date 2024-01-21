CALL npm install -g node-gyp
CALL echo {"targets": [{"target_name": "binding","sources": [ "src/binding.cc" ]}]} > binding.gyp
CALL cd . > src/binding.cc
CALL node-gyp configure
CALL node-gyp build
CALL npm uninstall -g create-react-app
CALL npm install -g create-react-app
CALL cd frontend-dev
CALL npm install
CALL echo.
CALL echo Run command "npm start" to view the web app! Yay!