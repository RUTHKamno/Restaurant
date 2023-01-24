import { Database } from "./database.js";

import {Menu } from "./menu.js";

import { Staff } from "./staff.js";

import { Table } from "./table.js";

export class Dashboard {

    tabMenu = [];

    tabStaff = [];

    tabTable = [];

    orderTab = [];

    constructor()
    {
        this.tabTable = new Database('tableTab');
        this.tabMenu = new Database('menuTab');
        this.orderTab = new Database('orderTab');
        this.tabStaff = new Database('staffTab');

    }


    afficher(){

        let myMenu = this.tabMenu.get();
        let myOrder = this.orderTab.get();
        let myStaff = this.tabStaff.get();
        let myTable = this.tabTable.get();

        // console.log(myMenu.length);
        let TotalAmount = 0;
        for (let i = 0 ; i < myOrder.length ; i++){

            TotalAmount += myOrder[i].Total
            
            // console.log(myOrder[i].Total);
        }
        //console.log(TotalAmount);
        // console.log(myOrder); 
        // console.log(myStaff.length);
        // console.log(myTable.length);

        let parentElement = document.getElementById("table11");
        parentElement.innerHTML = 
        `<thead>
        <tr>
          <th>Total Numbers Of Order</th>
          <th>Total Sold Amount</th>
          <th>Total Numbers of Staff</th>
          <th>Total Numbers of Menu</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td id="orderNumbers">${myOrder.length}</td>
          <td id="soldAmount">${TotalAmount}FCFA</td>
          <td id="staffNumbers">${myStaff.length}</td>
          <td id="menuNumbers">${myMenu.length}</td>
          
        </tr>
        
      </tbody>`


    }
    




}



/**
 * ici, on effectuera les opérations suivantes:
 * - additionner le nombre de commandes
 * - additionner les prix du contenu de chaque commandes
 * - additionner le nombre d'employés et de menu
 * 
 Ces opérations se feront en manipulant le json de la méthode get de la classe Database 
 */
/**
 * ensuite, on devra avoir un visuel sur toutes les tables du restaurant indiquant le nombre de personnes occupant la table
 * ceci sera récupéré avec la méthode getOne(key, code) où key est la clé du json des tables constitué de l'attribut nombre_places_occupées
 * cet attribut sera modifiés en fonction d'un click sur le bouton prendre ou libérer. 
 * si une commande à été passée sur cette table on doit représenter un horloge en miniature indiquant le nombre de temps 
 * voir le temps de préparation de la commande. 
 * pour savoir qu'une commande à été passée sur la table X, en cliquant sur le bouton order, la variable se trouvant dans l'object d'une commande
 * va devenir true... et cette variable sera récupéré à l'aide de la méthode getOne. 
 * 
 */

