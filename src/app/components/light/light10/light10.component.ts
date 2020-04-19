import {Component, OnInit} from '@angular/core';
import {NgxSmartModalService} from 'ngx-smart-modal';

@Component({
  selector: 'app-light10',
  templateUrl: './light10.component.html',
  styleUrls: ['./light10.component.css']
})
export class Light10Component implements OnInit {
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
          this.imageUrls.push('../../../../assets/light/question/lq16.jpg');
          this.imageUrls.push('../../../../assets/light/question/lq17.jpg');
          break;
        }
        case  2: {
          this.imageUrls.push('../../../../assets/light/question/lq14.jpg');
          break;
        }
        case  3: {
          this.imageUrls.push('../../../../assets/light/question/lq15.jpg');
          break;
        }
        case  4: {
          this.imageUrls.push('../../../../assets/light/question/lq18.jpg');
          break;
        }

        case  5: {
          this.imageUrls.push('../../../../assets/light/question/lq19.jpg');
          break;
        }
        case  6: {
          this.imageUrls.push('../../../../assets/light/question/lq20.jpg');
          break;
        }
        case  7: {
          this.imageUrls.push('../../../../assets/light/question/lq21.jpg');
          break;
        }

      }
    } else {
      this.modelTitle = 'Answer';
      switch (n) {

        case  1: {
          this.imageUrls.push('../../../../assets/light/answer/la16.jpg');
          this.imageUrls.push('../../../../assets/light/answer/la17.jpg');
          break;
        }
        case  2: {
          this.imageUrls.push('../../../../assets/light/answer/la14.jpg');
          break;
        }
        case  3: {
          this.imageUrls.push('../../../../assets/light/answer/la15.jpg');
          break;
        }
        case  4: {
          this.imageUrls.push('../../../../assets/light/answer/la18.jpg');
          break;
        }

        case  5: {
          this.imageUrls.push('../../../../assets/light/answer/la19-1.jpg');
          this.imageUrls.push('../../../../assets/light/answer/la19-2.jpg');
          break;
        }
        case  6: {
          this.imageUrls.push('../../../../assets/light/answer/la20-1.jpg');
          break;
        }
        case  7: {
          this.imageUrls.push('../../../../assets/light/answer/la21-1.jpg');
          this.imageUrls.push('../../../../assets/light/answer/la21-2.jpg');
          break;
        }

      }
    }
  }
}
