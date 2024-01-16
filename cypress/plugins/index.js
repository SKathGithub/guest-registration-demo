
const cucumber = require('cypress-cucumber-preprocessor').default;
const fs = require('fs')

module.exports = (on, config) => {

  on('file:preprocessor', cucumber())
  on('task', {
    getFileName(folderName) {
      return new Promise((resolve, reject) => {
        fs.readdir(folderName, (err, files) => {
          if (err) {
            return reject(err)
          }

          if(files.length>0){
            return resolve(files[0])
          }
          reject (undefined)
        })
      })
    },
  })
}

