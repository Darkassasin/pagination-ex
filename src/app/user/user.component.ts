import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { User } from './User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: User[];

  loading = false;
  total = 0;
  page = 1;
  limit = 10;
  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(): void {
    this.loading = true;
    this.userService.getUsers(this.page, this.limit).subscribe(res => {
      this.total = res.total;
      this.users = res.users;
      this.loading = false;
    });
  }

  goToPage(n: number): void {
    this.page = n;
    this.getUsers();
  }

  onNext(): void {
    console.log(this.page);
      this.page++;
      this.getUsers();
    
  }

  onPrev(): void {
    this.page--;
    this.getUsers();
  }
}
