import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles = new Array<string>(); //Dichiaro un array di stringhe

  spamma(inutile : HTMLInputElement, spam : HTMLInputElement) : boolean
  {
      console.log(inutile.value + "-" + spam.value);
      console.log(`Adding article title: ${inutile.value} and link: ${spam.value}`);
      let cont = Number(spam.value);
      for(let index=0;index<cont;index++){
        this.articles.push(inutile.value);
      }
      return false;
  }
}
