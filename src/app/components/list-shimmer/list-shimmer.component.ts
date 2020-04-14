import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-list-shimmer',
    templateUrl: './list-shimmer.component.html',
    styleUrls: ['./list-shimmer.component.scss']
})
export class ListShimmerComponent implements OnInit {
    list = [0, 1];

    @Input() showCircle = true;
    @Input() shimmerWidth;
    @Input() classes;

    constructor() {
    }

    @Input() set lines(value: number) {
        this.list = [];
        for (let i = 0; i < value; i++) {
            this.list.push(i);
        }
    }

    ngOnInit() {
    }

}
