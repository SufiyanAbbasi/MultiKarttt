import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FooterComponent } from "../../shared/footer/footer.component";

@Component({
    selector: 'app-couponscreate',
    standalone: true,
    templateUrl: './couponscreate.component.html',
    styleUrl: './couponscreate.component.css',
    imports: [CommonModule, RouterLink, FooterComponent]
})
export class CouponscreateComponent {

}
