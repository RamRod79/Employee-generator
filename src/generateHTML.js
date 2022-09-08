const generateTeam = function (team) {
  let html = "";

  team.managers.forEach(function (manager) {
    html += `
    <article class="col-md-4 pb-3">
    <div class="card">
      <div class="card-header" style="background-color: blue; color: whitesmoke">
        <h2>${manager.getName()}</h2>
      </div>
       <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${manager.getId()}</li>
        <li class="list-group-item">Email: ${manager.getEmail()}</li>
        <li class="list-group-item">Office Number: ${manager.getOfficeNumber()}</li>
      </ul>
    </div>
  </article>
    `;
  });

team.engineers.forEach(function(engineer){
  html += `
  <article class="col-md-4 pb-3">
  <div class="card">
    <div class="card-header" style="background-color: blue; color: whitesmoke">
      <h2>${engineer.getName()}</h2>
    </div>
     <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${engineer.getId()}</li>
      <li class="list-group-item">Email: ${engineer.getEmail()}</li>
      <li class="list-group-item">GitHub: ${engineer.getGitHub()}</li>
    </ul>
  </div>
</article>
  `;
})

team.interns.forEach(function(intern){
  html += `
  <article class="col-md-4 pb-3">
  <div class="card">
    <div class="card-header" style="background-color: blue; color: whitesmoke">
      <h2>${intern.getName()}</h2>
    </div>
     <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${intern.getId()}</li>
      <li class="list-group-item">Email: ${intern.getEmail()}</li>
      <li class="list-group-item">School: ${intern.getSchool()}</li>
    </ul>
  </div>
</article>
  `;
})

  return html;
};

const generateHTML = function (team) {
  console.log(team);
  return `
    <!DOCTYPE html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />

    <!-- Bootstrap CSS -->
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css"
      integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N"
      crossorigin="anonymous"
    />

    <title>My Team!</title>
  </head>
  <body>
    <header
      class="container-fluid text-center p-5" style="background-color: rgb(192, 29, 29); color: whitesmoke">
      <h1>My Team</h1>
    </header>
    <main class="container text-center p-5">
      <section class="row">
        ${generateTeam(team)}
      </section>
    </main>
  </body>
</html>
    `;
};

module.exports = generateHTML;
