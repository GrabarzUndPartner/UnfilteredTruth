const github = require('./.semantic-release/github.json');
const gitlab = require('./.semantic-release/gitlab.json');

const args = process.argv
  .slice(2)
  .map(arg => arg.split('='))
  .reduce((result, [
    value, key
  ]) => {
    result[String(value).replace(/-/g, '')] = key;
    return result;
  }, {});

module.exports = (args.provider === 'gitlab') ? gitlab : github;
