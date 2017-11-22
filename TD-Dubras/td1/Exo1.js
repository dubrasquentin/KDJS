/**
 * Created by Quentin on 25/10/2017.
 */
var etudiant = {
    prenom: "",
    nom: "",
    num: "",
    dateN:[]
};

function Etudiant(prenom, nom, num, dateN){
    this.prenom = prenom;
    this.nom = nom;
    this.num = num;
    this.dateN = dateN;
    this.presenter = function(){
        console.log("Je suis " + this.prenom + " " + this.nom
        + " et je suis née le  " + this.dateN + " mon num est " + this.num);
        };
    this.calA = function() {
     var AnN = this.dateN[2];
     var date = new Date();
     var AnA = date.getFullYear();
     var age = AnA - AnN;
     console.log("Age : "+ age);

    }
}


// Cr´eation d’un objet Etudiant
var etu = new Etudiant("quentin","dubras","333",[02,06,1997]);

console.log(etu);
console.log(etu.presenter());
console.log(etu.calA());