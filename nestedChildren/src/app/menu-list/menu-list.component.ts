import { Component } from '@angular/core';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { Menu } from '../interfaces/menu';
import { MenuServiceService } from '../services/menu-service.service';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrl: './menu-list.component.scss',
})
export class MenuListComponent {
  treeControl = new NestedTreeControl<Menu>((node) => node.child);
  dataSource = new MatTreeNestedDataSource<Menu>();

  constructor(private menuService: MenuServiceService) {
    this.dataSource.data = menuService.menuList;
  }

  hasChild = (_: number, node: Menu) => !!node.child && node.child.length > 0;
}
