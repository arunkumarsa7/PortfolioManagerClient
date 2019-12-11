import { Component, OnInit, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material';
import { ViewEncapsulation } from '@angular/compiler/src/core';

@Component({
    templateUrl: './snackbar.component.html',
    styleUrls: ['./snackbar.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class SnackbarComponent implements OnInit {
    constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any) {
        console.log(data);
    }

    ngOnInit() { }

    get getIcon() {
        switch (this.data.snackType) {
            case 'Success':
                return 'done';
            case 'Error':
                return 'error';
            case 'Warn':
                return 'warning';
            case 'Info':
                return 'info';
        }
    }

}
