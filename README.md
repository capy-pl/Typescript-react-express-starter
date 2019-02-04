
## How to 
1. Install all packages.
```
npm install
```

## Start Server
1. Run in development mode. The command will also build all front-end files. Server will restart on file changing. It also provides
hot module reload on front-end.
```
grunt run
```
1. Run in production mode. The command will bundle all front-end and back-end files, then start the server. 
```
grunt prodRun
```

## Front-End Commands
1. Build front-end files.
```
grunt build:client
```
2. Watch front-end files.
```
grunt watch:client
```
3. Test front-end files.
```
grunt test:client
```
## Back-End Commands
1. Build back-end files.
```
grunt build:client
```
2. Test back-end files.
```
grunt test:server
```