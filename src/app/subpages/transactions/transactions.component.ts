import { Component } from '@angular/core';
import { FooterComponent } from "../../shared/footer/footer.component";
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-transactions',
    standalone: true,
    templateUrl: './transactions.component.html',
    styleUrl: './transactions.component.css',
    imports: [FooterComponent, RouterLink, CommonModule]
})
export class TransactionsComponent {

}
