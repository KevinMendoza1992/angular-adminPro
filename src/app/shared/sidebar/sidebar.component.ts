import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  menuItems: any[];

  /*En el constructor se inyectan los servicios para poder usarlos */
  constructor( private sidebarService: SidebarService) { 
    this.menuItems = sidebarService.menu;
  }

  ngOnInit(): void {
  }

}
