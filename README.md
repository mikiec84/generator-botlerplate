# Recast.AI - Generator Botlerplate

[logo]: https://github.com/RecastAI/SDK-NodeJs/blob/master/misc/logo-inline.png "Recast.AI"

![alt text][logo]

Recast.AI's official Generator Botlerplate in Node.js with [Yeoman](https://yeoman.io)

## Synospis

This module is a generator that will help you easily start your project!


For more instructions on the Botlerplate, go to [Github Botlerplate](https://github.com/RecastAI/botlerplate)

## Installation

```bash
npm install -g generator-botlerplate
```
## Usage

```bash
yo botlerplate
```

When asked for a project name:

[logo2]: https://github.com/RecastAI/generator-botlerplate/blob/features/prompt/generators/app/ressources/name.png "Recast.AI"

![alt text][logo2]

Enter the name you want for your bot, example: myFirstSlackBot.



Then, choose if you prefer to use the sources of the botlerplate, with all ressources directly available,
or the module, if you'd rather have a started project to work on but use the node module of the Botlerplate. Either way, you'll have something to start working on. 

[logo3]: https://github.com/RecastAI/generator-botlerplate/blob/features/prompt/generators/app/ressources/source.png "Recast.AI"

![alt text][logo3]

Select your preferences, and the Botlerplate will take care of the rest.



Next step is choosing if you need a mongoDB or not.

[logo4]: https://github.com/RecastAI/generator-botlerplate/blob/features/prompt/generators/app/ressources/mongo.png "Recast.AI"

![alt text][logo4]

If you want a mongoDB, the required package will be installed. You just need to fill the config.js when all steps are completed. You can also install it after, no problems.



When asked for the connector you want to use, choose between Slack, Messenger, Kik, Microsoft Bot connector, or just don't connect your bot.
This connector will automatically connect your bot to the chosen channel. You will directly have the server you need, so it's easier for you.

[logo5]: https://github.com/RecastAI/generator-botlerplate/blob/features/prompt/generators/app/ressources/connector.png "Recast.AI"

![alt text][logo5]


In this last step, decide if you want to have an example intent or not. The example given is a bot explaining you how to start with Recast.AI.
You can always refer to our documentation for further information.
The intents you'll get as an example are the ones from the bot you automatically have when registering on [Recast.AI](https://recast.ai).


[logo6]: https://github.com/RecastAI/generator-botlerplate/blob/features/prompt/generators/app/ressources/example.png "Recast.AI"

![alt text][logo6]

Press enter, and let the generator do the rest! 

Everything you need is created in a folder with your project's name.


[logo7]: https://github.com/RecastAI/generator-botlerplate/blob/features/prompt/generators/app/ressources/end.png "Recast.AI"

![alt text][logo7]

```bash
cd myFirstSlackBot/
```

You have a folder with your config.js, all your modules installed, your package.json, and src direcotry with a starter-pack of the channel you chose.

[logo8]: https://github.com/RecastAI/generator-botlerplate/blob/features/prompt/generators/app/ressources/ls.png "Recast.AI"

![alt text][logo8]
[logo9]: https://github.com/RecastAI/generator-botlerplate/blob/features/prompt/generators/app/ressources/src.png "Recast.AI"

![alt text][logo9]

Here it is!


You now have your own chatbot. Improve this code to make an even more amazing and custom bot!


Don't forget to improve your config.js file, and to start using it, use this command:


npm start: builds and runs the server,


npm run server: runs the server for development (with live reload)


npm run build: builds all the sources from es6 to es5


npm run emulator: tests your bot on your terminal


## More

You can find more information about Recast.AI on [man.recast.ai](https://man.recast.ai).

## Author

Bruno Gantelmi (bruno.gantelmi@recast.ai) - Recast.AI

François Triquet (francois.triquet@recast.ai) - Recast.AI

You can follow us on Twitter at [@recastai](https://twitter.com/recastai) for updates and releases.

## License

Copyright (c) [2016] [Recast.AI](https://recast.ai)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
