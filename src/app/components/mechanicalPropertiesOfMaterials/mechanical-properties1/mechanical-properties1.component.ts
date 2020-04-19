import { Component, OnInit } from '@angular/core';
import {NgxSmartModalService} from 'ngx-smart-modal';

@Component({
  selector: 'app-mechanical-properties1',
  templateUrl: './mechanical-properties1.component.html',
  styleUrls: ['./mechanical-properties1.component.css']
})
export class MechanicalProperties1Component implements OnInit {
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
          this.imageUrls.push('../../../../assets/propertiesOfMaterials/question/mpq1.jpg');
          break;
        }
        case  2: {
          this.imageUrls.push('../../../../assets/propertiesOfMaterials/question/mpq2.jpg');
          break;
        }
        case  3: {
          this.imageUrls.push('../../../../assets/propertiesOfMaterials/question/mpq3.jpg');
          break;
        }
        case  4: {
          this.imageUrls.push('../../../../assets/propertiesOfMaterials/question/mpq4.jpg');
          break;
        }
        case  5: {
          this.imageUrls.push('../../../../assets/propertiesOfMaterials/question/mpq5.jpg');
          break;
        }

      }
    } else {
      this.modelTitle = 'Answer';
      switch (n) {
        case  1: {
          this.imageUrls.push('../../../../assets/propertiesOfMaterials/answer/mpa1.jpg');
          break;
        }

        case  2: {
          this.imageUrls.push('../../../../assets/propertiesOfMaterials/answer/mpa2-1.jpg');
          this.imageUrls.push('../../../../assets/propertiesOfMaterials/answer/mpa2-2.jpg');
          break;
        }

        case  3: {
          this.imageUrls.push('../../../../assets/propertiesOfMaterials/answer/mpa3-1.jpg');
          this.imageUrls.push('../../../../assets/propertiesOfMaterials/answer/mpa3-2.jpg');
          break;
        }

        case  4: {
          this.imageUrls.push('../../../../assets/propertiesOfMaterials/answer/mpa4.jpg');
          break;
        }

        case  5: {
          this.imageUrls.push('../../../../assets/propertiesOfMaterials/answer/mpa5.jpg');

          break;
        }

      }
    }
  }
}
