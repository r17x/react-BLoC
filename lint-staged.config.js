module.exports = {
  linters: {
    '**/*.+(js|json|less|css|ts|tsx|md|html)': [
      'prettier --write',
      'yarn test:staged',
      'git add',
    ],
  },
}
