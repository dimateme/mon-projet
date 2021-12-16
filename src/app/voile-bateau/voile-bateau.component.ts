import { Component, OnInit,Input } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-voile-bateau',
  templateUrl: './voile-bateau.component.html',
  styleUrls: ['./voile-bateau.component.css']
})
export class VoileBateauComponent implements OnInit {
  // proprieté qui permet d'afficher l'image du bateau
  monImage:string ="assets/mesImages/gvl.png";
  // @Input permettre à Angular de partager des données entre le contexte parent et les directives ou composants enfants
@Input() longgvl :any;
@Input() longgvsl :any;
@Input() longgve :any;
@Input() longgm :any;
@Input() longge :any;
@Input() longss :any;
@Input() longsa :any;
@Input() longgs :any;
@Input() longueurm :any;

 dollors ="&";
public grandVoile :any ;
public voileAvant: any;
public  voilePortant:any;
public  accessoire: any;
 lis:any;
  length :any;
  gvsl :any;
  gvl :any;
  gve :any;
  gm :any;
  ge :any;
  ss :any;
  sa :any;
  gs :any;
  divGrandVoile: boolean=true;
  divVoileAvant:boolean=false;
  divVoilePorant : boolean=false;
  divAccessore:boolean =true;

rechercherPrix ="https://iwa2021.edriki.com/api/Item/Items?"
  constructor(private http : HttpClient, private router: Router) { }

  ngOnInit(): void {
  }
  // cette méthode permet d'obtenir les informations des differents types de voiles àprés validation des mésures
  getValidation(){
   this.http.get<any>(this.rechercherPrix +"length=" +parseFloat(this.longueurm )+ this.dollors + "gvsl="+ parseFloat(this.longgvsl)+
     this.dollors +"gvl="+parseFloat(this.longgvl) +this.dollors +"gve="+parseFloat(this.longgve) +this.dollors +"gm="+parseFloat(this.longgm) +this.dollors
   +"ge=" +parseFloat(this.longge) +this.dollors +"ss="+parseFloat(this.longss)+this.dollors +"sa="+parseFloat(this.longsa) +this.dollors + "gs="+parseFloat(this.longgs)).subscribe(response =>{
      var  list = new Array;
      var listeVoileAvant = new Array;
      var listeVoilePortant = new Array;
      var  listeAccessoire = new  Array;
      response.response.datas.forEach(function (value:any){
        var objt ={"ref":value.ref,"name":value.name,"type":value.type,"description":value.description.replace(/<[^>]*>/g, '\n'),"price":value.price};

        if((objt.type=="GVE"|| objt.type=="GVSL" || objt.type=="GVL") && objt.price.unitPrice !=0)
        {
          list.push(objt);
        }
        if((objt.type=="GM"|| objt.type=="GE") && objt.price.unitPrice !=0){
          listeVoileAvant.push(objt);
        }
        if((objt.type=="SS"|| objt.type=="SA" || objt.type=="GS") && objt.price.unitPrice !=0){
          listeVoilePortant.push(objt);
        }
        if(objt.type==""){
          listeAccessoire.push("");
        }




      })

       this.grandVoile = list;
       this.voileAvant =listeVoileAvant;
       this.voilePortant =listeVoilePortant;
       this.accessoire = listeAccessoire;
       console.log(this.voilePortant);
   })
  }

  showGrandVoile(){
    this.divGrandVoile =true;
    this.divVoileAvant=false;
    this.divVoilePorant=false
  }
  showVoileAvant(){
    this.divGrandVoile =false;
    this.divVoileAvant=true;
    this.divVoilePorant=false
  }
  showVoilePortant(){
    this.divGrandVoile =false;
    this.divVoileAvant=false;
    this.divVoilePorant=true
  }
  showAccessoire(){
    this.divGrandVoile =false;
    this.divVoileAvant=false;
    this.divVoilePorant=false
  }
   afficher(){

   }
}
