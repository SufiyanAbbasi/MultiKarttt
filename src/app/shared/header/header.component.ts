import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCoffee,faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { SidebarService } from '../../core/services/sidebar.service';
import { FullScreenService } from '../../core/services/full-screen.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  faCoffee = faCoffee;
  search = faMagnifyingGlass;

  constructor(private sidebarService: SidebarService, private fullScreenService:FullScreenService,) { }

  toggleFullScreen() {
    this.fullScreenService.toggleFullScreen();
  }
  
  ngOnInit(): void {
  }

  toggleSidebar(): void {
    this.sidebarService.toggleVisibility();
  }
  

  // chatbox on notification
  showChatbox: boolean = true;
  // showChatboxImg: boolean = true;


}
