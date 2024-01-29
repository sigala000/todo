import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  taskArray = [{ taskName: 'Brush teeth',taskDead:'01/01/2024', taskDescription:'today',isCompleted: false }];

  constructor() { }

  ngOnInit(): void {
  }

  

  onSubmit(form: NgForm) {
    console.log(form);

    

    this.taskArray.push({
      taskName: form.controls['task'].value,
      taskDead: form.controls['deadline'].value,
      taskDescription: form.controls['description'].value,
      isCompleted: false
    })

    form.reset();
  }

  onDelete(index: number) {
    console.log(index);

    this.taskArray.splice(index, 1);
  }

  onCheck(index: number) {
    console.log(this.taskArray);

    this.taskArray[index].isCompleted = !this.taskArray[index].isCompleted;
  }

  

}
