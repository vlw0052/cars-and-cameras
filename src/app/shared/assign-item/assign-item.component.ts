import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
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
  @Output() assign: EventEmitter<any> = new EventEmitter();
  assignmentForm = new FormGroup({
    selectItem: new FormControl(null, [Validators.required])
  });

  ngOnInit() {}
  onSubmit() {
    console.log(this.assignmentForm.controls.selectItem.value);
    this.assign.emit(this.assignmentForm.controls.selectItem.value);
  }
}
