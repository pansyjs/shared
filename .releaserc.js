module.exports = {
  branches: ['+([0-9])?(.{+([0-9]),x}).x", "main'],
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/changelog",
    "@semantic-release/github",
    ['@semantic-release/npm', {
      pkgRoot: './lib'
    }],
    [
      "@semantic-release/git",
      {
        "assets": ['CHANGELOG.md', 'package.json'],
        message:
          // eslint-disable-next-line no-template-curly-in-string
          'chore(release): ${nextRelease.gitTag} [skip ci] \n\n${nextRelease.notes}',
      },
    ],
  ]
}
