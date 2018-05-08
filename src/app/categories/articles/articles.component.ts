import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Params, Router, ActivatedRoute } from '@angular/router';
import { DaterangePickerComponent } from 'ng2-daterangepicker';
import * as moment from 'moment';
import { CategoriesService } from '../categories.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit, OnDestroy {
  filter: any;
  category_id: string;
  act_id: string;
  articles = [];
  temparticles = [];
  fragment = '';
  isDesc = false;
  column = 'quiz';
  direction: number;
  daterange: any;
  private sub: any;
  p = 1;


  @ViewChild(DaterangePickerComponent) private picker: DaterangePickerComponent;

  constructor(
    private _categories: CategoriesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe((params: Params) => {
      this.articles = [];
      this.category_id = params['article_id'];
      console.log(this.category_id);
      this._categories.getArticleList(this.category_id).then((snap: any[]) => {
        this.articles = [];
        console.log('here');
        snap.forEach(doc => {
          this.articles.push({
            id: doc.id,
            ...doc.data()
          });
          this.articles.sort(
            (a, b) =>
              moment(a.date).isSameOrBefore(moment(b.date))
                ? 1
                : moment(b.date).isSameOrBefore(moment(a.date)) ? -1 : 0
          );
          this.temparticles = this.articles.slice();
          console.log(doc.id, '=>', doc.data());
        });
      });
    });
  }

ngOnDestroy() {
  this.sub.unsubscribe();
}
}
