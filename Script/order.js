import { Database } from "./database.js";
import { Table } from "./table.js";

import {Menu } from "./menu.js";

// import { Staff } from "./staff.js";

// import { Table } from "./table.js";

let numbPlaces = 0;

export class Order 
{
    
    dataOrder;
    contenu;
    tabTable;
    myObject = {};
    orderObj = {};
    orderTab = [];
    
/**
 * une commande est caractérisé par un numéro unique, un numéro_de_table aynt passé la commande, le menu d'une personne, 
 * [{
 * ID: CMD001,
 * TABLE:2
 * MENU:POULET
 * BOISSON:NONE
 * NBRE_PER_SUR_LA_TABLE_AYANT_PASSE_LA_COMMANDE = 5,
 * PRIX_COMMANDE // il sera donné en fonction du menu choisi
 * }]
 */

    constructor()
    {
        this.tabTable = new Database('tableTab');
        this.tabMenu = new Database('menuTab');
        this.orderTab = new Database('orderTab');
        this.order_id = numbPlaces++;
        console.log(this.orderTab);

    }

    afficher()
    {

        let myOrder = this.orderTab.get();

        if(myOrder.length == 0)
        {
            alert ("Your stock is empty, you need to add Order");

        }

        else {

            let myParentDiv = document.getElementById("AllOrder");

            myOrder.map((order) => {
                
                let myDiv = document.createElement("div");
                myDiv.classList.add("col-lg-4");
                myDiv.classList.add("col-sm-6");
                myDiv.classList.add("dish-box-wp");
                myDiv.dataset.order = `${order.code}`;
                this.dataOrder = order.code;
                myParentDiv.appendChild(myDiv);


                let mySecondDiv = document.createElement("div");
                mySecondDiv.classList.add("dish-box");
                mySecondDiv.classList.add("text-center");
                myDiv.appendChild(mySecondDiv);


                let mysecond1Div = document.createElement("div");
                mysecond1Div.classList.add("dish-rating");
                mysecond1Div.innerHTML = `
                Order : ${order.code}
                <i class="uil uil-star"></i>`
                mySecondDiv.appendChild(mysecond1Div);


                let mysecond2Div = document.createElement("div");
                mysecond2Div.classList.add("dish-title");
                mysecond2Div.innerHTML = `
                <h3 class="h3-title">From Table : ${order.Table}</h3>
                <p>For :  ${order.people}</p>
                `
                mySecondDiv.appendChild(mysecond2Div);


                let mysecond3Div = document.createElement("div");
                mysecond3Div.classList.add("dish-info");
                mysecond3Div.classList.add("text-center")
                mysecond3Div.innerHTML = `
                <ul>
                    <li>
                         <p>MENU : ${order.Menu}</p>
                         <b>Qty : ${order.defaultQty} </b>
                     </li>
                    
                </ul>
                `
                mySecondDiv.appendChild(mysecond3Div);


                if(order.contenu) {

                    for (let i = 0 ; i < order.contenu.length ; i++){

                        let mysecond31Div = document.createElement("div");
                        mysecond31Div.classList.add("dish-info");
                        mysecond31Div.classList.add("text-center")
                        mysecond31Div.innerHTML = `
                        <ul>
                            <li>
                                <p>MENU : ${order.contenu[i].Menu1}</p>
                                <b>Qty : ${order.contenu[i].Qty} </b>
                            </li>
                    
                        </ul>
                    `
                    mySecondDiv.appendChild(mysecond31Div);
                    }
                }


                let mysecond4Div = document.createElement("div");
                mysecond4Div.classList.add("dist-bottom-row");

                let myList = document.createElement("ul");
                let mySmallList1 = document.createElement("li");
                mySmallList1.innerHTML = `
                <li>
                        <b>Total: ${order.Total}</b>
                </li>
                `
                myList.appendChild(mySmallList1);
                // let mySmallList2 = document.createElement("li");
                // // let myButton1 = document.createElement("button");
                // // myButton1.classList.add("dish-add-btn") 
                // // let myI = document.createElement("i");
                // // myI.classList.add("uil");
                // // myI.classList.add("uil-edit");
                // // myI.dataset.codeEdit = `${order.code}`
                // // myI.setAttribute("id","editOrder");
                // // myButton1.appendChild(myI);
                // // mySmallList2.appendChild(myButton1);
                // myList.appendChild(mySmallList2);

                let mySmallList3 = document.createElement("li");
                let myButton2 = document.createElement("button");
                myButton2.classList.add("dish-add-btn") 
                let myI1 = document.createElement("i");
                myI1.classList.add("uil");
                myI1.classList.add("uil-times-square");
                // myI1.setAttribute("mouseover", this.supprimer(order.code))
                myI1.dataset.code = `${order.code}`
                
                myButton2.appendChild(myI1);
                mySmallList3.appendChild(myButton2);
                myList.appendChild(mySmallList3);

                mysecond4Div.appendChild(myList);
                mySecondDiv.appendChild(mysecond4Div);

                // let delBtn = document.getElementById("delOrder");
                // delBtn.addEventListener("click", this.supprimer())

                // let delBtn = document.querySelectorAll(".uil-times-square");
                // delBtn.addEventListener("click", () => {
                //     alert(this.dataOrder);
                // })
            })
            console.log("i'm an order")
        }

    }

