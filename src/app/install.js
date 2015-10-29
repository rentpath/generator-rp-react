export default function install() {
  this.installDependencies({
    bower: false,
    npm: true,
    callback: function callback() {
      this.log('Everything is ready!');
    }.bind(this),
  });
}

