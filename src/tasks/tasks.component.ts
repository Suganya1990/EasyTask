import { Component, input, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { Task } from './task/task.model';
import { NewTaskComponent } from './new-task/new-task.component';
@Component({
  selector: 'tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
  ];
  @Input({ required: true }) Id!: string;
  @Input({ required: true }) name!: string;
  isAddingTask:boolean = false;

  addTask(){
    console.log("inside adding task function")
    this.isAddingTask=true;
  }
 get selectedUserTasks(){
 return this.tasks.filter((task)=>{return task.userId==this.Id})
 }
onCompleteTask(id:string){
}
onCancelTask(){
  this.isAddingTask = true; 
  
}
}
