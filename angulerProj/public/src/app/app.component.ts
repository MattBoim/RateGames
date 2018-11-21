import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

    newGame: any;
    newRating: any;
    SavedId: String;
    error: any;
    // average: Number;

    constructor(private _httpService: HttpService){}

    ngOnInit(){
      this.newGame = { title: "", description: "" }
      this.newRating = { stars: 0, comment: ""};
      this.getGamesFromService();
      this.error = "";
    } 
    games = [];
    task = [];
    getGamesFromService(){
       let observable = this._httpService.getTasks();
       observable.subscribe(data => {
          console.log("Got our games!", data)
          this.games = data['data'];
          console.log(this.games)
       });
    }

  postRate(id){
    this.task = [];
    let observable = this._httpService.addRating(this.newRating, id);
    observable.subscribe(data=> {
      console.log("added rating");
    })
    this.newRating = { stars: 0, comment: ""};
    this.getSpecificTaskFromService(id);
  }

  onSubmit() {
    let observable = this._httpService.addGame(this.newGame);
    observable.subscribe(data => {
      if (data["message"] == "Error"){
        console.log("name exists in database")
        this.error = "Game already exists in database";
      } else {
        this.error = "";
        console.log("submitted add task");
      }
    })
    this.newGame = { title: "", description: "" }
    this.getGamesFromService();
  }

  getSpecificTaskFromService(id){
    this.SavedId = id;
    let observable = this._httpService.getTaskbyID(id);
    observable.subscribe(data => {
      console.log("Got our tasks!", data)
      this.task = data['data'];
      console.log(this.games)
    })
    
  }

  onButtonClickGameShow(id): void { 
    console.log(`Game Click event is working`);
    this.task = [];
    this.getSpecificTaskFromService(id);
  }

  onButtonClickGames(): void { 
    console.log(`Click event is working`);
    this.getGamesFromService();
  }

}

