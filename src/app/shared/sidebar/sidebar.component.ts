import { Component, OnInit } from '@angular/core';
import { ManprofileComponent } from "../manprofile/manprofile.component";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBox, faChevronCircleDown, faCouch, faDollar, faFileInvoice, faLocation, faPager, faPeopleArrows, faReceipt, faSignIn, faToolbox, faTrash, faUser, faVideo } from '@fortawesome/free-solid-svg-icons';
import { CommonModule } from '@angular/common';
import { SidebarService } from '../../core/services/sidebar.service';

@Component({
    selector: 'app-sidebar',
    standalone: true,
    templateUrl: './sidebar.component.html',
    styleUrl: './sidebar.component.css',
    imports: [ManprofileComponent, FontAwesomeModule, CommonModule],
})
export class SidebarComponent implements OnInit{
    isVisible: boolean = false;
    constructor(private sidebarService:SidebarService){}
    ngOnInit(): void {
        this.sidebarService.getVisibility().subscribe((isVisible: boolean) => {
          this.isVisible = isVisible;
        });
      }

    faBox = faBox;
    id: any
    mylist: any = {
        num: [
            {
                id: 1,
                myicon: faBox,
                title: "Products",
                sublists: ['Physical', 'Digital'],
                isSublistVisible: false
            },
            {
                id: 2,
                myicon: faDollar,
                title: "Sales",
                sublists: ['Order', 'Transactions'],
                isSublistVisible: false
            },
            {
                id: 3,
                myicon: faCouch,
                title: "Coupons",
                sublists: ['List Coupons', 'Create Coupons'],
                isSublistVisible: false
            },
            {
                id: 4,
                myicon: faPager,
                title: "Pages",
                sublists: ['List Pages', 'Create Pages'],
                isSublistVisible: false
            },
            {
                id: 5,
                myicon: faVideo,
                title: "Media",
            },
            {
                id: 6,
                myicon: faToolbox,
                title: "Menu",
                sublists: ['Menu List', 'Create Menu'],
                isSublistVisible: false
            },
            {
                id: 7,
                myicon: faUser,
                title: "User",
                sublists: ['User List', 'Create User'],
                isSublistVisible: false
            },
            {
                id: 8,
                myicon: faPeopleArrows,
                title: "Vendor",
                sublists: ['Vendor List', 'Create Vendor '],
                isSublistVisible: false
            },
            {
                id: 9,
                myicon: faLocation,
                title: "Localization",
                sublists: ['Translation', 'Currency Rate', 'Taxes'],
                isSublistVisible: false
            },
            {
                id: 10,
                myicon: faReceipt,
                title: "Reports",
            },
            {
                id: 11,
                myicon: faChevronCircleDown,
                title: "Settings",
                sublists: ['Profile'],
                isSublistVisible: false
            },
            {
                id: 12,
                myicon: faFileInvoice,
                title: "Invoice",
                isSublistVisible: false
            },
            {
                id: 13,
                myicon: faSignIn,
                title: "Login",
                isSublistVisible: false
            },
        ]
    }

    toggleSublist(item: any) {
        item.isSublistVisible = !item.isSublistVisible;
      }


}