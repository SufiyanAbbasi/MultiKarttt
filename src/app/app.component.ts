import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterOutlet , NavigationEnd} from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from "./shared/sidebar/sidebar.component";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { ChartModule } from 'angular-highcharts';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FullScreenService } from './core/services/full-screen.service';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { LoginComponent } from "./pages/login/login.component";



@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, RouterLink, HeaderComponent, SidebarComponent, DashboardComponent, ChartModule, FontAwesomeModule]
})
export class AppComponent implements OnInit{
    constructor(private fullScreenService: FullScreenService, private router: Router) { }

    get isFullScreen(): boolean {
        return this.fullScreenService.getFullScreenState();
    }


    isLoginPageRoute: boolean = false;  
    ngOnInit() {
      this.router.events.subscribe(event => {
        if (event instanceof NavigationEnd) {
          this.isLoginPageRoute = this.router.url === '/login';
        }
      });
    }
}
