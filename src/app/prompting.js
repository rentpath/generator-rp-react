function query(name, message, defaultVal, callback) {
  const done = this.async();

  const prompts = [{
    type: 'input',
    name: name,
    message: message,
    default: defaultVal, // Default to current folder name
  }];

  this.prompt(prompts, function runCallback(props) {
    callback.bind(this)(props);
    done();
  }.bind(this));
}

function askForName() {
  query.bind(this)('appname', 'Your project name', this.appname, function assignAppName(props) {
    this.appname = props.appname;
  });
}

function askForGitHubUser() {
  query.bind(this)('githubUser', 'GitHub user or org', 'rentpath', function assignAppName(props) {
    this.githubUser = props.githubUser;
  });
}

function askForGitHubRepo() {
  query.bind(this)('githubRepo', 'GitHub repository name', this.appname, function assignAppName(props) {
    this.githubRepo = props.githubRepo;
    this.githubFullRepo = this.githubUser + this.githubRepo;
  });
}

export default {
  askForName: askForName,
  askForGitHubUser: askForGitHubUser,
  askForGitHubRepo: askForGitHubRepo,
};
