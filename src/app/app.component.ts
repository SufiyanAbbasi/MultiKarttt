import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from "./shared/sidebar/sidebar.component";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { ChartModule } from 'angular-highcharts';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FullScreenService } from './core/services/full-screen.service';



@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, RouterLink, HeaderComponent, SidebarComponent, DashboardComponent, ChartModule, FontAwesomeModule]
})
export class AppComponent {
    constructor(private fullScreenService: FullScreenService) { }

    get isFullScreen(): boolean {
        return this.fullScreenService.getFullScreenState();
    }
}
