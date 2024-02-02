import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FooterComponent } from "../../shared/footer/footer.component";

@Component({
    selector: 'app-menulist',
    standalone: true,
    templateUrl: './menulist.component.html',
    styleUrl: './menulist.component.css',
    imports: [RouterLink, CommonModule, FooterComponent]
})
export class MenulistComponent {

}
