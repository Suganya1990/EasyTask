import { Component, EventEmitter, Input, Output } from '@angular/core';
interface Task{
  id: string;
  userId: string;
  title: string;
  dueDate: string;
  summary: string;
}

@Component({
  selector: 'task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({required:true}) task!: Task;
  @Output () complete = new EventEmitter<string>();

  onCompleteTask(){
    this.complete.emit(this.task.id)
  }
}
