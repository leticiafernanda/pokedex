import { Component, OnInit } from '@angular/core';
import { PokedexService } from 'src/app/services/pokedex.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
 
  setAllPokemons: any;
  getAllPokemons: any;

  constructor(
    private pokedexService: PokedexService
  ){}

  ngOnInit(): void {
    this.getAllPokemons();
  }
  getListAll():void{
    this.pokedexService.getListPokemons().subscribe(
      (response:any) =>
      {
        this.setAllPokemons = response.results;
        this.getAllPokemons = this.setAllPokemons;
      }
    )
  }
  getSearch(value: any){
    const filter = this.setAllPokemons.filter( (res: any ) => {
      return !res.name.indexOf(value.toLowerCase());
    });

    this.getAllPokemons = filter;
  }

}
