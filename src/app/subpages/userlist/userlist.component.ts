import { Component } from '@angular/core';
import { FooterComponent } from "../../shared/footer/footer.component";

@Component({
    selector: 'app-userlist',
    standalone: true,
    templateUrl: './userlist.component.html',
    styleUrl: './userlist.component.css',
    imports: [FooterComponent]
})
export class UserlistComponent {

}