    supprimer(x){

            //console.log("bonjour");
            //alert(this.dataOrder)
            // alert(x);

            // let myData = this.orderTab.getOne(x);

            //  console.log(myData);

            this.myObject = this.orderTab.get();

            console.log(x);

            console.log(this.myObject)

            let choice = prompt("voulez vous vraiment supprimer ce produit?");

            if(choice.toLowerCase() == "oui") {

                this.myObject.splice((x - 2), 1);

                console.log(this.myObject);

                localStorage.removeItem('orderTab');

                const jsonData = JSON.stringify(this.myObject);

                // save to localStorage

                localStorage.setItem("orderTab", jsonData);

                // console.log(myObject)

                //this.orderTab.save(myObject);
                
                // this.orderTab.save(this.myObject); 
            }  
            else {
                
            }
    }


    create()
    {
        
        let myTable = this.tabTable.get();

        let myMenu = this.tabMenu.get();

        //alert("hello hi");
        console.log(myMenu);

        console.log(myTable);

        // for (let i = 0 ; i < myTable.length ; i++) {

        //     console.log(myTable[i].code)

        // }
        // console.log("MENU CODE");
        // for (let i = 0 ; i < myMenu.length ; i++) {

        //     console.log(myMenu[i].code)

        // }
        
        let parentDiv = document.getElementById("containerOrder");

        // DEFAULT TABLE

        let mySelect = document.createElement("SELECT");
        mySelect.setAttribute("id", "Table");
        // mySelect.setAttribute("onchange", "this.create()");
        mySelect.classList.add("input")
        parentDiv.appendChild(mySelect);
        
        // TRIGGERED THE ADD FUNCTION WHEN VALUE CHANGE IN SELECT TABLE

        let x = document.getElementById("Table");
        x.addEventListener("change", this.Add);

        let myOption = document.createElement("option");
        myOption.setAttribute("value", "nothing");

        let myOptionValue = document.createTextNode("ORDER FROM TABLE ?")
        myOption.appendChild(myOptionValue);
        document.getElementById("Table").appendChild(myOption);

        for (let i = 0 ; i < myTable.length ; i++) {


        let myOption = document.createElement("option");
        myOption.setAttribute("value", myTable[i].code);
        let myOptionValue = document.createTextNode(myTable[i].code)
        myOption.appendChild(myOptionValue);
        document.getElementById("Table").appendChild(myOption);
            

        }


        let myInput = document.createElement("input");
        myInput.setAttribute("type", "text");
        myInput.classList.add("input");
        myInput.setAttribute("id","people")
        myInput.setAttribute("placeholder", "For?");
        parentDiv.appendChild(myInput);

        // DEFAULT MENU

        let mySelect1 = document.createElement("SELECT");
        mySelect1.setAttribute("id", "Menu");
        // mySelect1.setAttribute("onchange", "this.myFunction()");
        mySelect1.classList.add("input")
        parentDiv.appendChild(mySelect1);

        // TRIGGERED THE ADD FUNCTION WHEN VALUE CHANGE IN SELECT MENU

        let y = document.getElementById("Menu");
        y.addEventListener("change", this.Add);
        

        let myOption1 = document.createElement("option");
        myOption1.setAttribute("value", "nothing");
        let myOptionValue1 = document.createTextNode("CONTAIN WHICH MENU ?")
        myOption1.appendChild(myOptionValue1);
        document.getElementById("Menu").appendChild(myOption1);

        for (let i = 0 ; i < myMenu.length ; i++) {


        let myOption1 = document.createElement("option");
        myOption1.setAttribute("value", myMenu[i].code);
        let myOptionValue1 = document.createTextNode(myMenu[i].code)
        myOption1.appendChild(myOptionValue1);
        document.getElementById("Menu").appendChild(myOption1);
            

        }
        // QUANTITY

        let myInput0 = document.createElement("input");
        myInput0.setAttribute("type", "numbers");
        myInput0.classList.add("input");
        myInput0.setAttribute("id", "numbMenu");
        myInput0.setAttribute("placeholder", "Quantity?");
        
        parentDiv.appendChild(myInput0);

        let myInput1 = document.createElement("BUTTON");
        
        myInput1.classList.add("btn");
        myInput1.innerText = "OTHER MENU ?";
        myInput1.setAttribute("id", "otherMenu");
        parentDiv.appendChild(myInput1);

        // OTHER MENU

        let otherMenu = document.getElementById("otherMenu");
        
        otherMenu.addEventListener("click", (e) => {

            e.preventDefault();


        // OTHER MENUUUUUU

            let mySelect1 = document.createElement("SELECT");
        mySelect1.setAttribute("class", "Menu1");
        mySelect1.classList.add("input")
        parentDiv.appendChild(mySelect1);

        // TRIGGERED THE ADD FUNCTION WHEN VALUE CHANGE IN SELECT OTHER MENU

        let y = document.querySelectorAll(".Menu1");
        let z = document.querySelectorAll(".numbMenu1")

        for (let i = 0 ; i < y.length ; i++) {

            y[i].addEventListener("change", this.Add);
           
        }
        for (let i = 0 ; i < z.length ; z++) {
            z[i].addEventListener("input",this.Add);
        }

       

        let myOption1 = document.createElement("option");
        myOption1.setAttribute("value", "nothing");
        let myOptionValue1 = document.createTextNode("CONTAIN WHICH MENU ?")
        myOption1.appendChild(myOptionValue1);
        let myTabSelectOption = document.querySelectorAll(".Menu1");
        for(let j = 0 ; j < myTabSelectOption.length ; j++) {

            myTabSelectOption[j].appendChild(myOption1);

        }

        for (let i = 0 ; i < myMenu.length ; i++) {


        let myOption1 = document.createElement("option");
        myOption1.setAttribute("value", myMenu[i].code);
        let myOptionValue1 = document.createTextNode(myMenu[i].code)
        myOption1.appendChild(myOptionValue1);
        let myTabSelectOption = document.querySelectorAll(".Menu1");
        //alert(myTabSelectOption.length)
        for(let j = 0 ; j < myTabSelectOption.length ; j++) {

            myTabSelectOption[j].appendChild(myOption1);

        }
        }

        // OTHER QTYYYYY

        let myQtyInput = document.createElement("input");
        myQtyInput.setAttribute("type", "number");
        myQtyInput.setAttribute("class", "numbMenu1");
        myQtyInput.setAttribute("placeholder", "Quantity?");
        parentDiv.appendChild(myQtyInput);
        
        })

        // BUTTON ORDER

        let btn = document.createElement("BUTTON");
        
        btn.classList.add("btn");
        
        btn.setAttribute("id", "AddOrder");
        
        btn.innerText = "Ordered";
        parentDiv.appendChild(btn);



        //     parentDiv.innerHTML = `
        //     <select class="input" id="Table">
        //                     <option value="">Order from table N°</option> `
        //                      for (let i = 0 ; i < myTable.length ; i++) 
        //                     {
        //                         let mySelect = document.getElementById("Table");
        //                         let option = document.createElement("option");
        //                         option.setAttribute("value",myTable[i].code );
        //                         option.innerHTML = `${myTable[i].code}`
        //                         mySelect.appendChild(option);
                                
        //                     }
        //    `</select>
        //    <input class="input" type="text" placeholder="For?" id="people" />
        //    <select class="input" id="Menu">
        //                     <option value="">Contains Which Menu ?</option> `
        //                      for (let i = 0 ; i < myMenu.length ; i++) 
        //                     {
        //                         let mySelect = document.getElementById("Menu");
        //                         mySelect.innerHTML = `<option value ="">${myMenu[i].code}</option>`
                                
        //                     }
        //    `</select>
        //                <input class="input" type="number" placeholder="Quantity?" id="numbTable" />
        //                <input class="input" type="text" value ="ORTHER MENU" id="numbTable" >
        //                <input class="input" type="number" placeholder="Total Amount?" id="numbTable" />
        //                <button class="btn" id="AddTableBtn">Ordered</button>` 
            
            

    }

