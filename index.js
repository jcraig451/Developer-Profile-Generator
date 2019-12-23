const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const axios = require("axios");
const pdf = require('html-pdf');
const writeFile = util.promisify(fs.writeFile);

function promptUser() {
  return inquirer.prompt([
    {
      type: "input",
      name: "username",
      message: "What is your GitHub Username?"
    },
    {
      type: "list",
      message: "What is your favorite color?",
      name: "color",
      choices: [
        "Red",
        "Green",
        "Blue",
        "Orange"
      ]
    }
  ])
}
function generateHTML(data) {
  return `<!DOCTYPE html>
<html lang="en">
   <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"/>
      <link href="https://fonts.googleapis.com/css?family=Playball&display=swap" rel="stylesheet">
      <title>Document</title>
      <style>
      h1{
         margin: 2px;
      }
      body{
         background-color: gray;
         width: 100%;
         padding-top: 0px;
         margin-top: 0px;
      }
      #heading {
         background-color: black;
         position: fixed;
         top: 0px;
         left: 0px;
         width: 100%;
         height: 60px;
         text-align: center;
      }
      #container{
         width: 80%;
         margin-top: 80px;
         margin-left: auto;
         margin-right: auto;
         height: auto;
         background-color: white;
         padding: 5px;
         box-shadow: 0px 0px 15px black;
      }
      #img-container{
         padding: 20px;
         position: relative;
         float: left;
         width: 50%;
      }
      #bio-conatiner{
         position: relative;
         float: left;
         width: 50%;
         height: wrap;
      }
   </style>
   </head>
      <body>
      <div>
      <div id="heading">
      <h1 style="color:${data.data.color}; font-family: 'Playball', cursive;">${data.data.name}</h1>
      </div>
      <div id="container">
         <div id="img-container">
      <img src="${data.data.avatar_url}" alt="Users Profile Image" width="250" height="250">
      </div>
      <div id="bio-container">
      <p>Bio: ${data.data.bio}</p>
      <p>Works at: ${data.data.company}</p>
      <p>GitHub URL: <a href="${data.data.html_url}">${data.data.name}'s Account</a>
      <p>Public Repos: ${data.data.public_repos}</p>
      <p>Followers: ${data.data.followers}</p>
      <p>Following: ${data.data.following}</p>
      <p>Location: ${data.data.location}</p>
      </div>
      </div>
</div>
</body>
</html>`
}

function init() {
  promptUser().then(function ({ username, color }) {
    const queryUrl = `https://api.github.com/users/${username}`;
    axios.get(queryUrl).then(function (data) {
      data.data.color = color;
      const html = generateHTML(data);




      writeFile("index.HTML", html);
      pdf.create(html).toFile('./index.pdf', function (err, res) {
        console.log("Congratulations you have successfully created both index.html & index.pdf");
      });

    });
  });
}
init();
