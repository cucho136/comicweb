import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HeroesService} from '../../servicios/heroes.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent implements OnInit {
  heroes:any[]=[];
  buscador:string;

  constructor(private activatedroute:ActivatedRoute,
              private _heroeservice:HeroesService) {

  }

  ngOnInit(): void {
    this.activatedroute.params.subscribe(params =>{
      this.buscador=params['termino'];
      this.heroes=this._heroeservice.buscarHeroes(params['termino']);
    })
  }

}
