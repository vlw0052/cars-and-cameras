import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from 'events';
import { FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'assign-item',
  templateUrl: './assign-item.component.html',
  styleUrls: ['./assign-item.component.sass']
})
export class AssignItemComponent implements OnInit {
  @Input() placeholder: string;
  @Input() options: Observable<any[]>;
  @Input() displayKey: string;
  @Output() assign: EventEmitter = new EventEmitter();
  selectFormControl = new FormControl(null, [Validators.required]);

  ngOnInit() {}
  onSubmit() {
    this.assign.emit(this.selectFormControl.value);
  }
}
