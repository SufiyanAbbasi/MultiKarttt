import { Component } from '@angular/core';
import { FooterComponent } from "../../shared/footer/footer.component";

@Component({
    selector: 'app-createmenu',
    standalone: true,
    templateUrl: './createmenu.component.html',
    styleUrl: './createmenu.component.css',
    imports: [FooterComponent]
})
export class CreatemenuComponent {

}
