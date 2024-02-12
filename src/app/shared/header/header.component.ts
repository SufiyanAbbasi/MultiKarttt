import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCoffee,faMagnifyingGlass, faEdit, faInbox, faToolbox,faLock, faSignOut } from '@fortawesome/free-solid-svg-icons';
import { SidebarService } from '../../core/services/sidebar.service';
import { FullScreenService } from '../../core/services/full-screen.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FriendListService } from '../../core/services/freindlist.service';

@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html',
    styleUrl: './header.component.css',
    imports: [FontAwesomeModule, CommonModule, RouterLink]
})
export class HeaderComponent implements OnInit{
  faCoffee = faCoffee;
  search = faMagnifyingGlass;
  edit = faEdit;
  ib = faInbox;
  set = faToolbox;
  lock = faLock;
  logout = faSignOut;

  constructor(private sidebarService: SidebarService, private fullScreenService:FullScreenService, private friendListService: FriendListService) { }

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
 
  // showlist on Image
  showlist : boolean = true;

  //showlang on EN
  showlang : boolean = true;

  //show and hide friend request

  toggleFriendList(): void {
    this.friendListService.toggleFriendList();
  }


}



