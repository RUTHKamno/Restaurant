import { Database } from "./database.js";
let numbPlaces = 0;
export class Table {
    
    placeNumber;
    shape;
    position;
    tabTable = []; // I recover my objects table which content all food menu with the key menuTab.
    tableObj = {};
    
    
    constructor()
    {
        
        this.tabTable = new Database('tableTab');
        this.tableId = numbPlaces++;
        console.log(this.tabTable);

    }


    afficher()
    {
        //alert("saluttttttt")
        /**
        * cette méthode fera appel à la méthode get de la classe Database pour afficher les menus en utilisant la fonction map 
        * pour agir sur chaque élement du tableau en paramètre
        */
       

        let myTable = this.tabTable.get();

        if(myTable.length == 0)
        {
            alert ("Your stock is empty, you need to add table");
        }

        else 
        {
            let parentDiv = document.getElementById("table");

            myTable.map((table) => 

            {
                console.log("je suis une table");
                let myNewDivMenuCSS = document.createElement("div");
                myNewDivMenuCSS.classList.add("col-lg-4");
                myNewDivMenuCSS.classList.add("col-sm-6");
                myNewDivMenuCSS.classList.add("dish-box-wp");
                myNewDivMenuCSS.dataset.codeTable = `${table.code}`
                myNewDivMenuCSS.innerHTML = 
                
                ` <div class="dish-box text-center">
                <div class="dist-img">
                <img src="../ASSETS/${table.image}" alt="">
                </div>

            <div class="dish-title">
                <h3 class="h3-title">${table.places}</h3>
                <p>at the ${table.position}</p>
                <ul>
                    <li>
                        <b>${table.shape}</b>
                    </li>
                    <li>
                        <b>N° DE TABLE: ${table.code}</b>
                    </li>
                    
                </ul>
            </div>
            <div class="dist-bottom-row">
                <ul>
                    <li>
                        <button class="dish-add-btn">
                            <i class="uil uil-edit" data-menu = ${table.code}></i>
                        </button>
                    </li>
                    <li>
                        <button class="dish-add-btn">
                            <i class="uil uil-times-square" data-menu = ${table.index}></i>
                        </button>
                        
                    </li>
                </ul>
            </div>`

                //console.log(myNewDivMenuCSS.attributes[2].nodeValue);
                
               parentDiv.appendChild(myNewDivMenuCSS);

            //    let delMenuBtn = document.getElementById("delMenu");
            //     let deleteMenuData = delMenuBtn.getAttribute("data-menu");
            //     if (deleteMenuData) {
            //         console.log(deleteMenuData)
            //     }
            //     else {
            //         console.log("nothing data-menu");
            //     }
            })

        }

    }

    editer(code)
    {
        let parentDiv = document.getElementById("editTable");
        // myParentDiv.innerHTML = code

       let  myObjects = this.tabTable.getOne(code);

        console.log(myObjects);
            parentDiv.innerHTML = `
            <form action="" class="form text-center" >
                 <span></span>
                <span></span>
                <span></span>
                <span></span>
                <div class="form-inner">
                    <h2>EDIT Table ${myObjects[0].code} </h2>
                    <div class="content">
                        <label for = "typeMenu"> Image </label>
                        <input class="input" type="file" id="imageTable" />
                        <label for = "Code"> Code </label>
                        <input class="input" type="text" value="${myObjects[0].code}" id="codeTable" />

                        <label for = "typeMenu"> Shape </label>
                        <input class="input" type="text" value="${myObjects[0].shape}" id="shapeTable" />

                        <label for = "typeMenu"> Wher ? </label>
                        <input class="input" type="text" value="${myObjects[0].position}" id="positionOfTable" />
                        <label for = "ratingOfMenu"> How Many Places? </label> 
                        <input class="input" type="number" value="${myObjects[0].places}" id="numbTable" />

                        <button class="btn" id="EditTableBtn">Edit</button>
                    </div>
                </div>
            </form>` 


            
    }

   
    supprimer(codeSupp)

    /**
     * cette méthode fera appel d'abord à la méthode getOne pour supprimer un menu particulier à partir de son code ensuite à la méthode save
     * afin de supprimer les données modifiées
     */
    {

        // console.log("code" + codeSupp)
        this.myObject = this.tabTable.get();

            // console.log(this.myObject)

            let choice = prompt("voulez vous vraiment supprimer ce produit?");

            if(choice.toLowerCase() == "oui") {

                this.myObject.splice((codeSupp - 1), 1);

                console.log(this.myObject);

                localStorage.removeItem('tableTab');

                const jsonData = JSON.stringify(this.myObject);

                // save to localStorage

                localStorage.setItem("tableTab", jsonData);

                // // console.log(myObject)

                // //this.orderTab.save(myObject);
                
                // // this.orderTab.save(this.myObject); 
            }  
    }

    

    editTable (){
        let Img = document.getElementById("imageTable");

        let shape = document.getElementById("shapeTable");

        let codeTable = document.getElementById("codeTable");

        let position = document.getElementById("positionOfTable");

        let numbOfPlaces = document.getElementById("numbTable");

        // get the image Source
    
        // create objects menuObj with those attributs

        //this.menuObj = {}; // we trash the object to updated it later.
        
        //Img.addEventListener("change", () => {

            var ImgSource = Img.value;

            var splits = ImgSource.split('fakepath\\');

            this.tableObj.image = splits[1];
       // })

        this.tableObj.code = codeTable.value;

        this.tableObj.shape = shape.value ;

        this.tableObj.position = position.value ;

        this.tableObj.places = numbOfPlaces.value ;


        console.log(this.tableObj);

        this.tabTable.save(this.tableObj);

        //new Database('menuTab').save(this.menuObj);

    }

    

    ajouter()
    {

        let Img = document.getElementById("imageTable");

        let shape = document.getElementById("shapeTable");

        let position = document.getElementById("positionOfTable");

        let numbOfPlaces = document.getElementById("numbTable");

        // get the image Source
    
        // create objects menuObj with those attributs

        //this.menuObj = {}; // we trash the object to updated it later.
        
        //Img.addEventListener("change", () => {

            var ImgSource = Img.value;

            var splits = ImgSource.split('fakepath\\');

            this.tableObj.image = splits[1];
       // })

        this.tableObj.code = ("00" + this.tableId);

        this.tableObj.shape = shape.value ;

        this.tableObj.position = position.value ;

        this.tableObj.places = numbOfPlaces.value ;

        this.tableObj.index = this.tableId;


        console.log(this.tableObj);

        this.tabTable.save(this.tableObj);

        //new Database('menuTab').save(this.menuObj);

    }

}














