import { Component } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.css']
})
export class ExemplosPipesComponent {
  book = {
    title: 'Aprendendo Angular',
    rating: '4.5387',
    pages: 315,
    price: 44.99,
    releaseData: new Date(2023, 1, 1),
    url: 'https://www.amazon.com.br/Garrafa-1-8-Plas%C3%BAtil-008038-2462-Rosa/dp/B07DMCYZNB/ref=nav_signin?keywords=garrafa+de+agua+plasutil&qid=1674535685&sprefix=garrafa+de+agua+pla%2Caps%2C201&sr=8-1'
  }

  books: string [] = ['Java', 'Angular', 'Javascript'];

  filtro: string | undefined;

  addCurso(valor: string){
    console.log(this.books)
    this.books.push(valor);
  }

  //Por questões de performance é mais interessante fazer dessa forma.
  obterCursos(){
    if(
      this.books.length === 0 ||
      this.filtro === undefined ||
      this.filtro?.trim() === ''){
      return this.books;
    }

    let filter = this.filtro.toLocaleString().toLowerCase();
    return this.books.filter((v:string) => v.toLowerCase().includes(filter));
  }

  //Esse trecho de código atribui a string 'Valor assíncrono' à variável asyncValue depois de 2s.
  asyncValue = new Promise( (resolve, reject) =>{
    setTimeout( () => resolve('Valor assíncrono'), 2000)
  })

  //Esses dois códigos funcionam da mesma forma, async provavelmente será usado dessas formas.
  asyncValue2 = interval(2000).pipe(map(valor => 'Valor assíncrono 2'));
}
