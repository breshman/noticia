import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class PromptServiceService {

  constructor(
      private alertController: AlertController,
  ) { }

    public async showPrompt(title: string, message: string, inputs: any[], cb: Function, ecb: Function = ()=>{}, present: boolean = true) {
        inputs = inputs || [];
        const cleanedInputs: any[] = this.cleanInputs(inputs);
        let prompt = await this.alertController.create({
            title: title,
            message: message,
            inputs: cleanedInputs,
            buttons: [
                { text: 'Cancel', handler: ecb },
                { text: 'OK', handler: data => {
                        this.validate(data, title, message, inputs, cb, ecb, present);
                    }
                }
            ]
        });
        await present && await  prompt.present();
        return prompt;
    }

    protected cleanInputs(inputs: any[]): any[] {
        return inputs.map(item => {
            let cleanedItem: any = Object.assign({}, item);
            delete cleanedItem['required']
            return cleanedItem;
        });
    }

    protected validate(data: any, title: string, message: string, inputs: any[], cb: Function, ecb: Function = ()=>{}, present: boolean = true) {
        let errors: any[] = [];
        let requiredInputs: any[] = inputs.filter(item => item['required']);
        for (let requiredInputFor of requiredInputs) {
            if (data[requiredInputFor.name] === '') {
                let fieldName: string = requiredInputFor['placeholder'] || requiredInputFor['name'];
                errors.push(`Field ${fieldName} is required.`);
            }
        }
        if (errors.length) {
            this.invalidAlert(errors, title, message, inputs, cb, ecb, present);
        }else{
            cb(data);
        }
    }

    protected async  invalidAlert(errors: string[], title: string, message: string, inputs: any[], cb: Function, ecb: Function = ()=>{}, present: boolean = true) {
        let alert = await this.alertController.create({
            title: 'Error',
            subTitle: errors.join('\n'),
            buttons: [{
            text: 'OK',
                handler: () => {
                    this.showPrompt(title, message, inputs, cb, ecb, present);
                }
            }]
        });
        await alert.present();
    }
}
