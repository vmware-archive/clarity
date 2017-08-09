/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";

const EXAMPLE_HTML = `
<clr-tree-node>
    The Beatles
    <ng-template [clrIfExpanded]="true">
        <clr-tree-node>
            <a
                [routerLink]="['./album1']"
                class="clr-treenode-link"
                routerLinkActive="active">Abbey Road</a>
        </clr-tree-node>

        <clr-tree-node>
            <a
                [routerLink]="['./album2']"
                class="clr-treenode-link"
                routerLinkActive="active">Revolver</a>
        </clr-tree-node>

        <clr-tree-node>
            <a
                [routerLink]="['./album3']"
                class="clr-treenode-link"
                routerLinkActive="active">Rubber Soul</a>
        </clr-tree-node>
    </ng-template>
</clr-tree-node>
<router-outlet></router-outlet>
`;

@Component({
    selector: "clr-tree-node-routing-demo",
    // Note the .css extension here, not .scss. That's the best we can have at the moment.
    styleUrls: ["../tree-view.demo.scss"],
    templateUrl: "tree-node-routing.html"
})
export class TreeNodeRoutingDemo {
    example_html = EXAMPLE_HTML;

    pane: number = 0;

    showPane(pane: number) {
        this.pane = pane;
    }

    content: any[] = [
        {
            title: "Abbey Road (1969)",
            content: `
                Abbey Road is the eleventh studio album by the English rock band 
                the Beatles, released on 26 September 1969 by Apple Records. 
                The recording sessions for the album were the last in which all 
                four Beatles participated. Although Let It Be was the final album 
                that the Beatles completed before the band's dissolution in April 1970, 
                most of the album had been recorded before the Abbey Road sessions began.
                A double A-side single from the album, "Something"/"Come Together", 
                released in October, topped the Billboard chart in the US.
            `
        },
        {
            title: "Revolver (1966)",
            content: `
                Revolver is the seventh studio album by the English rock band the Beatles. 
                It was released on 5 August 1966 in the United Kingdom and three days 
                later in the United States. The record spent 34 weeks on the UK Albums 
                Chart, for seven of which it held the number one spot. Reduced to eleven 
                songs for the North American market, Revolver was the last Beatles album
                to be subjected to Capitol Records' policy of altering the band's 
                intended running order and content. In America, the album topped
                the Billboard Top LPs list for six weeks.
            `
        },
        {
            title: "Rubber Soul (1965)",
            content: `
                Rubber Soul is a 1965 album by the Beatles, their sixth UK album, 
                and the tenth released in America. Released on 3 December, it met
                with a highly favourable critical response and topped record charts
                in the United Kingdom for several weeks, as well as in the United States,
                where it was issued with a different selection of tracks. Produced by 
                George Martin, Rubber Soul incorporates a mix of 1960s pop, soul, and 
                folk music styles. In 2012, Rubber Soul was ranked number five on 
                Rolling Stone magazine's list of the "500 Greatest Albums of All Time".
            `
        }
    ];
}
