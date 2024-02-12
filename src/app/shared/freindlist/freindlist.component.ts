import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGear, faTools } from '@fortawesome/free-solid-svg-icons';
import { FriendListService } from '../../core/services/freindlist.service';

@Component({
  selector: 'app-freindlist',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './freindlist.component.html',
  styleUrl: './freindlist.component.css'
})
export class FreindlistComponent implements OnInit {

  constructor(private friendListService: FriendListService) {}
  friendListVisible: boolean = false;
  ngOnInit(): void {
    this.friendListService.getFriendListVisibility().subscribe(visible => {
      this.friendListVisible = visible;
    });
  }

  tool = faGear;

  id: any
  myFriendlist: any = {
    num: [
      {
        id: 1,
        img: "../../../assets/images/man.png",
        name: "Vincent Porter",
        status: "Online"
      },
      
      {
        id: 2,
        img: "../../../assets/images/user1.jpg",
        name: "Cherry",
        status: "28 Minutes Ago"
      },
      {
        id: 3,
        img: "../../../assets/images/user2.jpg",
        name: "Jon Doe",
        status: "1 Day Ago"
      },
      {
        id: 4,
        img: "../../../assets/images/user1.jpg",
        name: "Neha",
        status: "Online"
      },
      {
        id: 5,
        img: "../../../assets/images/user3.jpg",
        name: "Chris Herry",
        status: "1 Hour Ago"
      },
      {
        id: 6,
        img: "../../../assets/images/user1.jpg",
        name: "Neha",
        status: "Online"
      },
      {
        id: 7,
        img: "../../../assets/images/user3.jpg",
        name: "Chris Herry",
        status: "1 Hour Ago"
      },
      {
        id: 8,
        img: "../../../assets/images/user2.jpg",
        name: "Jon Doe",
        status: "1 Min Ago"
      },
      
    ]
  }




}
