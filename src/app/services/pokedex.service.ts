import { Injectable } from "@angular/core";
import { catchError, map, Observable, of } from "rxjs";
import { HttpClient} from "@angular/common/http"

@Injectable({
    providedIn: 'root'
})
export class PokedexService{
    private url: string = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=100';

    constructor (
        private httpClient: HttpClient
        ) {}

    getListPokemons (): Observable<any> {
        return this.httpClient.get<any>(this.url).pipe(
            map((body:any)=> body),
            catchError(()=> of("Error"))
        )
    }
    getPokemons(url: string):Observable<any>{
        return this.httpClient.get<any>(url).pipe(
            map((body:any)=> body),
            catchError(()=> of("Error"))
        )
    }
}

