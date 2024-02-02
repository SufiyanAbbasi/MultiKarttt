import { Component } from '@angular/core';
import { FooterComponent } from "../../shared/footer/footer.component";
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-couponslist',
    standalone: true,
    templateUrl: './couponslist.component.html',
    styleUrl: './couponslist.component.css',
    imports: [FooterComponent,RouterLink, CommonModule]
})
export class CouponslistComponent {

}
