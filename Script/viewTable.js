import { Database } from "./database.js";

export class viewTable {
    
    placeNumber;
    position;
    tabViewTable = []; // I recover my objects table which content all food menu with the key menuTab.
    viewTableObj = {};
    tabTable = [];
    orderTab = [];
    
    constructor()
    {
        
        this.tabViewTable = new Database('viewTable');
        this.tabTable = new Database('tableTab');
        this.orderTab = new Database("orderTab");
        console.log(this.tabViewTable);

    }


    display(code){

        // console.log(code);
        
        let myTable = this.tabTable.getOne(code);

        let numbTablePlaces = myTable[0].places;

        console.log(numbTablePlaces);
        console.log(myTable);
        let numbPlaces = parseInt(prompt("How many places are occupy ?"));

        if(numbPlaces > numbTablePlaces){
            alert("Number of places exceeded");
        }
        else {
            this.viewTableObj.code = code;
            this.viewTableObj.places = numbPlaces;
            this.viewTableObj.totalPlaces = numbTablePlaces;
            this.viewTableObj.imageTable = myTable[0].image;
            console.log(this.viewTableObj);
            this.tabViewTable.save(this.viewTableObj);
            // alert("okay"); 
        }

        

    }

    displayTable(){

        // let myViewTab = this.tabViewTable.get("viewTable");

        let myTable = this.tabTable.get("tableTab");


        console.log(myTable);

        let parentDiv = document.getElementById("getAllTable");

        myTable.map((table) => 

            {
                //console.log("je suis un menu");
                let myNewDivMenuCSS = document.createElement("div");
                myNewDivMenuCSS.classList.add("col-lg-4");
                myNewDivMenuCSS.classList.add("col-sm-6");
                myNewDivMenuCSS.classList.add("dish-box-wp");
                
                // myNewDivMenuCSS.classList.add(`${menu.type}`);
                // myNewDivMenuCSS.dataset.cat = `${menu.type}`;
                // myNewDivMenuCSS.dataset.menu = `${menu.code}`;

                myNewDivMenuCSS.innerHTML = 

                ` <div class="dish-box text-center">
                <div class="dist-img">
                <img src="../ASSETS/${table.image}" alt="">
                </div>
                <div class="dish-rating" id =${table.code}>
                0/0 
                <p>
                wait during 12h
                <p>
                </div>
                
                
                </div> `

                
               parentDiv.appendChild(myNewDivMenuCSS);

            })

        }

    AddQuantity(){

        // let id1 = document.getElementById("001");
        // console.log(id1);
        let myTable = this.tabTable.get("tableTab");
        let myViewTablePlaces = this.tabViewTable.get("viewTable");
        let myOrder = this.orderTab.get("orderTab");

        // for(let i = 0 ; i < myTable.length ; i++){
        //     // console.log(myTable[i].code)
        //     let idTable = document.getElementById(myTable[i].code);
        //     console.log(idTable);
        // }

        for(let i = 0 ; i < myViewTablePlaces.length ; i++){
            for(let j = 0 ; j < myTable.length ; j++){
                if(myViewTablePlaces[i].code == myTable[j].code){

                    let idTable = document.getElementById(myTable[j].code);
                    idTable.innerHTML = `${myViewTablePlaces[i].places} / ${myViewTablePlaces[i].totalPlaces}`
                }
                else{
                    continue;
                }
            }
        }

        ////////////////////// HOW MANY MINUTES TO WAITING ? //////////////////////


        for(let i = 0 ; i < myViewTablePlaces.length ; i++){
            for(let j = 0 ; j <myOrder.length ; j++){
                if(myViewTablePlaces[i].code == myOrder[j].Table){

                    let idTable = document.getElementById(myOrder[j].Table);
                    let time = document.createElement("h4");
                    time.classList.add("myTime");
                    idTable.appendChild(time);

                    let timeHours = parseInt(myOrder[j].orderTime);

                    let timeMinutes= timeHours * 60;
                    this.displayTime(timeMinutes);
                    const countDown = setInterval(() => {
                        timeMinutes--;
                        this.displayTime(timeMinutes);
                        if (timeMinutes == 0 || timeMinutes < 1) {
                          this.endCount();
                          clearInterval(countDown);
                        }
                      }, 1000);
                    // time.innerHTML = `wait during ${myOrder[j].orderTime}h`
                    
                }
                else{
                    continue;
                }
            }
        }

    }

//     let timeSecond = 30;
// const timeH = document.querySelector("h1");

    // displayTime(timeSecond);

// const countDown = setInterval(() => {
//   timeSecond--;
//   displayTime(timeSecond);
//   if (timeSecond == 0 || timeSecond < 1) {
//     endCount();
//     clearInterval(countDown);
//   }
// }, 1000);

    displayTime(second) {
        console.log("second"+second)
        let timeH = document.querySelectorAll(".myTime")
        const min = Math.floor((second) / 60);
        const sec = Math.floor((second) % 60);
    //    console.log(timeH)
    
   

        for( let time of timeH) {
            time.innerHTML = `
            ${min < 10 ? "0" : ""}${min}:${sec < 10 ? "0" : ""}${sec}
            `;
        }
        
    }

    endCount() {
        let timeH = document.querySelectorAll(".myTime")
        
        console.log(timeH);
        for( let time of timeH) {
            time.innerHTML = `
            Time out
            `;
        }
        
        // for(let i = 0 ; i < timeH.length ; i++){
        //     timeH.innerHTML = `
        //      Time out
        //     `;
        // }
        
    }

        
}
