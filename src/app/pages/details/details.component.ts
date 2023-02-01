import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';
import { PokedexService } from 'src/app/services/pokedex.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  urlPokemon: string = 'https://pokeapi.co/api/v2/pokemon';
  urlName: string = 'https://pokeapi.co/api/v2/pokemon-species';

  pokemon: any;
  isLoading: boolean = false;
  apiError: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private pokedexService: PokedexService
  ) { }

  ngOnInit(): void {
     this.getPokemon();
} 
 getPokemon() {
  const id = this.activatedRoute.snapshot.params['id'];
  const pokemon = this.pokedexService.getPokemons(`${this.urlPokemon}/${id}`);
  const name = this.pokedexService.getPokemons(`${this.urlName}/${id}`);
  
  return forkJoin([pokemon, name]).subscribe(
    res => {
      this.pokemon = res;
      this.isLoading = true;
    },    
  );
  }
}

