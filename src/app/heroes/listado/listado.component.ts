import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = ['SpiderMan', 'IronMan', 'Thor', 'Hulk', 'Capitán América'];
  heroeBorrado: string = '';

  borrarHeroe(){
    this.heroeBorrado = this.heroes.shift() || '';
    //this.heroeBorrado = heroeBorrado;
    //console.log('borrando...');
    //console.log(heroeBorrado);
  }

}
