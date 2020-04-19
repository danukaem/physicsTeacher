import {Component, OnInit} from '@angular/core';
import {NgxSmartModalService} from 'ngx-smart-modal';

@Component({
  selector: 'app-light6',
  templateUrl: './light6.component.html',
  styleUrls: ['./light6.component.css']
})
export class Light6Component implements OnInit {
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
          this.imageUrls.push('../../../../assets/light/question/lq6.jpg');
          break;
        }
        case  2: {
          this.imageUrls.push('../../../../assets/light/question/lq7.jpg');
          break;
        }


      }
    } else {
      this.modelTitle = 'Answer';
      switch (n) {
        case  1: {
          this.imageUrls.push('../../../../assets/light/answer/la6-1.jpg');
          this.imageUrls.push('../../../../assets/light/answer/la6-2.jpg');
          break;
        }
        case  2: {
          this.imageUrls.push('../../../../assets/light/answer/la7-1.jpg');
          this.imageUrls.push('../../../../assets/light/answer/la7-2.jpg');
          break;
        }


      }
    }
  }
}
