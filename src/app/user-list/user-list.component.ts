import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { UserService } from '../_services/user.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  title = 'Hello eve.holt';
  userAll: any[] = [];

  constructor(private user: UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    const udata = this.user.getAllUsers().toPromise()
      .then((res: any) => {
        this.userAll = res.body?.['data'];
        console.log("All Category => ", this.userAll);

      }).catch((error: any) => { return error });
  }

  onDelete(id: any) {
    const Id = id;
    console.log("id => ", Id)

    const userDelete = this.user.getDelete(Id).subscribe((resp: any) => {
      const aData = _.cloneDeep(resp.body?.['data']);
      alert('Deleted File successfully....');
      console.log("Delete File succesfully", aData)
    }, (error: any) => {
      return error;
    })

  }
  onAdd() {
    const addUser = this.user.getAddUser().subscribe((res: any) => {
      console.log(res);
      const id = res['id']
      console.log(id)
      alert('New User Saved Successfully');
    }, (error: any) => {
      console.log(error)
    })
  }

}
