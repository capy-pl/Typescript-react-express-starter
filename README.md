
## How to 
1. Install all packages.
```
npm install
```

## Start Server
1. Run in development mode. The command will also build all front-end files. The server will restart(server related files) and rebuild(client files) on files changing.
Note: `ts-node` is used to start server in this case, which may cause slow startup time.
```
grunt run
```
2. Run in production mode. The command will first build front-end and back-end files, and won't restart or rebuild front-files when files are edited.
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