    Add(){

        this.orderObj.contenu = [];

        let orderMenuObj = {};
        
        // let Table = this.myFunction(Table);

        // let MenuDefault = this.myFunction(Menu);

        // console.log(Table);

        // console.log(MenuDefault)
        let x = document.getElementById("Table");

        let y = document.getElementById("Menu");

        let z = document.querySelectorAll(".Menu1");

        let t = document.querySelectorAll(".numbMenu1");

        let otherPrice = 0;

        for (let i = 0 ; i < z.length ; i++) {

            localStorage.setItem("tabContainer", JSON.stringify(this.orderObj.contenu));

            orderMenuObj.Menu1 = z[i].value;
            orderMenuObj.Qty = t[i].value;
            let ElementMenu = this.tabMenu.getOne(z[i].value);

            console.log(ElementMenu[0].price);

            otherPrice += (ElementMenu[0].price * t[i].value);

            console.log("otherPrice"+ otherPrice);

            if (localStorage.getItem("tabContainer")) {

                this.orderObj.contenu = JSON.parse(localStorage.getItem("tabContainer"));

                this.orderObj.contenu.push(orderMenuObj);
            }
            
            
        }
        

        // console.log(x.value)
            
        this.orderObj.Table = x.value;

        this.orderObj.Menu = y.value;

        let defaultPrice = this.tabMenu.getOne(y.value);

        this.orderObj.defaultPrice = defaultPrice[0].price;

        console.log(defaultPrice[0].price);//console.log(particularMenu);

        let People = document.getElementById("people");

        let DefaultQty = document.getElementById("numbMenu");

        let DefaultTotalAmount = (defaultPrice[0].price * DefaultQty.value) 

        console.log("defaultPrice "+ DefaultTotalAmount);

        // CONSTRUCTION OF ORDER OBJECTS PROPERTY
        
        this.orderObj.people = People.value;
        
        this.orderObj.defaultQty = DefaultQty.value;

        this.orderObj.code = this.order_id;

        this.orderObj.orderTime = defaultPrice[0].cookingTime;

        let TotalALLORDER = ((DefaultTotalAmount + otherPrice) * People.value)

        console.log(TotalALLORDER);

        this.orderObj.Total = TotalALLORDER;

        //this.orderObj.Total = ((DefaultTotalAmount + otherPrice) * People.value);

        console.log(this.orderObj);

        this.orderTab.save(this.orderObj);

        

    }

}