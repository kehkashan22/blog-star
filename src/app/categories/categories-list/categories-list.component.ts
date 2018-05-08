import { CategoriesService } from './../categories.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.css']
})
export class CategoriesListComponent implements OnInit {
  public categories = [];
  selectedRow: string;
  constructor(
    private _categories: CategoriesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this._categories.getCategories().then((snapshot: any[]) => {
      snapshot.forEach(doc => {
        this.categories.push({
          id: doc.id,
          ...doc.data()
        });
      });
    });
  }

  // toActs(index, lawEl) {
  //   this.selectedRow = lawEl.id;
  //   if (lawEl.id.toLowerCase() === 'sgst') {
  //     this.router.navigate([lawEl.id], { relativeTo: this.route });
  //   } else {
  //     this._categories.getUmbrellacategories(lawEl.id).then((snap: any[]) => {
  //       let law_id = '';
  //       snap.forEach(doc => {
  //         law_id = doc.data().law_id;
  //         this.router.navigate([lawEl.id, 'law', law_id, 'desc'], {
  //           relativeTo: this.route
  //         });
  //       });
  //     });
  //   }
  // }
}

