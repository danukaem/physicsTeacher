import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  userNames: string[];
  inText: string;
  getMessageDemo: string;

  // http: HttpClient;

  constructor(
    private http: HttpClient
  ) {

  }

  ngOnInit() {
    const headers = new HttpHeaders({Authorization: 'Basic ' + btoa('user' + ':' + 'password')});
    this.http.get<any>('http://localhost:8080/getUsers', {observe: 'response', headers}).subscribe(response => {
      this.userNames = response.body;
      console.log('user names--------------  ', response.body);

    }, error1 => {
      console.log('user names--------------  error list ');

    });

  }

  typeText(t) {
    this.inText = t;
  }

  getMessage() {
    const headers = new HttpHeaders({Authorization: 'Basic ' + btoa('user' + ':' + 'password')});
    this.http.get<any>('http://demosiriweb.us-east-2.elasticbeanstalk.com/hello', {observe: 'response', headers}).subscribe(response => {
      this.getMessageDemo = response.body;

    }, error1 => {
      console.log('getMessage--------------  error list ');

    });
  }

  viewQuestion(n: any) {
    console.log('event -------------------------------------', n);
  }

  viewAnswer(n: any) {
    console.log('event -------------------------------------', n);

  }
}
