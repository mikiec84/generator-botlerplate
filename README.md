# Recast.AI - Generator Botlerplate

[logo]: https://github.com/RecastAI/SDK-NodeJs/blob/master/misc/logo-inline.png "Recast.AI"

![alt text][logo]

Recast.AI official Generator Botlerplate in Node.js with [Yeoman](https://yeoman.io)

## Synospis

This module is a generator for starting your project with a lot of strong bases.
<br />
For more instructions about Botlerplate, go to [Github Botlerplate](https://github.com/RecastAI/botlerplate)

## Installation

```bash
npm install -g generator-botlerplate
```
## Usage

```bash
yo botlerplate
```
<br />
He will ask you a name for your project:

[logo2]: https://github.com/RecastAI/generator-botlerplate/blob/features/prompt/generators/app/ressources/name.png "Recast.AI"

![alt text][logo2]

Just enter the name you want for your bot, example: myFirstSlackBot.<br />
<br />
After, choose if you prefer use the sources of the botlerplate, with all ressources for work directly on botlerplate,
or the module, if you prefer have a begin of project, but use the node module of botlerplate. In the two cases,
you will have a starter pack for begin easily your project.

[logo3]: https://github.com/RecastAI/generator-botlerplate/blob/features/prompt/generators/app/ressources/source.png "Recast.AI"

![alt text][logo3]

You just need to select your preference, and he will take care of all the rest.<br />
<br />
Next step is choosing if you need a mongoDB or not.

[logo4]: https://github.com/RecastAI/generator-botlerplate/blob/features/prompt/generators/app/ressources/mongo.png "Recast.AI"

![alt text][logo4]

If you want a mongoDB, he will install you the package for use it, and you just need to fill the config.js when all steps are done. If you don't, you can install it after, no problems.

<br />
<br />
He will ask you what connector you want to use, you have choices with Slack, Messenger, Kik, Microsoft Bot connector,or just don't connect your bot.
This connector will directly connect your bot to this chat. You will be directly have the server do you need, and it's will be more simple for you.

[logo5]: https://github.com/RecastAI/generator-botlerplate/blob/features/prompt/generators/app/ressources/connector.png "Recast.AI"

![alt text][logo5]

Select your favorite, and go for the last step !
<br />
<br />
This last step is for knowing if you want an example of some intents or not. This example is a little bot who can explain you better how to start with Recast.
Obviously you have a great documentation for this, but it can help to better understand all the same.
This intents are the first bot you automaticaly have if you register on [Recast.AI](https://recast.ai).


[logo6]: https://github.com/RecastAI/generator-botlerplate/blob/features/prompt/generators/app/ressources/example.png "Recast.AI"

![alt text][logo6]

Press enter, and let the generator do the rest ! 

He will install all of what u needed, in a repertory with your name project.


[logo7]: https://github.com/RecastAI/generator-botlerplate/blob/features/prompt/generators/app/ressources/end.png "Recast.AI"

![alt text][logo7]

```bash
cd myFirstSlackBot/
```

You will have a repertory with your config.js, all yours modules install, your package.json, and src with a starter-pack of one bot.

[logo8]: https://github.com/RecastAI/generator-botlerplate/blob/features/prompt/generators/app/ressources/ls.png "Recast.AI"

![alt text][logo8]
[logo9]: https://github.com/RecastAI/generator-botlerplate/blob/features/prompt/generators/app/ressources/src.png "Recast.AI"

![alt text][logo9]

Here is! <br />
<br />

You have your personnal smart Chat-bot. You can now improved this code, and make an amazing bot!
<br />
Don't forget to improved your config.js file, and for starting to use it, use this command:
<br />
<br />
npm start: builds and run the server,
<br />
npm run server: run the server for development (with live reload)
<br />
npm run build: builds all the from es6 to es5
<br />
npm run emulator: test your bot on your terminal
<br />
<br />
## More

You can view more information on recast on [man.recast.ai](https://man.recast.ai).

## Author

Bruno Gantelmi, bruno.gantelmi@recast.ai
<br />
François Triquet, francois.triquet@recast.ai

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
