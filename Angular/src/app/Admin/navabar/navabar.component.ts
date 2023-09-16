import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navabar1',
  templateUrl: './navabar.component.html',
  styleUrls: ['./navabar.component.css']
})
export class NavabarComponent {

constructor(private router:Router){}

  logout(){
    sessionStorage.removeItem('isAdminLoggedIn');
    
    this.router.navigate(['admin/login']);
    
  }





}
