import { Component, OnInit } from '@angular/core';
import {NgxSmartModalService} from 'ngx-smart-modal';

@Component({
  selector: 'app-light4',
  templateUrl: './light4.component.html',
  styleUrls: ['./light4.component.css']
})
export class Light4Component implements OnInit {
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
          this.imageUrls.push('../../../../assets/light/question/lq3.jpg');
          break;
        }

        // case  3: {
        //   this.imageUrls.push('../../../../assets/electrical/question/eq2.jpg');
        //   break;
        //
        // }
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
          this.imageUrls.push('../../../../assets/light/answer/la3-1.jpg');
          this.imageUrls.push('../../../../assets/light/answer/la3-2.jpg');
          break;
        }

        // case  3: {
        //   this.imageUrls.push('../../../../assets/electrical/answer/ea2.jpg');
        //   break;
        //
        // }
        // case  4: {
        //   this.imageUrls.push('../../../../assets/electrical/answer/ea1.jpg');
        //   break;
        //
        // }
      }
    }
  }
}
