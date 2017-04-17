module.exports = function (w) {
    return {
      files: [
        'src/*.ts'
      ],

      tests: [
        'test/*.test.ts'
      ],

      env: {
        type: 'node'
      },

      compilers: {
        '**/*.ts': w.compilers.typeScript({ module: 'commonjs' })
      }
    };
  };