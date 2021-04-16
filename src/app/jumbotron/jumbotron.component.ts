import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

const panels = document.querySelectorAll('.panel')

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.scss']
})
export class JumbotronComponent {

  tab: any = 'tab1';
  tab1: any
  tab2: any
  tab3: any
  tab4: any
  tab5: any
  Clicked: boolean
  jumbotron_panels: any

  onClick(check) {
    if (check == 1) {
      this.tab = 'tab1';
    } else if (check == 2) {
      this.tab = 'tab2';
    } else if (check == 3) {
      this.tab = 'tab3';
    } else if (check == 4) {
      this.tab = 'tab4'
    } else {
      this.tab = 'tab5'
    }
  }

  onSwitch(check) {

    switch (check) {
      case 1:
        return 'tab1';
      case 2:
        return 'tab2';
      case 3:
        return 'tab3';
      case 4:
        return 'tab4';
      case 5:
        return 'tab5';
    }
  }

  constructor(db: AngularFireDatabase) {
    db.list('/jumbotron_panels')
      .valueChanges()
      .subscribe(jumbotron_panels => {
        this.jumbotron_panels = jumbotron_panels;
        console.log(this.jumbotron_panels);
      })
  }

}
