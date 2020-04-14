import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {NgxSmartModalService} from 'ngx-smart-modal';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  userNames: string[];
  inText: string;
  getMessageDemo: string;
  imageUrls: string[] = [];
  modelTitle: any;


  constructor(
    private http: HttpClient,
    public ngxSmartModalService: NgxSmartModalService
  ) {

  }

  ngOnInit() {
    // const headers = new HttpHeaders({Authorization: 'Basic ' + btoa('user' + ':' + 'password')});
    // this.http.get<any>('http://localhost:8080/getUsers', {observe: 'response', headers}).subscribe(response => {
    //   this.userNames = response.body;
    //   console.log('user names--------------  ', response.body);
    //
    // }, error1 => {
    //   console.log('user names--------------  error list ');
    //
    // });

  }

  typeText(t) {
    this.inText = t;
  }

  getMessage() {
    const headers = new HttpHeaders({Authorization: 'Basic ' + btoa('user' + ':' + 'password')});
    // this.http.get<any>('http://demosiriweb.us-east-2.elasticbeanstalk.com/hello', {observe: 'response', headers}).subscribe(response => {
    //   this.getMessageDemo = response.body;
    //
    // }, error1 => {
    //   console.log('getMessage--------------  error list ');
    //
    // });
  }


  openModelImage(n, qa) {
    this.imageUrls = [];

    this.ngxSmartModalService.getModal('myModal').open();
    if (qa === 'question') {
      this.modelTitle = 'Question';
      switch (n) {
        case  1: {
          this.imageUrls.push('../../../assets/physics2.jpg');
          break;
        }
        case  2: {
          this.imageUrls.push('../../../assets/physics2.jpg');
          break;

        }
      }
    } else {
      this.modelTitle = 'Answer';
      switch (n) {
        case  1: {
          this.imageUrls.push('../../../assets/physics3.jpg');
          break;
        }
        case  2: {
          this.imageUrls.push('../../../assets/physics3.jpg');
          break;

        }
      }
    }
    console.log('--------------------------------', this.imageUrls);
  }
}
