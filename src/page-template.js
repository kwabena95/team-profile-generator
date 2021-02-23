
const profileSection = (data) => {

    let output = '';

    data.forEach(member => {

        if (member.role === 'Manager') {

            output += `

            <figure class="card">
                <div class="card-header">
                    <h3 class="name">${member.name}</h3>
                    <h5 class="job-title">${member.role}</h5>
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
                    <h5 class="job-title">${member.role}</h5>
                </div>
        
                <figcaption class="card-body">
                    <ul class="info">
                        <li class="card-info card-id">id: ${member.id}</li>
                        <li class="card-info card-email">Email:<a href="mailto:${member.email}">
                                ${member.email}</a>
                        </li>
                        <li class="card-info card-number">office number: ${member.gitHub}</li>
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
                        <h5 class="job-title">${member.role}</h5>
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
        
            </div>
        
        </body>
        
        </html>
    `;
};

// export templateData
module.exports = templateData;