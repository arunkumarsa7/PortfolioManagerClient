import { Component, AfterViewInit } from '@angular/core';
import { AppComponent } from '../../app.component';
import { Globals } from '../../shared/constant/globals';
import { AppConstants } from '../../shared/constant/app-constants';
import { RouterUtil } from '../../shared/service/routing/router-util';
import { User } from '../../shared/models';
import { UserService } from '../../shared/service/_services';
import { first } from 'rxjs/operators';
@Component({
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {
    globals: Globals;
    loading = false;
    users: User[];

    ngAfterViewInit(): void {
        document.getElementById('appTitle').innerHTML = AppComponent.title;
        this.globals.currentOE = AppConstants.defaultOE;
        this.globals.appPage = AppConstants.defaultPageKey;
    }

    constructor(private routerUtil: RouterUtil, globals: Globals,private userService: UserService) {
        this.globals = globals;
    }
    ngOnInit() {
        this.loading = true;
        this.userService.getAll().pipe(first()).subscribe(users => {
            this.loading = false;
            this.users = users;
        });
    }
    public handleHomeButtonClick(event: Event) {
        this.globals.currentOE = (event.currentTarget as Element).id;
        this.routerUtil.navigateToNextPage();
    }

}
