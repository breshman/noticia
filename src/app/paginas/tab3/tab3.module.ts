import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab3Page } from './tab3.page';

declare var mapboxgl: any;

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: Tab3Page }])
  ],
  declarations: [Tab3Page]
})
export class Tab3PageModule implements OnInit, AfterViewInit {

ngOnInit(){

}

ngAfterViewInit(){
    mapboxgl.accessToken = 'pk.eyJ1IjoiYnJlc2htYW4iLCJhIjoiY2syNHE1OGdjMGE2eDNocGVvYTVyY3BwcCJ9.Lbnv_whrEAQxMdkszekeBA';
    var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11'
    });
}

}
