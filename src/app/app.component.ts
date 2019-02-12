import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.router.navigate(['/user/trang-chu']);
  }

  // go() {
  //   console.log('phg');
    
  //   this.router.navigate(['/user/trang-chu'])
  // }
}
