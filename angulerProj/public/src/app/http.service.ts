import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HttpService {
  postToServer(num){
    // use the .post() method of HttpClient
    // num must be an object
    // provide the url of your post route - make sure this is set up in your server!
    return this._http.post('/tasks', num);  
  }
  
  addRating(newR, id){
    console.log("New rating: ");
    console.log(newR);
    return this._http.post('/'+id, newR);
  }

  addGame(newtask){
    console.log("new task: "+newtask['title']);
    return this._http.post('/new', newtask);
  }

  getTasks(){
    return this._http.get('/games');
  }
  getTaskbyID(id){
    return this._http.get('/'+id);
    // let tempObservable = this._http.get('/'+id);
    // tempObservable.subscribe(data => console.log("Got specific task.", data));
  }

  newTask(){
    let tempObservable = this._http.post('/new/clean the car/get all those curves!', null);
    tempObservable.subscribe(data => console.log("Created task (clean the car).", data));
  }

  updateTask(id, name, desc){
    return this._http.put('/'+id+"/"+name+"/"+desc, null);
    // tempObservable.subscribe(data => console.log("Updated task.", data));
  }

  deleteTask(id){
    return this._http.delete('/'+id);
    // tempObservable.subscribe(data => console.log("Deleted task.", data));
  }

  constructor(private _http: HttpClient){
    // this.getTasks();
    // this.getTaskbyID();
    // this.newTask();
    // this.updateTask();
    // this.deleteTask();
  }
}


