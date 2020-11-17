import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, mergeMap } from 'rxjs/operators';
import { UserService } from '../user.service';
import { User } from '../user/user.model';

@Component({
  selector: 'app-services-documentation',
  templateUrl: './services-documentation.component.html',
  styleUrls: ['./services-documentation.component.scss']
})
export class ServicesDocumentationComponent implements OnInit, OnDestroy {

  user: User = new User();
  constructor(public route: ActivatedRoute, public userService: UserService) { }

  ngOnInit(): void {

    this.userService.getUserByID(1).subscribe({
      next: (data: any) => {
        this.user = data;
      },
      error: err => console.log(err),
      complete: () => console.log('done')
    });

    this.route.params
    .pipe(
      map(params => params.id),
      mergeMap((id = 1) => this.userService.getUserByID(id))
    ).subscribe(value =>{
      this.user = value;
    });
  }

  ngOnDestroy(): void{
  }

  

}
