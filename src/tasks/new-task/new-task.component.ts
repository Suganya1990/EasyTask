import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTaskData } from '../task/task.model';

@Component({
  selector: 'new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Output() cancel = new EventEmitter<void>()
  @Output() add = new EventEmitter<NewTaskData>()
  enteredTitle='';
  enteredSummary = '';
  enteredDate = '';

  onCancel(){
    this.cancel.emit();
  }
  onSubmit(){
    console.log("OnSubmit triggered")
    this.add.emit({
      title:this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDate
    })

  }

}
