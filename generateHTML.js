const colors = {
  green: {
    wrapperBackground: "#E6E1C3",
    headerBackground: "#C1C72C",
    headerColor: "black",
    photoBorderColor: "#black"
  },
  blue: {
    wrapperBackground: "#5F64D3",
    headerBackground: "#26175A",
    headerColor: "white",
    photoBorderColor: "#73448C"
  },
  pink: {
    wrapperBackground: "#879CDF",
    headerBackground: "#FF8374",
    headerColor: "white",
    photoBorderColor: "#FEE24C"
  },
  red: {
    wrapperBackground: "#DE9967",
    headerBackground: "#870603",
    headerColor: "white",
    photoBorderColor: "white"
  }
};

function generateHTML(data) {
  return `<!DOCTYPE html>
<html lang="en">
   <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"/>
      <link href="https://fonts.googleapis.com/css?family=BioRhyme|Cabin&display=swap" rel="stylesheet">
      <title>Document</title>
      
      <body>
      <div>
      <h1 style="color:${data.data.color};">${data.data.name}</h1>
      <hr>
      <img src="${data.data.avatar_url}" alt="Users Profile Image" width="250" height="250">
      <p>${data.data.bio}</p>
      <p>${data.data.company}</p>
      <p> Repo URL: <a href="${data.data.repos_url}">${data.data.name}'s Repo</a>
      <p>Public Repos: ${data.data.public_repos}</p>
      <p>Followers: ${data.data.followers}</p>
      <p>Following: ${data.data.following}</p>
      <p>Location: ${data.data.location}</p>
      </div>
     </body>
     </html>`
        }

        module.exports = generateHTML;