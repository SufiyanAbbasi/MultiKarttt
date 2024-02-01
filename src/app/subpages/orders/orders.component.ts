import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FooterComponent } from "../../shared/footer/footer.component";

@Component({
    selector: 'app-orders',
    standalone: true,
    templateUrl: './orders.component.html',
    styleUrl: './orders.component.css',
    imports: [RouterLink, CommonModule, FooterComponent]
})
export class OrdersComponent {

}
