import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  selector: 'search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.sass']
})
export class SearchInputComponent {
  searchInput = new FormControl('');
  @Input()
  searchSubject = new Subject<string>();
  set search(value) {
    this.searchSubject.next(value);
  }
}
