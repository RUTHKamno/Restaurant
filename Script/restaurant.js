import {Menu } from "./menu.js";

// import { Staff } from "./staff.js";

import { Table } from "./table.js";
import { Order } from "./order.js";
import { Dashboard } from "./dashboard.js";
import { viewTable } from "./viewTable.js";

// // APPLICATION MENU
let addMenuBtn = document.getElementById("AddMenuBtn");

let addTableBtn = document.getElementById("AddTableBtn");
   
let ViewOrder = document.getElementById("AllOrder");

   ////////////////////////////// ORDER ////////////////////////

// window.addEventListener("DOMContentLoaded", () => {

//     let ObjOrder = new Order();

//     ObjOrder.afficher();
// })

// let addStaffBtn = document.getElementById("AddStaffBtn");

window.addEventListener('DOMContentLoaded', () => {

    let ObjOrder = new Order();

    ObjOrder.create();

    let OrderBtn = document.getElementById("AddOrder");

    OrderBtn.addEventListener("click", (e) => {

        e.preventDefault();
    
        //console.log("heyyyyy");

        let ObjAddOrder = new Order();

        ObjAddOrder.Add()

    })



    // delBtn.addEventListener("click", (e) => {

    //     e.preventDefault();

    //     alert("supprimer");
    // })

    
    

})

// // window.addEventListener("DOMContentLoaded", () => {
    
// // })
// //////////////////////////// DASHBOARD /////////////////////

window.addEventListener('DOMContentLoaded', () => {

    let ObjDashboard = new Dashboard();
    ObjDashboard.afficher();
    // DISPLAY ALL TABLE
        
    let ViewAllTable = new viewTable();

            
    ViewAllTable.displayTable();

    ViewAllTable.AddQuantity();
    
})

//////////////////////////// ORDER /////////////////////

window.addEventListener('DOMContentLoaded', () => {

    let ObjDisplayOrder = new Order();

    ObjDisplayOrder.afficher();

    let btn ; 

    let btnCode;

    let delBtn = document.querySelectorAll(".uil-times-square");
    
    console.log(delBtn);

    for(btn of delBtn) {
        // btn.addEventListener("click", function(){
            
        //     console.log(this)
        // })

        btn.addEventListener("click", function(){
            btnCode = this.dataset.code;

            console.log(btnCode);

            let Deldata = new Order();

            Deldata.supprimer(btnCode);

            
        })
    }

})


//////////////////////////// MENU /////////////////////////

let dataMenu = document.getElementById("delMenu");

window.addEventListener('DOMContentLoaded', () => {
    
    
        //alert("bonjour")
    
        let ObjData = new Menu();
    
        ObjData.afficher();

        // EDIT FOOD

        let editBtn = document.querySelectorAll(".uil-edit");
    
        for(let btn of editBtn ) {

            btn.addEventListener("click", function(){
                
                // console.log(this.dataset.menu)
    
                // window.location.href = "../Body/editMenu.html";
    
                let editData = new Menu();
    
                editData.editer(this.dataset.menu);

                let addEditBtn = document.getElementById("EditBtn");

                addEditBtn.addEventListener("click", (e) => {

                    e.preventDefault();
                
                    let Addedit = new Menu();
                    
                    Addedit.ajouter();
                
                });
                
    
            })
    
        } 
        // DELETE FOOD

    let btn ; 

    let btnCode;

    let delBtn = document.querySelectorAll(".uil-times-square");
    
    console.log(delBtn);

    for(btn of delBtn) {
        // btn.addEventListener("click", function(){
            
        //     console.log(this)
        // })


        btn.addEventListener("click", function(){
            btnCode = this.dataset.menu;

            console.log(btnCode);

            let Deldata = new Menu();

            Deldata.supprimer(btnCode);

            
        })
    }
});

//////////////////////////// TABLE /////////////////////

window.addEventListener("DOMContentLoaded", () => {


    let ObjDataTable = new Table();

    ObjDataTable.afficher();

    // EDIT TABLE 
    let editBtn = document.querySelectorAll(".uil-edit");

    console.log(editBtn);
    
        for(let btn of editBtn ) {

            btn.addEventListener("click", function(){
                
                // console.log(this.dataset.menu)
    
                // window.location.href = "../Body/editMenu.html";
    
                let editData = new Table();
    
                editData.editer(this.dataset.menu);

                let addEditBtn = document.getElementById("EditTableBtn");

                addEditBtn.addEventListener("click", (e) => {

                    e.preventDefault();
                
                    let Addedit = new Table();
                    
                    Addedit.editTable();

                    // alert("EDITER")
                
                });
                
    
            })
    
        } 
    
    // DELETE TABLE 

    let btn ; 

    let btnCode;

    let delBtn = document.querySelectorAll(".uil-times-square");
    
    // console.log(delBtn);

    for(btn of delBtn) {
        // btn.addEventListener("click", function(){
            
        //     console.log(this)
        // })


        btn.addEventListener("click", function(){
            btnCode = this.dataset.menu;

            console.log(btnCode);

            let Deldata = new Table();

            Deldata.supprimer(btnCode);

            
        })
    }


    // DISPLAY OCCUPIED TABLE


    let viewTableBtn = document.querySelectorAll(".dish-box-wp");
    
    console.log(viewTableBtn);

    for(let table of viewTableBtn) {
        // btn.addEventListener("click", function(){
            
        //     console.log(this)
        // })
        table.addEventListener("click", function(){

           let  tableCode = this.dataset.codeTable;

            console.log(tableCode);
            let ViewTable = new viewTable();
            ViewTable.display(tableCode);

            
        })
    }

})
// });

//////////////////////////// STAFF /////////////////////

// window.addEventListener("DOMContentLoaded", () => {

//     let ObjDataStaff = new Staff();

//     ObjDataStaff.afficher();

//     // EDIT STAFF

//         let editBtn = document.querySelectorAll(".uil-edit");
    
//         for(let btn of editBtn ) {

//             btn.addEventListener("click", function(){
                
//                 // console.log(this.dataset.staff)
    
//                 let editData = new Staff();
    
//                 editData.editer(this.dataset.staff);

//                 let addEditBtn = document.getElementById("EditStaffBtn");

//                 addEditBtn.addEventListener("click", (e) => {

//                     e.preventDefault();
                
//                     let Addedit = new Staff();
                    
//                     Addedit.ajouter();
                
//                 });
                
    
//             })
    
//         } 

//     // DELETE EMPLOYEE

//     let btn ; 

//     let btnCode;

//     let delBtn = document.querySelectorAll(".uil-times-square");
    
//     // console.log(delBtn);

//     // for(btn of delBtn) {
//     //     btn.addEventListener("click", function(){
            
//     //         console.log(this)
//     //     })


//     for(btn of delBtn) {

//         btn.addEventListener("click", function(){

//         btnCode = this.dataset.del;

//         console.log(btnCode);

//         let Deldata = new Staff();

//         Deldata.supprimer(btnCode);

    
// })
       
// }

// })

//////////////////////////// TABLE /////////////////////

addTableBtn.addEventListener("click", (e) => {

    e.preventDefault();

    let ObjAddTable = new Table();

    ObjAddTable.ajouter();
})

//////////////////////////// STAFF /////////////////////
// addStaffBtn.addEventListener("click", (e) => {

//     e.preventDefault();

//     let ObjStaffAdd = new Staff();

//     ObjStaffAdd.ajouter();
// })

//////////////////////////// MENU /////////////////////

addMenuBtn.addEventListener("click", (e) => {

    e.preventDefault();

    let ObjAdd = new Menu();
    
    ObjAdd.ajouter();

});


