import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() task: any[];
  constructor() { 
    
  }

  average: Number;
  ngOnInit() {
    this.CalcAvg();
  }
  CalcAvg(){
    let avg = 1;
    let sum = 0;
    let count = 0;
    for (let item of this.task[0]["ratings"]){
      console.log(item);
      count++;
      sum += item["stars"];
    }
    this.average = sum/count;
    console.log("AVERAGE: "+this.average);
  }
}
