const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const Manager = require('../lib/Manager');
const TeamMember = require('../lib/Team-member');


const managerSection = (data) => {

    return `
        ${data.forEach(profile => {

        // for (let prof in profile) {

        return `

                    <figure class="card">
                    <div class="card-header">
                        <h3 class="name">${profile.Manager.name}</h3>
                        <h5 class="job-title">Manager</h5>
                    </div>
            
                    <figcaption class="card-body">
                        <ul class="info">
                            <li class="card-info card-id">id: ${profile.Manager.id}</li>
                            <li class="card-info card-email">Email:<a href="mailto:${prof.Manager.email}">
                                    ${profile.Manager.email}</a>
                            </li>
                            <li class="card-info card-number">office number: ${profile.Manager.officeNumber}</li>
                        </ul>
                    </figcaption>
                
                `

        // }

    })}

    `;
};

// const memberSection = (data) =>{

//     return `



//     `

// };














// function to generate an entire webpage

const templateData = (data) => {

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
                    ${managerSection(data)}
                </div>
        
            </div>
        
        </body>
        
        </html>
    `;
};

// export templateData
module.exports = templateData;