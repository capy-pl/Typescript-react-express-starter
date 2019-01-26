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
  }

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
      command: 'nodemon dist/server/server.bundle.js',
    }
  };

  grunt.initConfig({
    tslint: tslintConfig,
    webpack: webpackConfig,
    exec: execConfig,
  });

  grunt.task.registerTask('watch:client', ['webpack:clientWatch']);
  grunt.task.registerTask('watch:server', ['webpack:serverWatch']);
  grunt.task.registerTask('build:client', ['webpack:client']);
  grunt.task.registerTask('build:server', ['webpack:server']);
  grunt.task.registerTask('build', ['tslint', 'webpack:client', 'webpack:server']);
  grunt.task.registerTask('test', ['ts:lint', 'exec:test']);
  grunt.task.registerTask('run', ['build', 'exec:run']);
  grunt.loadNpmTasks('grunt-tslint');
  grunt.loadNpmTasks('grunt-webpack');
  grunt.loadNpmTasks('grunt-exec');
}