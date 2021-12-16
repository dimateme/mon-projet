import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-selecteur-bateau',
  templateUrl: './selecteur-bateau.component.html',
  styleUrls: ['./selecteur-bateau.component.css']
})
export class SelecteurBateauComponent implements OnInit {
  private minString = 3;
  private maxString = 40;
  public listeBateau : any
  tableauBateau = new Array;
  longeurBateau :any;
  longeurgvl :any;
  longeurgvsl:any;
  longeurgve :any;
  longueurgm :any;
  longueurge :any;
  longueurss:any;
  longueursa :any;
  longueurgs :any;

  showMe: boolean = false;
  rechercheDeBeateau="https://iwa2021.edriki.com/api/Boat/Search/";
  rechercherDetailsBateau ="https://iwa2021.edriki.com/api/Boat/ByRef/";
  constructor(private http : HttpClient) { }

  ngOnInit(): void {
  }

  selectedBateau =null;
  // cette méthode permet d'avoyer les details du bateau après la selection du bateau
  selectionDuBateau($event:any){
    this.selectedBateau =$event.target.value;
    var term = $event.target.value;
    console.log(term);
    this.http.get<any>(this.rechercherDetailsBateau +term).subscribe(response =>{

           this.longeurBateau = parseFloat(response.response.datas.lengthm);
                console.log(this.longeurBateau);
           this.longeurgvl = parseFloat(response.response.datas.sails.gvl);
           console.log(this.longeurgvl);
          this.longeurgvsl = parseFloat(response.response.datas.sails.gvsl);
            console.log(this.longeurgvsl);
          this.longeurgve = parseFloat(response.response.datas.sails.gve);
          console.log(this.longeurgve);
          this.longueurgm =parseFloat(response.response.datas.sails.gm);
          console.log(this.longueurgm);
          this.longueurge = parseFloat(response.response.datas.sails.ge);
          console.log(this.longueurge);
          this.longueurss =parseFloat(response.response.datas.sails.ss);
          console.log(this.longueurss);
          this.longueursa =parseFloat(response.response.datas.sails.sa);
          console.log(this.longueursa);
          this.longueurgs =parseFloat(response.response.datas.sails.gs);
          console.log(this.longueurgs);
    })
  }
  // cette méthode permet d'obtenir la liste des bateaux lorsqu'on saisi des caractéres dans le champ de saisie modéle
  getData(event :any){
    var term=event.target.value;
    if(term.length >= this.minString && term.length <this.maxString){
      this.http.get<any>(this.rechercheDeBeateau+term).subscribe(response =>{
        console.log(response.response.datas);
        this.tableauBateau = response.response.datas;
        this.showMe =true;
      })
      console.log(event.target.value)
    }
    else{

      this.tableauBateau.length=0
      this.showMe = false;
    }


  }


}
