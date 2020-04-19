import { Component, OnInit } from '@angular/core';
import {NgxSmartModalService} from 'ngx-smart-modal';

@Component({
  selector: 'app-light11',
  templateUrl: './light11.component.html',
  styleUrls: ['./light11.component.css']
})
export class Light11Component implements OnInit {
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
          this.imageUrls.push('../../../../assets/light/question/lq18.jpg');
          break;
        }

      }
    } else {
      this.modelTitle = 'Answer';
      switch (n) {
        case  1: {
          this.imageUrls.push('../../../../assets/light/answer/la18.jpg');
          break;
        }

      }
    }
  }
}
