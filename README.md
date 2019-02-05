
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
2. Run in production mode. The command will first build front-end and back-end files, and start server.
Note: The server won't restart or rebuild front-files when files are edited.
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

## Back-End Commands
1. Build back-end files(convert ts files to js and bundle as a single file).
```
grunt build:server
```

## Unit Test
1. Back-end
```
grunt test:server
```
2. Front-end
```
grunt test:client
```
3. All
```
grunt test
```
