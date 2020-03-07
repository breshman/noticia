import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
    selector: 'app-tab3',
    templateUrl: 'tab3.page.html',
    styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

    cantidad:number;
    data;
    constructor(
        private alertCtl: AlertController
    ) { }

    async presentAlert() {
        const alert = await this.alertCtl.create({
            header: 'Alert',
            // subHeader: 'Subtitle',
            message: 'Message <strong>text</strong>!!!',
            inputs: [
                {
                    name: 'cantidad',
                    type: 'number',
                    placeholder: 'Sleciones las cantidad',
                    value: this.cantidad | 0
                },
            ],
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    cssClass: 'secondary',
                    handler: (blah) => {
                       this.data = blah
                    }
                }, {
                    text: 'Confirmar',
                    handler: (n) => {
                        this.cantidad = n.cantidad
                        this.data = n
                    },
                    
                }
            ]
        });

        await alert.present();
    }
}
