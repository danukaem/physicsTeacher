import { Component, OnInit } from '@angular/core';
import {NgxSmartModalService} from 'ngx-smart-modal';

@Component({
  selector: 'app-light8',
  templateUrl: './light8.component.html',
  styleUrls: ['./light8.component.css']
})
export class Light8Component implements OnInit {
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
          this.imageUrls.push('../../../../assets/light/question/lq10.jpg');
          break;
        }
        case  2: {
          this.imageUrls.push('../../../../assets/light/question/lq11.jpg');
          break;
        }
        case  3: {
          this.imageUrls.push('../../../../assets/light/question/lq12.jpg');
          break;
        }

      }
    } else {
      this.modelTitle = 'Answer';
      switch (n) {
        case  1: {
          this.imageUrls.push('../../../../assets/light/answer/la10.jpg');
          break;
        }
        case  2: {
          this.imageUrls.push('../../../../assets/light/answer/la11.jpg');
          break;
        }
        case  3: {
          this.imageUrls.push('../../../../assets/light/answer/la12.jpg');
          break;
        }


      }
    }
  }
}
