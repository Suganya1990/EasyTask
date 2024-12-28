import { Component, input, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskData, Task } from './task/task.model';
import { NewTaskComponent } from './new-task/new-task.component';
import { dummyTasks } from '../dummy-tasks';
@Component({
  selector: 'tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  tasks = dummyTasks
  @Input({ required: true }) Id!: string;
  @Input({ required: true }) name!: string;
  isAddingTask: boolean = false;

  addTask() {
    this.isAddingTask = true;
  }
  get selectedUserTasks() {
    return this.tasks.filter((task) => {
      return task.userId == this.Id;
    });
  }
  onCompleteTask(id: string) {}
  onCancelTask() {
    this.isAddingTask = false;
  }
  onAddTask(taskData: NewTaskData) {
    console.log("Inside onAddTask Data received: " + taskData)
    this.tasks.push({
      id: new Date().getTime().toString(),
      userId: this.Id,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.date,
    });
    this.isAddingTask= false

  }
}
