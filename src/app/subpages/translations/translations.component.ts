import { Component } from '@angular/core';
import { FooterComponent } from "../../shared/footer/footer.component";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-translations',
    standalone: true,
    templateUrl: './translations.component.html',
    styleUrl: './translations.component.css',
    imports: [FooterComponent, FontAwesomeModule]
})
export class TranslationsComponent {
  edit = faEdit;
  delete = faTrash;

}
