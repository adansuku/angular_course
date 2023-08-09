import { Component } from '@angular/core';

@Component({
  selector: 'app-practicing-directives',
  templateUrl: './practicing-directives.component.html',
    styles: [`
    .log_item {
    color: white;
    }
  `]
})
export class PracticingDirectivesComponent {
  secretPassword = "The password is Cherrypicking"
  showPassword = false
  logs = []
  clicks = 0

  onShowContent() {
    this.showPassword = !this.showPassword
    this.logs.push([new Date(), "clicks:" + this.clicks])
    this.clicks++
  }
  
  getBackgroundColor() {
    return 'blue';
  }
}
