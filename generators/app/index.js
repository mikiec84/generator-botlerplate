var generators = require('yeoman-generator')
var chalk = require('chalk')
var yosay = require('yosay')
var _ = require('lodash')
var fs = require('fs')

module.exports = generators.Base.extend({
  // The name `constructor` is important here
  constructor: function () {
    generators.Base.apply(this, arguments)
  },
  prompting: function () {
    // Have Yeoman greet the user.
    this.log('Welcome to the ' + chalk.yellow('Recast.AI Botlerplate') + ' generator!')

    var prompts = [{
      type: 'input',
      name: 'name',
      message: 'What name do you want for your project?',
      default: 'my-bot',
    }, {
      type: 'list',
      name: 'sources',
      message: 'Would you like to to use sources or module of botlerplate?',
      choices: ['sources', 'module'],
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
      if (this.props.sources === 'module') {
        this.fs.copyTpl(
          this.templatePath('_package.json'),
          this.destinationPath(`./${this.props.name}/package.json`), {
            name: this.props.name,
            server: this.props.server,
            mongo: this.props.mongo,
            sources: this.props.sources,
            example: this.props.example,
          })
      }
      this.fs.copyTpl(
        this.templatePath('_config.js'),
        this.destinationPath(`./${this.props.name}/config.js`), {
          name: this.props.name,
          server: this.props.server,
          mongo: this.props.mongo,
          sources: this.props.sources,
          example: this.props.example,
        })
    },
    app: function () {
      var that = this
      var tplName = ''

      // if (this.props.sources === 'sources') {
      //   this.spawnCommand('git', ['clone', 'https://github.com/RecastAI/botlerplate.git', this.props.name])
      //     .on('close', function () {
      //       var npmdir = process.cwd()// + '/' + that.props.name
      //       process.chdir(npmdir)
      //       // update botlerplate's package.json
      //       var pkgContent = fs.readFileSync('package.json')
      //       var pkg = JSON.parse(pkgContent)
      //       pkg.name = that.props.name
      //       pkg.description = ''
      //       pkg.main = 'build/server.js'
      //       delete pkg.ava
      //       pkg.author = ''
      //       pkg.license = ''
      //       if (that.props.server === 'slack') {
      //         pkg.dependencies['@slack/client'] = '^3.6.0'
      //       } else if (that.props.server === 'kik') {
      //         pkg.dependencies['@kikinteractive/kik'] = '^2.0.10'
      //       } else if (that.props.server === 'microsoft bot connector') {
      //         pkg.dependencies['express'] = '^4.14.0'
      //         pkg.dependencies['botbuilder'] = '3.1.1'
      //       } else if (that.props.server === 'messenger') {
      //         pkg.dependencies['express'] = '^4.14.0'
      //         pkg.dependencies['body-parser'] = '^1.15.2'
      //         pkg.dependencies['request'] = '^2.75.0'
      //       }
      //       fs.writeFileSync('package.json', JSON.stringify(pkg, null, 2))
      //       that.spawnCommand('rm', ['config.js']).on('close', function() {
      //         that.fs.copyTpl(
      //           that.templatePath('_config.js'),
      //           that.destinationPath(`./${that.props.name}/config.js`), {
      //             name: that.props.name,
      //             server: that.props.server,
      //             mongo: that.props.mongo,
      //             sources: that.props.sources,
      //             example: that.props.example,
      //           })
      //         that.installDependencies({ bower: false })
      //       })
      //     })
      // }
      if (this.props.sources === 'sources') {
        var files = ['bot.js', 'action.js', 'emulator.js', 'conversation.js']
        var that = this
        files.forEach(function (file) {
          that.fs.copyTpl(
            that.templatePath('_core/_' + file),
            that.destinationPath(that.props.name + '/' + 'src/core/' + file), {
              name: that.props.name,
              server: that.props.server,
              mongo: that.props.mongo,
              sources: that.props.sources,
              example: that.props.example,
            }
          )
        })
        this.fs.copyTpl(
          this.templatePath('_package_src.json'),
          this.destinationPath(this.props.name + '/package.json'), {
            name: this.props.name,
            server: this.props.server,
            mongo: this.props.mongo,
            sources: this.props.sources,
            example: this.props.example,
          }
        )
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
          break
      }
      if (tplName) {
        this.fs.copyTpl(
          this.templatePath(tplName),
          this.destinationPath(`./${this.props.name}/src/server.js`), {
            name: this.props.name,
            server: this.props.server,
            mongo: this.props.mongo,
            sources: this.props.sources,
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
            sources: this.props.sources,
            example: this.props.example,
          }
        )
        this.fs.copyTpl(
          this.templatePath('_actions/_booking.js'),
          this.destinationPath(`./${this.props.name}/src/actions/booking.js`), {
            name: this.props.name,
            server: this.props.server,
            mongo: this.props.mongo,
            sources: this.props.sources,
            example: this.props.example,
          }
        )
        this.fs.copyTpl(
          this.templatePath('_actions/_information.js'),
          this.destinationPath(`./${this.props.name}/src/actions/information.js`), {
            name: this.props.name,
            server: this.props.server,
            mongo: this.props.mongo,
            sources: this.props.sources,
            example: this.props.example,
          }
        )
        this.fs.copyTpl(
          this.templatePath('_actions/_yes.js'),
          this.destinationPath(`./${this.props.name}/src/actions/yes.js`), {
            name: this.props.name,
            server: this.props.server,
            mongo: this.props.mongo,
            sources: this.props.sources,
            example: this.props.example,
          }
        )
        this.fs.copyTpl(
          this.templatePath('_actions/_no.js'),
          this.destinationPath(`./${this.props.name}/src/actions/no.js`), {
            name: this.props.name,
            server: this.props.server,
            mongo: this.props.mongo,
            sources: this.props.sources,
            example: this.props.example,
          }
        )
        this.fs.copyTpl(
          this.templatePath('_core/_emulator.js'),
          this.destinationPath(`./${this.props.name}/src/core/emulator.js`), {
            name: this.props.name,
            server: this.props.server,
            mongo: this.props.mongo,
            sources: this.props.sources,
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
