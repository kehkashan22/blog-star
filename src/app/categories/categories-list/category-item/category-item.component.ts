import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.css']
})
export class CategoryItemComponent implements OnInit {

  @Input() chicken: any;
  @Input() index;
  constructor() { }

  ngOnInit() {
  }

}
