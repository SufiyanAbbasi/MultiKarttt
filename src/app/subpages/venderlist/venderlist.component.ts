import { Component } from '@angular/core';
import { FooterComponent } from "../../shared/footer/footer.component";
import { EmptableComponent } from "../../shared/table/emptable/emptable.component";

@Component({
    selector: 'app-venderlist',
    standalone: true,
    templateUrl: './venderlist.component.html',
    styleUrl: './venderlist.component.css',
    imports: [FooterComponent, EmptableComponent]
})
export class VenderlistComponent {

}
