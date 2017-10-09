import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';

@Component({
    templateUrl: 'first.html'
})
export class FirstPage {

    constructor(private nav: NavController) {
        
    }
    next() {
        this.nav.push(HomePage);
    }
}