function inputPrompt(name, message, defaultVal, callback) {
  const done = this.async();

  this.prompt([{
    type: 'input',
    name: name,
    message: message,
    default: defaultVal,
  }], function runCallback(props) {
    callback.bind(this)(props);
    done();
  }.bind(this));
}

function askForName() {
  inputPrompt.bind(this)('appname', 'Your project name', this.appname, function assignAppName(props) {
    this.appname = props.appname;
  });
}

function askForGitHubUser() {
  inputPrompt.bind(this)('githubUser', 'GitHub user or org', 'rentpath', function assignGitHubUser(props) {
    this.githubUser = props.githubUser;
  });
}

function askForGitHubRepo() {
  inputPrompt.bind(this)('githubRepo', 'GitHub repository name', this.appname, function assignGitHubRepo(props) {
    this.githubRepo = props.githubRepo;
    this.githubFullRepo = this.githubUser + this.githubRepo;
  });
}

export default {
  askForName: askForName,
  askForGitHubUser: askForGitHubUser,
  askForGitHubRepo: askForGitHubRepo,
};
