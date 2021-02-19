// import  file system
const fs = require('fs');

// write to file
const writeFile = (data) => {
    return new Promise((resolve, reject) => {

        fs.writeFile('../dist/index.html', data, err => {

            // check for error
            if (err) {
                reject(err);
                return;
            }

            // if success
            resolve({
                ok: true,
                message: 'File created!'
            });

        });

    });

};

// export writefile
module.exports = writeFile;