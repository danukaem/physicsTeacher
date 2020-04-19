import { Component, OnInit } from '@angular/core';
import {NgxSmartModalService} from 'ngx-smart-modal';

@Component({
  selector: 'app-light7',
  templateUrl: './light7.component.html',
  styleUrls: ['./light7.component.css']
})
export class Light7Component implements OnInit {
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
          this.imageUrls.push('../../../../assets/light/question/lq8.jpg');
          break;
        }
        case  2: {
          this.imageUrls.push('../../../../assets/light/question/lq9.jpg');
          break;
        }

      }
    } else {
      this.modelTitle = 'Answer';
      switch (n) {
        case  1: {
          this.imageUrls.push('../../../../assets/light/answer/la8.jpg');
          break;
        }
        case  2: {
          this.imageUrls.push('../../../../assets/light/answer/la9.jpg');
          break;
        }


      }
    }
  }
}
