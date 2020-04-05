import {Component, OnInit} from '@angular/core';
import {Category} from '../../../models/category';
import {MatDialog, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-counties-food',
  templateUrl: './counties-food.component.html',
  styleUrls: ['./counties-food.component.css']
})
export class CountiesFoodComponent implements OnInit {
  data: Category[] = [];
  category: string;

  constructor(public matDialogRef: MatDialogRef<CountiesFoodComponent>,
              public dialog: MatDialog) {
    this.matDialogRef.disableClose = true;
  }

  selectCategory() {
    this.matDialogRef.beforeClose().subscribe(() => this.matDialogRef.close(this.category));
    this.dialog.closeAll();
  }

  ngOnInit() {
  }

}
