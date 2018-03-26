require('dotenv').config();
const express = require('express');
const { join }  = require('path');
const bodyParser = require('body-parser');
const request = require('request');
const chalk = require('chalk');

const log = console.log;
const port = 2000;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/api/git', (req, res) => {
  log(`
  ${chalk.cyan('sending query: \n')}
  ${chalk.magenta(JSON.stringify(req.body, null, 2))}
  `);
  const options = {
    method: 'POST',
    uri: 'https://api.github.com/graphql',
    body: req.body,
    headers: {
      'User-Agent': 'Pancake',
      Authorization: `bearer ${process.env.GITHUB_TOKEN}`
    },
    json: true
  };

  request(options, (err, reqRes, body) => {
    if (err) {
      console.log(err);
    } else {
      log(`${chalk.green('response: \n')} ${chalk.green(JSON.stringify(body, null, 2))} `);
      res.json(body)
    }
  })
})

app.listen(port, () => {
  log(chalk.cyan(`Now listening on port: ${port}`));
});

