
const profileSection = (data) => {

    let output = '';

    data.forEach(member => {

        if (member.role === 'Manager') {

            output += `

            <figure class="card">
                <div class="card-header">
                    <h3 class="name">${member.name}</h3>
                    <h5 class="job-title"><i class="fas fa-mug-hot"></i>${member.role}</h5>
                </div>
        
                <figcaption class="card-body">
                    <ul class="info">
                        <li class="card-info card-id">id: ${member.id}</li>
                        <li class="card-info card-email">Email:<a href="mailto:${member.email}">
                                ${member.email}</a>
                        </li>
                        <li class="card-info card-number">office number: ${member.officeNumber}</li>
                    </ul>
                </figcaption>
            </figure>
            `;

        }

        if (member.role === 'Engineer') {

            output += `

            <figure class="card">
                <div class="card-header">
                    <h3 class="name">${member.name}</h3>
                    <h5 class="job-title"><i class="fas fa-glasses"></i>${member.role}</h5>
                </div>
        
                <figcaption class="card-body">
                    <ul class="info">
                        <li class="card-info card-id">id: ${member.id}</li>
                        <li class="card-info card-email">Email:<a href="mailto:${member.email}">
                                ${member.email}</a>
                        </li>
                        <li class="card-info card-github">GitHub: <a href="https://github.com/${member.gitHub}" target="_blank">${member.gitHub}</a></li>
                    </ul>
                </figcaption>
            </figure>
            `;

        }

        if (member.role === 'Intern') {

            output += `
                <figure class="card">
                    <div class="card-header">
                        <h3 class="name">${member.name}</h3>
                        <h5 class="job-title"><i class="fas fa-user-graduate"></i>${member.role}</h5>
                    </div>
            
                    <figcaption class="card-body">
                        <ul class="info">
                            <li class="card-info card-id">id: ${member.id}</li>
                            <li class="card-info card-email">Email:<a href="mailto:${member.email}">
                                    ${member.email}</a>
                            </li>
                            <li class="card-info card-number">School name: ${member.school}</li>
                        </ul>
                    </figcaption>
                </figure>
            `;

        }

    });
    return output;

}



// function to generate an entire webpage
const templateData = (data) => {

    const currentYear = new Date().getFullYear();
    return `

        <!DOCTYPE html>
        <html lang="en">
        
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Team Profile Generator</title>
            <link rel="stylesheet" href="../dist/styles.css">
        </head>
        
        <body>
        
            <div class="container">
                <header class="header">
                    <h1 class="title">My Team</h1>
                </header>
        
                <div class="main">
                    ${profileSection(data)}
             
                </div>
        
                <footer>&copy; Copyrights ${currentYear} || Created by Ebenezer Kankam</footer>
            </div>

            <script src="https://kit.fontawesome.com/0cb0e7b636.js" crossorigin="anonymous"></script>
        </body>
        
        </html>
    `;
};

// export templateData
module.exports = templateData;