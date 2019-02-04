module.exports = function(grunt) {
  const { clientConfig, serverConfig } = require('./webpack.config');
  const tslintConfig = {
    options: {
      configuration: './tslint.json',
      fix: false
    },
    client: {
      files: {
        src: [
          './client/**/*.ts',
          './spec/client/**/*.ts'
        ]
      }
    },
    server: {
      files: {
        src: [
          './server/**/*.ts',
          './spec/server/**/*.ts'
        ]
      }
    },
  };

  const webpackConfig = {
      serverWatch: Object.assign({ watch: true }, serverConfig),
      clientWatch: Object.assign({ watch: true }, clientConfig),
      server: serverConfig,
      client: clientConfig,
    };

  const execConfig = {
    test: {
      command: 'jest',
      stdout: true,
      exitCode: 0,
    },
    run: {
      command: 'nodemon',
    },
    prodRun: {
      command: 'node dist/server/server.bundle.js'
    },
    testClient: {
      command: 'jest spec/client',
      stdout: true,
      exitCode: 0,
    },
    testServer: {
      command: 'jest spec/server',
      stdout: true,
      exitCode: 0,
    }
  };

  grunt.initConfig({
    tslint: tslintConfig,
    webpack: webpackConfig,
    exec: execConfig,
  });

  grunt.task.registerTask('watch:client', ['webpack:clientWatch']);
  grunt.task.registerTask('build:client', ['webpack:client']);
  grunt.task.registerTask('build:server', ['webpack:server']);
  grunt.task.registerTask('build', ['tslint', 'webpack:client', 'webpack:server']);
  grunt.task.registerTask('test', ['tslint', 'exec:test']);
  grunt.task.registerTask('test:client', ['tslint:client', 'exec:testClient']);
  grunt.task.registerTask('test:server', ['tslint:server', 'exec:testServer']);
  grunt.task.registerTask('run', ['build:client', 'exec:run']);
  grunt.task.registerTask('prodRun', ['build', 'exec:prodRun']);
  grunt.loadNpmTasks('grunt-tslint');
  grunt.loadNpmTasks('grunt-webpack');
  grunt.loadNpmTasks('grunt-exec');
}