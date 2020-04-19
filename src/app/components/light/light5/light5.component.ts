import {Component, OnInit} from '@angular/core';
import {NgxSmartModalService} from 'ngx-smart-modal';

@Component({
  selector: 'app-light5',
  templateUrl: './light5.component.html',
  styleUrls: ['./light5.component.css']
})
export class Light5Component implements OnInit {
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
          this.imageUrls.push('../../../../assets/light/question/lq4.jpg');
          break;
        }

        case  2: {
          this.imageUrls.push('../../../../assets/light/question/lq5.jpg');

          break;

        }
        // case  4: {
        //   this.imageUrls.push('../../../../assets/electrical/question/eq1.jpg');
        //   break;
        //
        // }
      }
    } else {
      this.modelTitle = 'Answer';
      switch (n) {
        case  1: {
          this.imageUrls.push('../../../../assets/light/answer/la4.jpg');
          break;
        }

        case  2: {
          this.imageUrls.push('../../../../assets/light/answer/la5.jpg');

          break;

        }
        // case  4: {
        //   this.imageUrls.push('../../../../assets/electrical/answer/ea1.jpg');
        //   break;
        //
        // }
      }
    }
  }
}
