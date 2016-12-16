import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import * as mj from 'mathjax';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
    im;
  constructor(public navCtrl: NavController) {
    this.im = mj;
  }

}
