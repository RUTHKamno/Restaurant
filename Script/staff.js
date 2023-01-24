import { Database } from "./database.js";
let numbStaff = 0;
export class Staff {
    staff_id = numbStaff++;
    surnameOfStaff;
    phoneOfStaff;
    tabStaff = []; // I recover my objects table which content all food menu with the key menuTab.
    staffObj = {};
    
    constructor()
    {
        this.tabStaff = new Database('staffTab');
        console.log(this.tabStaff);
    }

    afficher() {

        let myStaff = this.tabStaff.get();

        if(myStaff.length == 0)
        {
            alert ("Your stock is empty, you need to add Staff in your restaurant");
        }

        else 
        {
            let parentDiv = document.getElementById("staff");

            myStaff.map((employee) => 
            
            {
                console.log("je suis un employé");
                let myNewDivMenuCSS = document.createElement("div");
                myNewDivMenuCSS.classList.add("col-lg-4");
                myNewDivMenuCSS.classList.add("col-sm-6");
                myNewDivMenuCSS.classList.add("dish-box-wp");

                myNewDivMenuCSS.innerHTML = 

                ` <div class="dish-box text-center">
                <div class="dist-img">
                <img src="../ASSETS/${employee.imageStaff}"  alt="bonjour" >
                </div>
                <div class="dish-rating">
                 ${employee.Capabitilities}
                <i class="uil uil-star"></i>
                </div>
                <div class="dish-title">
                <h3 class="h3-title">${employee.nameStaff}</h3>
                <h3 class="h3-title">${employee.surnameStaff}</h3>
                </div>
                <div class="dish-info">
                <ul>
                <li>
                    <p>Phone Numbers</p>
                    <b>${employee.numTelStaff}</b>
                </li>
                <li>
                    <p>Occupation</p>
                    <b>${employee.poste}</b>
                </li>
                </ul>
                </div>
                <div class="dist-bottom-row">
                <ul>
                
                <li>
                    <button class="dish-add-btn">
                    <i class="uil uil-edit" data-staff = ${employee.code}></i>
                    </button>
                </li>
                <li>
                    <button class="dish-add-btn">
                    <i class="uil uil-times-square" data-del = ${employee.index}></i>
                    </button>
                                    
                </li>
                </ul>
                </div>
                </div> `
               parentDiv.appendChild(myNewDivMenuCSS);

            
            })

        }


    }

    supprimer(codeSupp)

    /**
     * cette méthode fera appel d'abord à la méthode getOne pour supprimer un menu particulier à partir de son code ensuite à la méthode save
     * afin de supprimer les données modifiées
     */
    {

        console.log(codeSupp)
        this.myObject = this.tabStaff.get();

            // console.log(this.myObject)

            let choice = prompt("voulez vous vraiment supprimer ce produit?");

            if(choice.toLowerCase() == "oui") {

                

                this.myObject.splice((codeSupp  - 1 ), 1);

                console.log(this.myObject);

                localStorage.removeItem('staffTab');

                const jsonData = JSON.stringify(this.myObject);

                // save to localStorage

                localStorage.setItem("staffTab", jsonData);

                // console.log(myObject)

                //this.orderTab.save(myObject);
                
                // this.orderTab.save(this.myObject); 
            }  
    }

    


    editer(code)
    {
        // console.log(code);
        let parentDiv = document.getElementById("editStaff");
        // myParentDiv.innerHTML = code

       let  myObjects = this.tabStaff.getOne(code);

        console.log(myObjects);
            parentDiv.innerHTML = `
            <form action="" class="form text-center" >
                 <span></span>
                <span></span>
                <span></span>
                <span></span>
                <div class="form-inner">
                    <h2>EDIT Employee ${myObjects[0].nameStaff} </h2>
                    <div class="content">
                        <label for = "typeMenu"> Image </label>
                        <input class="input" type="file" id="imageStaff" />

                        <label for = "typeMenu"> Name </label>
                        <input class="input" type="text" value="${myObjects[0].nameStaff}" id="nameStaff" />

                        <label for = "typeMenu"> Surname of Staff </label>
                        <input class="input" type="text" value="${myObjects[0].surnameStaff}" id="surnameStaff" />
                        <label for = "ratingOfMenu"> Phone number </label> 
                        <input class="input" type="text" value="${myObjects[0].numTelStaff}" id="numTelStaff" />
                        <label for = "caloriesMenu"> Poste </label> 
                        <input class="input" type="text" value="${myObjects[0].poste}" id="poste" />
                        <label for = "cookingMenu"> Capabilities </label> 
                        <input class="input" type="text" value="${myObjects[0].Capabitilities}" id="capabitilities" />

                        <button class="btn" id="EditStaffBtn">Edit</button>
                    </div>
                </div>
            </form>` 


            
    }
    

    ajouter()
    {

        let Img = document.getElementById("imageStaff");

        let Name = document.getElementById("nameStaff");

        let surnameOfStaff = document.getElementById("surnameStaff");

        let phoneNumberOfStaff = document.getElementById("numTelStaff");

        let Occupation = document.getElementById("poste");

        let Capabitilities = document.getElementById("capabitilities");

        

        // get the image Source
    
        // create objects menuObj with those attributs

        //this.menuObj = {}; // we trash the object to updated it later.
        
        //Img.addEventListener("change", () => {

            var ImgSource = Img.value;

            var splits = ImgSource.split('fakepath\\');

            this.staffObj.imageStaff = splits[1];

            //console.log(ImgSource);
       // })

        this.staffObj.nameStaff = Name.value ;

        this.staffObj.surnameStaff = surnameOfStaff.value ;

        this.staffObj.numTelStaff = phoneNumberOfStaff.value ;

        this.staffObj.index = this.staff_id;

        this.staffObj.poste = Occupation.value ;

        this.staffObj.Capabitilities = Capabitilities.value;

        this.staffObj.code = (surnameOfStaff.value + "1");

        console.log(this.staffObj);

        this.tabStaff.save(this.staffObj);

        //new Database('menuTab').save(this.menuObj);

    }


}
