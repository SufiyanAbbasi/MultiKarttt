import { Component } from '@angular/core';
import { FooterComponent } from "../../shared/footer/footer.component";

@Component({
    selector: 'app-media',
    standalone: true,
    templateUrl: './media.component.html',
    styleUrl: './media.component.css',
    imports: [FooterComponent]
})
export class MediaComponent {

}
