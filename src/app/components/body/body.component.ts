import { Component } from "@angular/core";




@Component({
    selector: 'app-body',
    templateUrl: './body.component.html'
})

export class BodyComponent{

    mostrar= true;
            frase:any = {
                mensaje: 'Un gran poder conlleva una gran Responsabilidad.',
                autor: 'Ben Parker'
            };

            personajes: string[] = ['Spider-man', 'Venom', 'Dr. Octopus'];

}