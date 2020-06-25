// import { Component } from '@angular/core';
// import {AsterixJsonService} from '../aterix-json.service';
// import { Asterix_en_Obelix } from '../types';
// import { Subscriber } from 'rxjs';

// @Component({
//   selector: 'app-tab1',
//   templateUrl: 'tab1.page.html',
//   styleUrls: ['tab1.page.scss']
// })
// export class Tab1Page {
//   Asterix_en_ObelixList: Asterix_en_Obelix[] = [];

//   constructor(private AterixJsonService: AsterixJsonService) {
//     AsterixJsonService.GetAllAsterix_en_Obelix().subscribe((data: AsterixJsonService[ ] => {
//       this.Asterix_en_ObelixList = data;
//       console.log(this.Asterix_en_ObelixList; 
//   });
//   }

// }

import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}

}
