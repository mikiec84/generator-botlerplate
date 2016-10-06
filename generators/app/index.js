var generators = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var _ = require('lodash')

module.exports = generators.Base.extend({
  // The name `constructor` is important here
  constructor: function () {
    generators.Base.apply(this, arguments)
  },
  prompting: function () {
    // Have Yeoman greet the user.
    this.log('Welcome to the ' + chalk.red('Recast.AI Botlerplate') + ' generator!')

    var prompts = [{
      type: 'input',
      name: 'name',
      message: 'What name do you want for your project?',
      default: '',
    }, {
      type: 'list',
      name: 'sources',
      message: 'Would you like to to use sources or module of botlerplate?',
      choices: ['sources', 'module']
    }, {
      type: 'confirm',
      name: 'mongo',
      message: 'Would you like to enable mongodb?',
      default: false,
    }, {
      type: 'list',
      name: 'server',
      message: 'Would you like to use microsoft bot connector ?',
      choices: ['microsoft bot connector', 'slack', 'messenger', 'kik', 'none']
    }, {
      type: 'list',
      name: 'test',
      message: 'Would you like to use ava or mocka for testing?',
      choices: ['ava', 'mocka', 'none']
    }];

    return this.prompt(prompts).then(function (props) {
      // To access props later use this.props.someAnswer;
      this.props = props
    }.bind(this))
  },

  writing: {
    config: function () {
      if (this.props.sources === 'module') {
        this.fs.copyTpl(
          this.templatePath('_package.json'),
          this.destinationPath(`./${this.props.name}/package.json`), {
            name: this.props.name,
            server: this.props.server,
            mongo: this.props.mongo,
            sources: this.props.sources,
          })
      }
      if (this.props.sources === 'module') {
        this.fs.copyTpl(
          this.templatePath('_config.js'),
          this.destinationPath(`./${this.props.name}/config.js`), {
            name: this.props.name,
            server: this.props.server,
            mongo: this.props.mongo,
            sources: this.props.sources,
          })
      }
    },
    app: function () {
      var that = this
      var tplName = ''

      if (this.props.sources === 'sources') {
        this.spawnCommand('git', ['clone', 'https://github.com/RecastAI/botlerplate.git', this.props.name])
        .on('close', function () {
          var npmdir = process.cwd() + `/${that.props.name}`
          process.chdir(npmdir)
          if (that.props.server === 'slack') {
            that.spawnCommand('npm', ['install', '--save', '@slack/client'])
          } else if (that.props.server === 'kik') {
            that.spawnCommand('npm', ['install', '--save', '@kikinteractive/kik'])
          } else if (that.props.server === 'microsoft bot connector') {
            that.spawnCommand('npm', ['install', '--save', 'express'])
            that.spawnCommand('npm', ['install', '--save', 'botbuilder'])
          } else if (that.props.server === 'messenger') {
            that.spawnCommand('npm', ['install', '--save', 'express'])
            that.spawnCommand('npm', ['install', '--save', 'body-parser'])
          }
        })
      }
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
          tplName = '_server.js'
          break
      }
      this.fs.copyTpl(
        this.templatePath(tplName),
        this.destinationPath(`./${this.props.name}/server.js`), {
          name: this.props.name,
          server: this.props.server,
          mongo: this.props.mongo,
          sources: this.props.sources,
        }
      )
    },
  },

  install: function () {
    this.installDependencies({ bower: false })
    if (this.props.sources === 'sourssces') {
      this.spawnCommand('git', ['clone', 'https://github.com/RecastAI/botlerplate.git', this.props.name])
      // var npmdir = process.cwd() + `/botlerplate`
      // process.chdir(npmdir);
    }
  },
})
