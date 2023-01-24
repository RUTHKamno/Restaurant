import { Database } from "./database.js";

// let displayMenu = document.getElementById("displayMenu");

// displayMenu.addEventListener("click", () => {
//     alert("je suis ruth");
// })


// CLASS DATABASE


// CLASS MENU

let numMenu = 0;

export class Menu 
{
    code;
    price;
    type;
    photo;
    temps_préparation;
    tabMenu = []; // I recover my objects table which content all food menu with the key menuTab.
    menuObj = {};


    
    constructor()
    {
        
       
        this.tabMenu = new Database('menuTab');
        this.MenuId = numMenu++;
        console.log(this.tabMenu)
    }

    afficher()
    {
        //alert("saluttttttt")
        /**
        * cette méthode fera appel à la méthode get de la classe Database pour afficher les menus en utilisant la fonction map 
        * pour agir sur chaque élement du tableau en paramètre
        */
       

        let myMenu = this.tabMenu.get();

        // console.log("MY MENU")

        // console.log(myMenu);

        if(myMenu.length == 0)
        {
            alert ("Your stock is empty, you need to add menu");
        }

        else 
        {
            let parentDiv = document.getElementById("menu-dish");

            myMenu.map((menu) => 

            {
                //console.log("je suis un menu");
                let myNewDivMenuCSS = document.createElement("div");
                myNewDivMenuCSS.classList.add("col-lg-4");
                myNewDivMenuCSS.classList.add("col-sm-6");
                myNewDivMenuCSS.classList.add("dish-box-wp");
                myNewDivMenuCSS.classList.add(`${menu.type}`);
                myNewDivMenuCSS.dataset.cat = `${menu.type}`;
                myNewDivMenuCSS.dataset.menu = `${menu.code}`;

                myNewDivMenuCSS.innerHTML = 

                ` <div class="dish-box text-center">
                <div class="dist-img">
                <img src=../food-website/assets/images/dish/${menu.image}>
                </div>
                <div class="dish-rating">
                 ${menu.rating}
                <i class="uil uil-star"></i>
                </div>
                <div class="dish-title">
                <h3 class="h3-title">${menu.name}</h3>
                <p>${menu.numbersOfCalories + "Grammes"}</p>
                </div>
                <div class="dish-info">
                <ul>
                <li>
                    <p>Type</p>
                    <b>${menu.type}</b>
                </li>
                <li>
                    <p>Cooking Time</p>
                    <b>${menu.cookingTime + "h"}</b>
                </li>
                </ul>
                </div>
                <div class="dist-bottom-row">
                <ul>
                <li>
                    <b>${menu.price + "Fcfa"}</b>
                </li>
                
                <li>
                    <button class="dish-add-btn">
                    <i class="uil uil-edit" data-menu = ${menu.code}></i>
                    </button>
                    
                </li>
                <li>
                    <button class="dish-add-btn">
                    <i class="uil uil-times-square" data-menu = ${menu.index} id="delMenu"></i>
                    </button>
                                    
                </li>
                </ul>
                </div>
                </div> `

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
        let parentDiv = document.getElementById("editMenu");
        // myParentDiv.innerHTML = code

       let  myObjects = this.tabMenu.getOne(code);

        console.log(myObjects);
            parentDiv.innerHTML = `
            <form action="" class="form text-center" >
                 <span></span>
                <span></span>
                <span></span>
                <span></span>
                <div class="form-inner">
                    <h2>EDIT Menu ${myObjects[0].code} </h2>
                    <div class="content">
                        <label for = "typeMenu"> Image </label>
                        <input class="input" type="file" id="imageMenu" />

                        <label for = "typeMenu"> Name </label>
                        <input class="input" type="text" value="${myObjects[0].name}" id="nameMenu" />

                        <label for = "typeMenu"> Type </label>
                        <input class="input" type="text" value="${myObjects[0].type}" id="typeMenu" />
                        <label for = "ratingOfMenu"> Rating </label> 
                        <input class="input" type="text" value="${myObjects[0].rating}" id="ratingOfMenu" />
                        <label for = "caloriesMenu"> calories </label> 
                        <input class="input" type="text" value="${myObjects[0].numbersOfCalories}" id="caloriesMenu" />
                        <label for = "cookingMenu"> For how long ? </label> 
                        <input class="input" type="text" value="${myObjects[0].cookingTime}" id="cookingMenu" />
                        <label for = "priceMenu"> price </label> 
                        <input class="input" type="text" value="${myObjects[0].price}FCFA" id="priceMenu" />

                        <button class="btn" id="EditBtn">Edit</button>
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

        // console.log(codeSupp)
        this.myObject = this.tabMenu.get();

            console.log(this.myObject)

            let choice = prompt("voulez vous vraiment supprimer ce produit?");

            if(choice.toLowerCase() == "oui") {

                this.myObject.splice((codeSupp - 1), 1);

                console.log(this.myObject);

                localStorage.removeItem('menuTab');

                const jsonData = JSON.stringify(this.myObject);

                // save to localStorage

                localStorage.setItem("menuTab", jsonData);

                // console.log(myObject)

                //this.orderTab.save(myObject);
                
                // this.orderTab.save(this.myObject); 
            }  
    // }




    }


    ajouter()
    {

        let Img = document.getElementById("imageMenu");

        let Name = document.getElementById("nameMenu");

        let Type = document.getElementById("typeMenu");

        let rating = document.getElementById("ratingOfMenu");

        let numbersOfCalories = document.getElementById("caloriesMenu");

        let cookingTime = document.getElementById("cookingMenu");

        let priceMenu = document.getElementById("priceMenu");

        // get the image Source
    
        // create objects menuObj with those attributs

        //this.menuObj = {}; // we trash the object to updated it later.
        
        //Img.addEventListener("change", () => {

            var ImgSource = Img.value;

            var splits = ImgSource.split('fakepath\\');

            this.menuObj.image = splits[1];
       // })

        this.menuObj.code = (Name.value + "1");

        this.menuObj.index = this.MenuId;

        this.menuObj.name = Name.value ;

        this.menuObj.type = Type.value ;

        this.menuObj.rating = rating.value ;

        this.menuObj.numbersOfCalories = numbersOfCalories.value ;

        this.menuObj.cookingTime = cookingTime.value ;

        this.menuObj.price = priceMenu.value ;

        console.log(this.menuObj);

        this.tabMenu.save(this.menuObj);

        //new Database('menuTab').save(this.menuObj);

    }

}


//     /**
//      * cette méthode fera appel à la méthode save de la classe Database pour enregistrer les menus ajouté 
//      */


