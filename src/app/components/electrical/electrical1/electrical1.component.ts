import { Component, OnInit } from '@angular/core';
import {NgxSmartModalService} from 'ngx-smart-modal';

@Component({
  selector: 'app-electrical1',
  templateUrl: './electrical1.component.html',
  styleUrls: ['./electrical1.component.css']
})
export class Electrical1Component implements OnInit {

  imageUrls: string[] = [];
  modelTitle: any;


  constructor(
    public ngxSmartModalService: NgxSmartModalService
  ) {}

  ngOnInit() {
  }

  openModelImage(n, qa) {
    this.imageUrls = [];

    this.ngxSmartModalService.getModal('myModal').open();
    if (qa === 'question') {
      this.modelTitle = 'Question';
      switch (n) {
        case  1: {
          this.imageUrls.push('../../../../assets/electrical/question/eq4.jpg');
          break;
        }
        case  2: {
          this.imageUrls.push('../../../../assets/electrical/question/eq5.jpg');
          break;

        }
        case  3: {
          this.imageUrls.push('../../../../assets/electrical/question/eq2.jpg');
          break;

        }
        case  4: {
          this.imageUrls.push('../../../../assets/electrical/question/eq1.jpg');
          break;

        }
      }
    } else {
      this.modelTitle = 'Answer';
      switch (n) {
        case  1: {
          this.imageUrls.push('../../../../assets/electrical/answer/ea4.jpg');
          break;
        }
        case  2: {
          this.imageUrls.push('../../../../assets/electrical/answer/ea5.jpg');
          break;

        }
        case  3: {
          this.imageUrls.push('../../../../assets/electrical/answer/ea2.jpg');
          break;

        }
        case  4: {
          this.imageUrls.push('../../../../assets/electrical/answer/ea1.jpg');
          break;

        }
      }
    }
  }

}
