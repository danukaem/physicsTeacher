import { Component, OnInit } from '@angular/core';
import {NgxSmartModalService} from 'ngx-smart-modal';

@Component({
  selector: 'app-light1',
  templateUrl: './light1.component.html',
  styleUrls: ['./light1.component.css']
})
export class Light1Component implements OnInit {
  imageUrls: string[] = [];
  modelTitle: any;

  constructor(
    public ngxSmartModalService: NgxSmartModalService
  ) {
  }

  ngOnInit() {
  }
  openModelImage(n, qa) {
    this.imageUrls = [];

    this.ngxSmartModalService.getModal('myModal').open();
    if (qa === 'question') {
      this.modelTitle = 'Question';
      switch (n) {
        case  1: {
          this.imageUrls.push('../../../../assets/light/question/lq1.jpg');
          break;
        }

      }
    } else {
      this.modelTitle = 'Answer';
      switch (n) {
        case  1: {
          this.imageUrls.push('../../../../assets/light/answer/la1.jpg');
          break;
        }

      }
    }
  }
}
