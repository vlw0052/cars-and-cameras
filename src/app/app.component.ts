import { Component } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  search$: Subject<string> = new Subject<string>();
  showSearch: boolean = false;
  ngOnInit() {
    this.search$.subscribe(v => {
      this.showSearch = v.length > 0;
    });
  }
}
