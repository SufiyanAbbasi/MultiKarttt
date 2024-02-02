import { Component } from '@angular/core';
import { FooterComponent } from "../../shared/footer/footer.component";

@Component({
    selector: 'app-pageslist',
    standalone: true,
    templateUrl: './pageslist.component.html',
    styleUrl: './pageslist.component.css',
    imports: [FooterComponent]
})
export class PageslistComponent {

}
