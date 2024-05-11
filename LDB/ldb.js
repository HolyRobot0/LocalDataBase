const fs = require('fs'); //FileSystem
const prompt = require('prompt-sync')();

// const name = prompt('What is your name?');
// console.log(`Hey there ${name}`);

class LDB{

    constructor(DBname,motherPath){
        this.DBname = DBname;
        this.path = motherPath;
        
        if (!fs.existsSync(`../${motherPath}`)){
            var input = prompt(`Le dossier mère n'existe pas. Voulez-vous le créer ?(y/n)`);
            if(input==='y') {
                fs.mkdir(`../${motherPath}`);
                console.log(`Dossier mère créé.`);
                fs.mkdir(`../${motherPath}/${DBname}`);
                console.log(`La base de donnée ${DBname} est établie.`);
            } else {
                console.log('Interruption de la création de la base de donnée.');
            }
        } else {
            fs.mkdir(`../${motherPath}/${DBname}`);
            console.log(`La base de donnée ${DBname} est établie.`);
        }
        
    }


}



module.exports = {LDB};