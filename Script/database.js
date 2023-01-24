export class Database 
/**
 * class permettant de stocker et récupérer toutes les entités de notre restaurant
 * donc c'est à partir d'elle qu'on pourra:
 * -  enregistrer tous les menus, les tables, le personnel, les commandes...
 * -  elle va également nous permettre de récupérer la liste de nos entités afin de les modifier pour les stocker plus tard avec la méthode save
 * -  getOne nous permettra de récupérer un éléments à partir de son code 
 */


{
    key;
    data;
    code;
    saveTab = [];
    saveObj = {};
    indexData;

constructor(key)
{
    this.key = key

    this.data = this.get();

    this.saveTab = this.data;

    console.log(this.saveTab.length);
}




save(data)
    {
/**
 * la méthode save doit enregistrer pour chaque données JSON, les différents élements qui le constitue dans le localStorage
 * elle prend en paramètre une clé, permettant d'identifier les données à enregistrer et un ensemble de données en format json
 */
// convert object to JSON string
// using JSON.stringify()
/**
 * vu que data est un object, un JSON, si en parcourant ses différents élements, on constate que le code d'un object, est déja inclus dans 
 * le tableau, on le modifie
 */

if(this.saveTab.length == 0)
    {
        this.saveTab.push(data);

        const jsonData = JSON.stringify(this.saveTab);

        // save to localStorage

        localStorage.setItem(`${this.key}`, jsonData);

    }
else {

    for(let i = 0 ; i < this.saveTab.length ; i++){

        if(this.saveTab[i].code == data.code ){

            //indexData = this.saveTab.indexOf(data.code);
            // MENU OBJECTS
            this.saveTab[i].code = data.code;
            this.saveTab[i].image = data.image;
            this.saveTab[i].type = data.type;
            this.saveTab[i].rating = data.rating;
            this.saveTab[i].name = data.name;
            this.saveTab[i].numbersOfCalories = data.numbersOfCalories;
            this.saveTab[i].cookingTime = data.cookingTime;
            this.saveTab[i].price = data.price;
    
            // TABLE OBJECTS
            this.saveTab[i].places = data.places;
            this.saveTab[i].position = data.position;
            this.saveTab[i].shape = data.shape;

            // STAFF OBJECTS

            this.saveTab[i].nameStaff = data.nameStaff;
            this.saveTab[i].surnameStaff = data.surnameStaff;
            this.saveTab[i].numTelStaff = data.numTelStaff;
            this.saveTab[i].Capabitilities= data.Capabitilities;
            this.saveTab[i].imageStaff = data.imageStaff;
            this.saveTab[i].poste = data.poste;
            

            // after updated data in saveTab; convert the saveTab table to JSON (String) before add it to localStorage.
    
            const jsonData = JSON.stringify(this.saveTab);
    
            // save to localStorage
    
            localStorage.setItem(`${this.key}`, jsonData);

           break;
        }
       
// si data.code ne figure pas dans le tableau, alors la donnée json n'existe pas encore donc il faut l'ajouter dans le tableau
        if (this.saveTab[i].code != data.code && i == (this.saveTab.length -1) ) {

            //console.log("code saveTab" + this.saveTab[3].code + "code data" + data.code)

            this.saveTab.push(data);

            const jsonData1 = JSON.stringify(this.saveTab);

            // save to localStorage

            localStorage.setItem(`${this.key}`, jsonData1);

            break;
        }
        
        else {
            continue;
        }
    }
}
    
}

get()
    
        {
            let dataNotParse = localStorage.getItem(`${this.key}`)||'[]';

            // convert string to valid object
            let parsedDataObj = JSON.parse(dataNotParse);

            return parsedDataObj;

        }


getOne(code)
        {
    /**
     * recovers the code elemnts which is in the objects table or list that has key name
     * key is the name of my objects table and
     * code is the element that i want to display the value. 
     */
    //let myEntities = this.get(key);
    let res = this.get(this.key);
    return res.filter(re=>re.code==code);
    
    }
}