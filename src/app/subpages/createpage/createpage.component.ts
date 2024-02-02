import { Component } from '@angular/core';
import { FooterComponent } from "../../shared/footer/footer.component";

@Component({
    selector: 'app-createpage',
    standalone: true,
    templateUrl: './createpage.component.html',
    styleUrl: './createpage.component.css',
    imports: [FooterComponent]
})
export class CreatepageComponent {

}
