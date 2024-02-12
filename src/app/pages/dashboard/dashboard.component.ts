import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
// import {  ChartModule, HighchartsGantt } from 'angular-highcharts';
import { Chart } from 'chart.js/auto'
import { ChartsComponent } from '../../shared/charts/charts.component';
import { TablesComponent } from '../../shared/table/tables/tables.component';
import { EmptableComponent } from "../../shared/table/emptable/emptable.component";
import { CommonModule } from '@angular/common';
import { DbboxesComponent } from "../../shared/dbboxes/dbboxes.component";
import { FooterComponent } from "../../shared/footer/footer.component";


@Component({
    selector: 'app-dashboard',
    standalone: true,
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.css',
    imports: [FontAwesomeModule, CommonModule, ChartsComponent, TablesComponent, EmptableComponent, DbboxesComponent, FooterComponent]
})
export class DashboardComponent  {

id: any;
total: any = {
  num: [
    {
      id: 1,
      title: "Total Sales",
      url: '../assets/images/firstg.png',
      per: "42%",
      small: "Sales Last Month",
      exp: "9054",
      ratio: "0.25",
      svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
    class="feather feather-briefcase text-white ms-3 mt-3" _ngcontent-serverapp-c1119890716="">
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
   </svg>`,
      gross: "Gross Sales Of August",
      lorem: "Lorem Ipsum is simply dummy text of the printing and typesetting"
    },
    {
      id: 2,
      title: "Total purchase",
      url: '../assets/images/secg.png',
      per: "80%",
      small: "Monthly Purchase",
      exp: "5054",
      ratio: "0.91",
      svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
    class="feather feather-briefcase text-white ms-3 mt-3" _ngcontent-serverapp-c1119890716="">
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
   </svg>`,
      gross: "Avg Gross purchase",
      lorem: "Lorem Ipsum is simply dummy text of the printing and typesetting"
    },
    {
      id: 3,
      title: "Total cash transaction",
      url: '../assets/images/thirdg.png',
      per: "30%",
      small: "Monthly Purchase Full",
      exp: "9024",
      ratio: "6.91",
      svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
    class="feather feather-briefcase text-white ms-3 mt-3" _ngcontent-serverapp-c1119890716="">
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
   </svg>`,
      gross: "Details about Cash",
      lorem: "Lorem Ipsum is simply dummy text of the printing and typesetting"
    },
    {
      id: 4,
      title: "Daily Deposits",
      url: '../assets/images/forthg.png',
      per: "70%",
      small: "Security Deposit",
      exp: "0782",
      ratio: "0.85",
      svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
    class="feather feather-briefcase text-white ms-3 mt-3" _ngcontent-serverapp-c1119890716="">
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
   </svg>`,
      gross: "Gross sales of June",
      lorem: "Lorem Ipsum is simply dummy text of the printing and typesetting"
    },
  ],
}



}


