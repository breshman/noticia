import { Component, OnInit } from '@angular/core';
import { AyacuchoService } from '../../services/ayacucho.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

lista;
listaJson;
  constructor(
      private ayacuchoService: AyacuchoService
  ) {}

  ngOnInit(){
    this.ayacuchoService.getLista().subscribe(data =>{

        this.lista = data;

    })
  }

}
