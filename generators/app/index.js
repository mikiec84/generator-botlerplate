var generators = require('yeoman-generator')
var chalk = require('chalk')
var _ = require('lodash')
var fs = require('fs')

module.exports = generators.Base.extend({
  // The name `constructor` is important here
  constructor: function () {
    generators.Base.apply(this, arguments)
  },
  prompting: function () {
    console.log(' _____                    _              _____ ')
    console.log('|  __ \\                  | |       /\\   |_   _|')
    console.log('| |__) |___  ___ __ _ ___| |_     /  \\    | |  ')
    console.log('|  _  // _ \\/ __/ _` / __| __|   / /\\ \\   | |  ')
    console.log('| | \\ \\  __/ (_| (_| \\__ \\ |_ _ / ____ \\ _| |_ ')
    console.log('|_|  \\_\\___|\\___\\__,_|___/\\__(_)_/    \\_\\_____|')
    // Have Yeoman greet the user.
    this.log('Welcome to the ' + chalk.yellow('Recast.AI Botlerplate') + ' generator!')

    var prompts = [{
      type: 'input',
      name: 'name',
      message: 'What name do you want for your project?',
      default: 'my-bot',
    }, {
      type: 'list',
      name: 'mongo',
      message: 'Would you like to enable mongodb?',
      choices: ['yes', 'no'],
    }, {
      type: 'list',
      name: 'server',
      message: 'What connector do you want to use?',
      choices: ['microsoft bot connector', 'slack', 'messenger', 'kik', 'none'],
    }, {
      type: 'list',
      name: 'example',
      message: 'Would you like to use the first bot of recast for starting?',
      choices: ['yes', 'no'],
    }]

    return this.prompt(prompts).then(function (props) {
      // To access props later use this.props.someAnswer;
      this.props = props
    }.bind(this))
  },

  writing: {
    config: function () {
      this.fs.copyTpl(
        this.templatePath('_package.json'),
        this.destinationPath(`./${this.props.name}/package.json`), {
          name: this.props.name,
          server: this.props.server,
          mongo: this.props.mongo,
          example: this.props.example,
        })
      this.fs.copyTpl(
        this.templatePath('_config.js'),
        this.destinationPath(`./${this.props.name}/config.js`), {
          name: this.props.name,
          server: this.props.server,
          mongo: this.props.mongo,
          example: this.props.example,
        })
    },
    app: function () {
      var tplName = ''

      this.fs.copyTpl(
        this.templatePath('_emulator.js'),
        this.destinationPath(this.props.name + '/' + 'src/emulator.js'), {
          name: this.props.name,
          server: this.props.server,
          mongo: this.props.mongo,
          example: this.props.example,
        }
      )
      this.fs.copyTpl(
        this.templatePath('_bot.js'),
        this.destinationPath(this.props.name + '/' + 'src/bot.js'), {
          name: this.props.name,
          server: this.props.server,
          mongo: this.props.mongo,
          example: this.props.example,
        }
      )
      switch (this.props.server) {
        case 'microsoft bot connector':
          tplName = '_serverMicrosoft.js'
          break
        case 'slack':
          tplName = '_serverSlack.js'
          break
        case 'messenger':
          tplName = '_serverMessenger.js'
          break
        case 'kik':
          tplName = '_serverKik.js'
          break
        default:
          break
      }
      if (tplName) {
        this.fs.copyTpl(
          this.templatePath(tplName),
          this.destinationPath(`./${this.props.name}/src/server.js`), {
            name: this.props.name,
            server: this.props.server,
            mongo: this.props.mongo,
            example: this.props.example,
          }
        )
      }
      if (this.props.example === 'yes') {
        this.fs.copyTpl(
          this.templatePath('_actions/_greetings.js'),
          this.destinationPath(`./${this.props.name}/src/actions/greeting.js`), {
            name: this.props.name,
            server: this.props.server,
            mongo: this.props.mongo,
            example: this.props.example,
          }
        )
        this.fs.copyTpl(
          this.templatePath('_actions/_booking.js'),
          this.destinationPath(`./${this.props.name}/src/actions/booking.js`), {
            name: this.props.name,
            server: this.props.server,
            mongo: this.props.mongo,
            example: this.props.example,
          }
        )
        this.fs.copyTpl(
          this.templatePath('_actions/_information.js'),
          this.destinationPath(`./${this.props.name}/src/actions/information.js`), {
            name: this.props.name,
            server: this.props.server,
            mongo: this.props.mongo,
            example: this.props.example,
          }
        )
        this.fs.copyTpl(
          this.templatePath('_actions/_yes.js'),
          this.destinationPath(`./${this.props.name}/src/actions/yes.js`), {
            name: this.props.name,
            server: this.props.server,
            mongo: this.props.mongo,
            example: this.props.example,
          }
        )
        this.fs.copyTpl(
          this.templatePath('_actions/_no.js'),
          this.destinationPath(`./${this.props.name}/src/actions/no.js`), {
            name: this.props.name,
            server: this.props.server,
            mongo: this.props.mongo,
            example: this.props.example,
          }
        )
      }
    },
  },

  install: function () {
    var npmdir = process.cwd() + '/' + this.props.name
    process.chdir(npmdir)
    this.installDependencies({ bower: false })
  },
})
