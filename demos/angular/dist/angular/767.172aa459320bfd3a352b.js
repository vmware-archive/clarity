"use strict";(self.webpackChunkangular=self.webpackChunkangular||[]).push([[767],{7767:(et,h,a)=>{a.r(h),a.d(h,{DatagridModule:()=>tt});var _,f,o,u=a(8583),r=a(1111),p=a(4889),t=a(639);function q(o,i,e){return[...o].filter(n=>n[i].toLocaleLowerCase().includes(e.toLocaleLowerCase()))}function A(o,i,e){return"ascending"===e?o.sort((n,s)=>n[i].localeCompare(s[i])):"descending"===e?o.sort((n,s)=>n[i].localeCompare(s[i])).reverse():o}(o=_||(_={})).online="success",o.disruption="warning",o.offline="danger",o.deactivated="neutral",function(o){o.online="check-circle",o.disruption="exclamation-triangle",o.offline="exclamation-circle",o.deactivated="disconnect"}(f||(f={}));var v=a(5917),C=a(3637),w=a(7393),y=a(1593);class D{constructor(i,e){this.delay=i,this.scheduler=e}call(i,e){return e.subscribe(new Z(i,this.delay,this.scheduler))}}class Z extends w.L{constructor(i,e,n){super(i),this.delay=e,this.scheduler=n,this.queue=[],this.active=!1,this.errored=!1}static dispatch(i){const e=i.source,n=e.queue,s=i.scheduler,l=i.destination;for(;n.length>0&&n[0].time-s.now()<=0;)n.shift().notification.observe(l);if(n.length>0){const d=Math.max(0,n[0].time-s.now());this.schedule(i,d)}else this.unsubscribe(),e.active=!1}_schedule(i){this.active=!0,this.destination.add(i.schedule(Z.dispatch,this.delay,{source:this,destination:this.destination,scheduler:i}))}scheduleNotification(i){if(!0===this.errored)return;const e=this.scheduler,n=new O(e.now()+this.delay,i);this.queue.push(n),!1===this.active&&this._schedule(e)}_next(i){this.scheduleNotification(y.P.createNext(i))}_error(i){this.errored=!0,this.queue=[],this.destination.error(i),this.unsubscribe()}_complete(){this.scheduleNotification(y.P.createComplete()),this.unsubscribe()}}class O{constructor(i,e){this.time=i,this.notification=e}}let m=(()=>{class o{get(){return[{id:"vm-host-001",status:"online",cpu:5,memory:10,selected:!1,about:"Lorem ipsum dolor sit amet"},{id:"vm-host-003",status:"online",cpu:10,memory:30,selected:!1,about:"Lorem ipsum dolor sit amet"},{id:"vm-host-002",status:"online",cpu:20,memory:30,selected:!1,about:"Lorem ipsum dolor sit amet"},{id:"vm-host-011",status:"online",cpu:5,memory:15,selected:!1,about:"Lorem ipsum dolor sit amet"},{id:"vm-host-004",status:"offline",cpu:90,memory:80,selected:!1,about:"Lorem ipsum dolor sit amet"},{id:"vm-host-016",status:"online",cpu:5,memory:15,selected:!1,about:"Lorem ipsum dolor sit amet"},{id:"vm-host-008",status:"disruption",cpu:50,memory:60,selected:!1,about:"Lorem ipsum dolor sit amet"},{id:"vm-host-018",status:"offline",cpu:0,memory:0,selected:!1,about:"Lorem ipsum dolor sit amet"},{id:"vm-host-006",status:"deactivated",cpu:0,memory:0,selected:!1,about:"Lorem ipsum dolor sit amet"},{id:"vm-host-005",status:"offline",cpu:85,memory:70,selected:!1,about:"Lorem ipsum dolor sit amet"},{id:"vm-host-014",status:"disruption",cpu:73,memory:62,selected:!1,about:"Lorem ipsum dolor sit amet"},{id:"vm-host-017",status:"offline",cpu:0,memory:0,selected:!1,about:"Lorem ipsum dolor sit amet"},{id:"vm-host-007",status:"deactivated",cpu:0,memory:0,selected:!1,about:"Lorem ipsum dolor sit amet"},{id:"vm-host-010",status:"disruption",cpu:50,memory:60,selected:!1,about:"Lorem ipsum dolor sit amet"},{id:"vm-host-009",status:"disruption",cpu:65,memory:90,selected:!1,about:"Lorem ipsum dolor sit amet"},{id:"vm-host-012",status:"offline",cpu:85,memory:70,selected:!1,about:"Lorem ipsum dolor sit amet"},{id:"vm-host-020",status:"deactivated",cpu:0,memory:0,selected:!1,about:"Lorem ipsum dolor sit amet"},{id:"vm-host-013",status:"deactivated",cpu:0,memory:0,selected:!1,about:"Lorem ipsum dolor sit amet"},{id:"vm-host-015",status:"online",cpu:15,memory:20,selected:!1,about:"Lorem ipsum dolor sit amet"},{id:"vm-host-019",status:"online",cpu:34,memory:28,selected:!1,about:"Lorem ipsum dolor sit amet"}]}asyncGet(e=500){return(0,v.of)([{id:"vm-host-001",status:"online",cpu:5,memory:10,selected:!1,about:"Lorem ipsum dolor sit amet"},{id:"vm-host-003",status:"online",cpu:10,memory:30,selected:!1,about:"Lorem ipsum dolor sit amet"},{id:"vm-host-002",status:"online",cpu:20,memory:30,selected:!1,about:"Lorem ipsum dolor sit amet"},{id:"vm-host-011",status:"online",cpu:5,memory:15,selected:!1,about:"Lorem ipsum dolor sit amet"},{id:"vm-host-004",status:"offline",cpu:90,memory:80,selected:!1,about:"Lorem ipsum dolor sit amet"},{id:"vm-host-016",status:"online",cpu:5,memory:15,selected:!1,about:"Lorem ipsum dolor sit amet"},{id:"vm-host-008",status:"disruption",cpu:50,memory:60,selected:!1,about:"Lorem ipsum dolor sit amet"},{id:"vm-host-018",status:"offline",cpu:0,memory:0,selected:!1,about:"Lorem ipsum dolor sit amet"},{id:"vm-host-006",status:"deactivated",cpu:0,memory:0,selected:!1,about:"Lorem ipsum dolor sit amet"},{id:"vm-host-005",status:"offline",cpu:85,memory:70,selected:!1,about:"Lorem ipsum dolor sit amet"},{id:"vm-host-014",status:"disruption",cpu:73,memory:62,selected:!1,about:"Lorem ipsum dolor sit amet"},{id:"vm-host-017",status:"offline",cpu:0,memory:0,selected:!1,about:"Lorem ipsum dolor sit amet"},{id:"vm-host-007",status:"deactivated",cpu:0,memory:0,selected:!1,about:"Lorem ipsum dolor sit amet"},{id:"vm-host-010",status:"disruption",cpu:50,memory:60,selected:!1,about:"Lorem ipsum dolor sit amet"},{id:"vm-host-009",status:"disruption",cpu:65,memory:90,selected:!1,about:"Lorem ipsum dolor sit amet"},{id:"vm-host-012",status:"offline",cpu:85,memory:70,selected:!1,about:"Lorem ipsum dolor sit amet"},{id:"vm-host-020",status:"deactivated",cpu:0,memory:0,selected:!1,about:"Lorem ipsum dolor sit amet"},{id:"vm-host-013",status:"deactivated",cpu:0,memory:0,selected:!1,about:"Lorem ipsum dolor sit amet"},{id:"vm-host-015",status:"online",cpu:15,memory:20,selected:!1,about:"Lorem ipsum dolor sit amet"},{id:"vm-host-019",status:"online",cpu:34,memory:28,selected:!1,about:"Lorem ipsum dolor sit amet"}]).pipe(function(o,i=C.P){const n=function(o){return o instanceof Date&&!isNaN(+o)}(o)?+o-i.now():Math.abs(o);return s=>s.lift(new D(n,i))}(e))}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var c=a(6750);function F(o,i){if(1&o&&(t.TgZ(0,"cds-grid-row"),t.TgZ(1,"cds-grid-cell"),t._uU(2),t.qZA(),t.TgZ(3,"cds-grid-cell"),t._uU(4),t.qZA(),t.TgZ(5,"cds-grid-cell"),t._uU(6),t.qZA(),t.TgZ(7,"cds-grid-cell"),t._uU(8),t.qZA(),t.TgZ(9,"cds-grid-cell"),t._uU(10),t.qZA(),t.qZA()),2&o){const e=i.$implicit;t.xp6(2),t.Oqu(e.id),t.xp6(2),t.Oqu(e.status),t.xp6(2),t.Oqu(e.memory),t.xp6(2),t.Oqu(e.selected),t.xp6(2),t.Oqu(e.about)}}function L(o,i){if(1&o&&(t.TgZ(0,"clr-dg-row"),t.TgZ(1,"clr-dg-cell"),t._uU(2),t.qZA(),t.TgZ(3,"clr-dg-cell"),t._uU(4),t.qZA(),t.TgZ(5,"clr-dg-cell"),t._uU(6),t.qZA(),t.TgZ(7,"clr-dg-cell"),t._uU(8),t.qZA(),t.TgZ(9,"clr-dg-cell"),t._uU(10),t.qZA(),t.qZA()),2&o){const e=i.$implicit;t.xp6(2),t.Oqu(e.id),t.xp6(2),t.Oqu(e.status),t.xp6(2),t.Oqu(e.memory),t.xp6(2),t.Oqu(e.selected),t.xp6(2),t.Oqu(e.about)}}let U=(()=>{class o{constructor(e){this.vmData=e,this.data=e.asyncGet()}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(m))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-basic"]],decls:44,vars:6,consts:[["aria-label","basic datagrid demo"],[4,"ngFor","ngForOf"],[2,"width","100%"]],template:function(e,n){1&e&&(t.TgZ(0,"h2"),t._uU(1,"Basic @cds/core Grid"),t.qZA(),t.TgZ(2,"p"),t._uU(3,"This is a basic "),t.TgZ(4,"strong"),t._uU(5,"@cds/core"),t.qZA(),t._uU(6," grid."),t.qZA(),t.TgZ(7,"cds-grid",0),t.TgZ(8,"cds-grid-column"),t._uU(9,"ID"),t.qZA(),t.TgZ(10,"cds-grid-column"),t._uU(11,"Status"),t.qZA(),t.TgZ(12,"cds-grid-column"),t._uU(13,"Memory"),t.qZA(),t.TgZ(14,"cds-grid-column"),t._uU(15,"Selected"),t.qZA(),t.TgZ(16,"cds-grid-column"),t._uU(17,"About"),t.qZA(),t.YNc(18,F,11,5,"cds-grid-row",1),t.ALo(19,"async"),t.TgZ(20,"cds-grid-footer"),t._uU(21,"Grid footer"),t.qZA(),t.qZA(),t.TgZ(22,"h2"),t._uU(23,"Basic @clr/angular Datagrid"),t.qZA(),t.TgZ(24,"p"),t._uU(25,"This is a basic "),t.TgZ(26,"strong"),t._uU(27,"@clr/angular"),t.qZA(),t._uU(28," datagrid."),t.qZA(),t.TgZ(29,"clr-datagrid",2),t.TgZ(30,"clr-dg-column"),t._uU(31,"ID"),t.qZA(),t.TgZ(32,"clr-dg-column"),t._uU(33,"Status"),t.qZA(),t.TgZ(34,"clr-dg-column"),t._uU(35,"Memory"),t.qZA(),t.TgZ(36,"clr-dg-column"),t._uU(37,"Selected"),t.qZA(),t.TgZ(38,"clr-dg-column"),t._uU(39,"About"),t.qZA(),t.YNc(40,L,11,5,"clr-dg-row",1),t.ALo(41,"async"),t.TgZ(42,"clr-dg-footer"),t._uU(43,"Datagrid footer"),t.qZA(),t.qZA()),2&e&&(t.xp6(18),t.Q6J("ngForOf",t.lcZ(19,2,n.data)),t.xp6(22),t.Q6J("ngForOf",t.lcZ(41,4,n.data)))},directives:[c.MY,c.jR,u.sg,c.Q2,r.C9t,r.PDs,r.Nh1,r.dml,r.K8c,r.m4W,r.KHL,r.dRQ,c.Jm,c.av,r.Z4N,r.Gcc,r.fv_,r.jND],pipes:[u.Ov],styles:[".dg-content[_ngcontent-%COMP%]{width:100%;height:calc(100vh - 2rem);overflow-y:auto}"]}),o})();function M(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"cds-grid-row"),t.TgZ(1,"cds-grid-cell",8),t.TgZ(2,"cds-action-expand",9),t.NdJ("click",function(s){const d=t.CHM(e).$implicit;return t.oxw().showDetail(s,d)}),t.qZA(),t.qZA(),t.TgZ(3,"cds-grid-cell"),t._uU(4),t.qZA(),t.TgZ(5,"cds-grid-cell"),t._uU(6),t.qZA(),t.TgZ(7,"cds-grid-cell"),t._uU(8),t.qZA(),t.TgZ(9,"cds-grid-cell"),t._uU(10),t.qZA(),t.qZA()}if(2&o){const e=i.$implicit,n=t.oxw();t.xp6(2),t.uIk("aria-label",n.getDetails(e.id))("expanded",(null==n.currentVM?null:n.currentVM.id)===e.id),t.xp6(2),t.Oqu(e.id),t.xp6(2),t.Oqu(e.status),t.xp6(2),t.hij("",e.cpu,"%"),t.xp6(2),t.hij("",e.memory,"%")}}function I(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"cds-grid-detail",10),t.NdJ("closeChange",function(){return t.CHM(e),t.oxw().currentVM=null}),t.TgZ(1,"section",11),t.TgZ(2,"h2",12),t._uU(3),t.qZA(),t.TgZ(4,"p",13),t._uU(5),t.qZA(),t.TgZ(6,"p",13),t._uU(7),t.qZA(),t.TgZ(8,"p",13),t._uU(9),t.qZA(),t.qZA(),t.qZA()}if(2&o){const e=t.oxw();t.Q6J("anchor",e.anchor),t.xp6(3),t.Oqu(null==e.currentVM?null:e.currentVM.id),t.xp6(2),t.hij("Status: ",null==e.currentVM?null:e.currentVM.status,""),t.xp6(2),t.hij("CPU: ",null==e.currentVM?null:e.currentVM.cpu,"%"),t.xp6(2),t.hij("Memory: ",null==e.currentVM?null:e.currentVM.memory,"%")}}function S(o,i){if(1&o&&(t.TgZ(0,"clr-dg-row",14),t.TgZ(1,"clr-dg-cell"),t._uU(2),t.qZA(),t.TgZ(3,"clr-dg-cell"),t._uU(4),t.qZA(),t.TgZ(5,"clr-dg-cell"),t._uU(6),t.qZA(),t.TgZ(7,"clr-dg-cell"),t._uU(8),t.qZA(),t.qZA()),2&o){const e=i.$implicit;t.Q6J("clrDgItem",e),t.xp6(2),t.Oqu(e.id),t.xp6(2),t.Oqu(e.status),t.xp6(2),t.Oqu(e.memory),t.xp6(2),t.Oqu(e.about)}}function N(o,i){if(1&o&&(t.TgZ(0,"clr-dg-detail"),t.TgZ(1,"clr-dg-detail-header"),t._uU(2),t.qZA(),t.TgZ(3,"clr-dg-detail-body"),t.TgZ(4,"section",11),t.TgZ(5,"p",13),t._uU(6),t.qZA(),t.TgZ(7,"p",13),t._uU(8),t.qZA(),t.TgZ(9,"p",13),t._uU(10),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&o){const e=i.$implicit;t.xp6(2),t.Oqu(e.id),t.xp6(4),t.hij("Status: ",e.status,""),t.xp6(2),t.hij("CPU: ",e.cpu,"%"),t.xp6(2),t.hij("Memory: ",e.memory,"%")}}let J=(()=>{class o{constructor(e){this.vmData=e,this.anchor=null,this.data=e.asyncGet(500)}getDetails(e){return`view host ${e} details`}showDetail(e,n){var s;(null===(s=this.currentVM)||void 0===s?void 0:s.id)!==n.id?(this.currentVM=n,this.anchor=e.target):this.currentVM=null}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(m))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-detail"]],decls:45,vars:7,consts:[["cds-layout","vertical gap:md"],["aria-label","row detail datagrid demo",2,"--body-height","360px"],["width","36px","type","action","aria-label","row detail column"],[4,"ngFor","ngForOf"],[3,"anchor","closeChange",4,"ngIf"],[2,"width","100%"],[3,"clrDgItem",4,"ngFor","ngForOf"],[4,"clrIfDetail"],["type","action"],["action","detail",3,"click"],[3,"anchor","closeChange"],["cds-layout","vertical align:center gap:lg"],["cds-text","section","cds-layout","align:left"],["cds-text","body"],[3,"clrDgItem"]],template:function(e,n){1&e&&(t.TgZ(0,"h2"),t._uU(1,"@cds/core Grid with detail"),t.qZA(),t.TgZ(2,"section",0),t.TgZ(3,"p"),t._uU(4,"Notes on a Clarity core grid"),t.qZA(),t.TgZ(5,"ul"),t.TgZ(6,"li"),t._uU(7," bind to [attr.propertyName] for the dynamic values on web component attributes/properties. E.g - cds-action-expand button that toggles the details needs aria-label and expanded to be controlled via Angular "),t.qZA(),t.TgZ(8,"li"),t._uU(9,"Use a method like showDetail to control the grid detail [anchor] and the currentVM"),t.qZA(),t.TgZ(10,"li"),t._uU(11,"By setting currentVM to null when nothing is selected hide/show of details is a simple *ngIf"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(12,"cds-grid",1),t._UZ(13,"cds-grid-column",2),t.TgZ(14,"cds-grid-column"),t._uU(15,"Host"),t.qZA(),t.TgZ(16,"cds-grid-column"),t._uU(17,"Status"),t.qZA(),t.TgZ(18,"cds-grid-column"),t._uU(19,"CPU"),t.qZA(),t.TgZ(20,"cds-grid-column"),t._uU(21,"Memory"),t.qZA(),t.YNc(22,M,11,6,"cds-grid-row",3),t.ALo(23,"async"),t._UZ(24,"cds-grid-footer"),t.YNc(25,I,10,5,"cds-grid-detail",4),t.qZA(),t.TgZ(26,"h2"),t._uU(27,"@clr/angular Datagrid with detail"),t.qZA(),t.TgZ(28,"section",0),t.TgZ(29,"p"),t._uU(30,"Notes on a Clarity Angular Datagrid"),t.qZA(),t.qZA(),t.TgZ(31,"clr-datagrid",5),t.TgZ(32,"clr-dg-column"),t._uU(33,"ID"),t.qZA(),t.TgZ(34,"clr-dg-column"),t._uU(35,"Status"),t.qZA(),t.TgZ(36,"clr-dg-column"),t._uU(37,"Memory"),t.qZA(),t.TgZ(38,"clr-dg-column"),t._uU(39,"About"),t.qZA(),t.YNc(40,S,9,5,"clr-dg-row",6),t.ALo(41,"async"),t.YNc(42,N,11,4,"clr-dg-detail",7),t.TgZ(43,"clr-dg-footer"),t._uU(44,"Datagrid footer"),t.qZA(),t.qZA()),2&e&&(t.xp6(22),t.Q6J("ngForOf",t.lcZ(23,3,n.data)),t.xp6(3),t.Q6J("ngIf",n.currentVM),t.xp6(15),t.Q6J("ngForOf",t.lcZ(41,5,n.data)))},directives:[c.MY,c.jR,u.sg,c.Q2,u.O5,r.C9t,r.PDs,r.Nh1,r.dml,r.K8c,r.m4W,r.KHL,r.i6Q,r.dRQ,c.Jm,c.av,c.Kc,c.r$,r.Z4N,r.Gcc,r.fv_,r.jND,r.c2j,r.ygj,r.d2B],pipes:[u.Ov],styles:[""]}),o})();function Q(o,i){if(1&o&&(t.TgZ(0,"cds-grid-row"),t.TgZ(1,"cds-grid-cell"),t._uU(2),t.qZA(),t.TgZ(3,"cds-grid-cell"),t._uU(4),t.qZA(),t.TgZ(5,"cds-grid-cell"),t._uU(6),t.qZA(),t.TgZ(7,"cds-grid-cell"),t._uU(8),t.qZA(),t.qZA()),2&o){const e=i.$implicit;t.xp6(2),t.Oqu(e.id),t.xp6(2),t.Oqu(e.status),t.xp6(2),t.hij("",e.cpu,"%"),t.xp6(2),t.hij("",e.memory,"%")}}function j(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"input",10),t.NdJ("input",function(s){return t.CHM(e),t.oxw(2).filterByID(s)}),t.qZA()}if(2&o){const e=t.oxw(2);t.Q6J("value",e.search),t.uIk("anchor",e.anchor)}}function P(o,i){if(1&o){const e=t.EpF();t.ynx(0),t.TgZ(1,"cds-dropdown",8),t.NdJ("closeChange",function(){t.CHM(e);const s=t.oxw();return s.anchor=null,s.hiddenFilter=!s.hiddenFilter}),t.TgZ(2,"cds-input"),t.YNc(3,j,1,2,"input",9),t.qZA(),t.qZA(),t.BQk()}if(2&o){const e=t.oxw();t.xp6(1),t.Q6J("hidden",e.hiddenFilter)("anchor",e.anchor),t.xp6(2),t.Q6J("ngIf",e.anchor)}}function V(o,i){if(1&o&&(t.TgZ(0,"clr-dg-row",11),t.TgZ(1,"clr-dg-cell"),t._uU(2),t.qZA(),t.TgZ(3,"clr-dg-cell"),t._uU(4),t.qZA(),t.TgZ(5,"clr-dg-cell"),t._uU(6),t.qZA(),t.TgZ(7,"clr-dg-cell"),t._uU(8),t.qZA(),t.qZA()),2&o){const e=i.$implicit;t.Q6J("clrDgItem",e),t.xp6(2),t.Oqu(e.id),t.xp6(2),t.Oqu(e.status),t.xp6(2),t.Oqu(e.memory),t.xp6(2),t.Oqu(e.about)}}let Y=(()=>{class o{constructor(e){this.vmData=e,this.anchor=null,this.search="",this.hiddenFilter=!0,this.filteredList=[],this.data=e.get()}ngOnInit(){this.filteredList=q([...this.data],"id",this.search)}toggleFilter(e){this.anchor=e.target,this.hiddenFilter=!this.hiddenFilter}filterByID(e){const n=e.target;this.search=n.value?n.value:"",this.filteredList=q([...this.data],"id",this.search)}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(m))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-filtering"]],decls:55,vars:5,consts:[["cds-layout","vertical gap:md"],["aria-label","column filter datagrid demo",2,"--body-height","360px"],["shape","filter","aria-label","search hosts",3,"status","click"],[4,"ngFor","ngForOf"],[4,"ngIf"],[2,"height","360px"],[3,"clrDgField"],[3,"clrDgItem",4,"clrDgItems","clrDgItemsOf"],[3,"hidden","anchor","closeChange"],["type","text","aria-label","search hosts","placeholder","Search","value","",3,"value","input",4,"ngIf"],["type","text","aria-label","search hosts","placeholder","Search","value","",3,"value","input"],[3,"clrDgItem"]],template:function(e,n){1&e&&(t.TgZ(0,"h2"),t._uU(1,"@cds/core Grid with column filter"),t.qZA(),t.TgZ(2,"section",0),t.TgZ(3,"p"),t._uU(4,"Notes on a Clarity core grid filtering"),t.qZA(),t.TgZ(5,"ul"),t.TgZ(6,"li"),t._uU(7,"Must keep track of the search string per column"),t.qZA(),t.TgZ(8,"li"),t._uU(9,"Implement a toggleFilter fn that sets the anchor (for positioning) and hides/shows the filter UI."),t.qZA(),t.TgZ(10,"li"),t._uU(11,"Need to handle the first filtered list with an empty string (unless it is preset)"),t.qZA(),t.TgZ(12,"li"),t._uU(13,"control the hidden attribute of the dropdown"),t.qZA(),t.TgZ(14,"li"),t._uU(15,"set and update the dropdowns anchor"),t.qZA(),t.TgZ(16,"li"),t._uU(17,"listen to the dropdowns close change event to nullify the current anchor and flip the hiddenFilter boolean"),t.qZA(),t.TgZ(18,"li"),t._uU(19,"Note: demo uses presence of this.anchor to control rendering of the cds-dropdown element or not."),t.qZA(),t.qZA(),t.qZA(),t.TgZ(20,"cds-grid",1),t.TgZ(21,"cds-grid-column"),t._uU(22," ID "),t.TgZ(23,"cds-action",2),t.NdJ("click",function(l){return n.toggleFilter(l)}),t.qZA(),t.qZA(),t.TgZ(24,"cds-grid-column"),t._uU(25,"Status"),t.qZA(),t.TgZ(26,"cds-grid-column"),t._uU(27,"CPU"),t.qZA(),t.TgZ(28,"cds-grid-column"),t._uU(29,"Memory"),t.qZA(),t.YNc(30,Q,9,4,"cds-grid-row",3),t._UZ(31,"cds-grid-footer"),t.qZA(),t.YNc(32,P,4,3,"ng-container",4),t.TgZ(33,"h2"),t._uU(34,"@clr/angular Datagrid with built in column string filter"),t.qZA(),t.TgZ(35,"section",0),t.TgZ(36,"p"),t._uU(37,"Notes on a Clarity core grid filtering"),t.qZA(),t.TgZ(38,"ul"),t.TgZ(39,"li"),t._uU(40,"With the Angular datagrid, when a model property is bound to a column sorting and filtering is turned on"),t.qZA(),t.TgZ(41,"li"),t._uU(42,"Filtering happens when user clicks the arrow up/down icon"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(43,"clr-datagrid",5),t.TgZ(44,"clr-dg-column",6),t._uU(45,"ID"),t.qZA(),t.TgZ(46,"clr-dg-column"),t._uU(47,"Status"),t.qZA(),t.TgZ(48,"clr-dg-column"),t._uU(49,"Memory"),t.qZA(),t.TgZ(50,"clr-dg-column"),t._uU(51,"About"),t.qZA(),t.YNc(52,V,9,5,"clr-dg-row",7),t.TgZ(53,"clr-dg-footer"),t._uU(54,"Datagrid footer"),t.qZA(),t.qZA()),2&e&&(t.xp6(23),t.Q6J("status",n.search?"active":""),t.xp6(7),t.Q6J("ngForOf",n.filteredList),t.xp6(2),t.Q6J("ngIf",n.anchor),t.xp6(12),t.Q6J("clrDgField","id"),t.xp6(8),t.Q6J("clrDgItemsOf",n.data))},directives:[c.MY,c.jR,c.pj,u.sg,c.Q2,u.O5,r.C9t,r.PDs,r.Nh1,r.dml,r.K8c,r.m4W,r.KHL,r.f6,r.dRQ,c.Jm,c.av,c.tZ,c.VU,r.Z4N,r.Gcc,r.fv_,r.jND],styles:[""]}),o})(),k=(()=>{class o{constructor(){}ngOnInit(){}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-hide-show-column"]],decls:2,vars:0,template:function(e,n){1&e&&(t.TgZ(0,"p"),t._uU(1,"hide-show-column works!"),t.qZA())},styles:[""]}),o})(),B=(()=>{class o{constructor(){}ngOnInit(){}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-multi-action"]],decls:2,vars:0,template:function(e,n){1&e&&(t.TgZ(0,"p"),t._uU(1,"multi-action works!"),t.qZA())},styles:[""]}),o})(),G=(()=>{class o{constructor(){}ngOnInit(){}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-multi-select"]],decls:2,vars:0,template:function(e,n){1&e&&(t.TgZ(0,"p"),t._uU(1,"multi-select works!"),t.qZA())},styles:[""]}),o})(),H=(()=>{class o{constructor(){}ngOnInit(){}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-pagination"]],decls:2,vars:0,template:function(e,n){1&e&&(t.TgZ(0,"p"),t._uU(1,"pagination works!"),t.qZA())},styles:[""]}),o})(),X=(()=>{class o{constructor(){}ngOnInit(){}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-pin-columns"]],decls:2,vars:0,template:function(e,n){1&e&&(t.TgZ(0,"p"),t._uU(1,"pin-columns works!"),t.qZA())},styles:[""]}),o})(),$=(()=>{class o{constructor(){}ngOnInit(){}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-single-action"]],decls:2,vars:0,template:function(e,n){1&e&&(t.TgZ(0,"p"),t._uU(1,"single-action works!"),t.qZA())},styles:[""]}),o})(),R=(()=>{class o{constructor(){}ngOnInit(){}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-single-select"]],decls:2,vars:0,template:function(e,n){1&e&&(t.TgZ(0,"p"),t._uU(1,"single-select works!"),t.qZA())},styles:[""]}),o})();function K(o,i){if(1&o&&(t.TgZ(0,"cds-grid-row"),t.TgZ(1,"cds-grid-cell"),t._uU(2),t.qZA(),t.TgZ(3,"cds-grid-cell"),t._uU(4),t.qZA(),t.TgZ(5,"cds-grid-cell"),t._uU(6),t.qZA(),t.TgZ(7,"cds-grid-cell"),t._uU(8),t.qZA(),t.qZA()),2&o){const e=i.$implicit;t.xp6(2),t.Oqu(e.id),t.xp6(2),t.Oqu(e.status),t.xp6(2),t.hij("",e.cpu,"%"),t.xp6(2),t.hij("",e.memory,"%")}}function E(o,i){if(1&o&&(t.TgZ(0,"clr-dg-row",7),t.TgZ(1,"clr-dg-cell"),t._uU(2),t.qZA(),t.TgZ(3,"clr-dg-cell"),t._uU(4),t.qZA(),t.TgZ(5,"clr-dg-cell"),t._uU(6),t.qZA(),t.TgZ(7,"clr-dg-cell"),t._uU(8),t.qZA(),t.qZA()),2&o){const e=i.$implicit;t.Q6J("clrDgItem",e),t.xp6(2),t.Oqu(e.id),t.xp6(2),t.Oqu(e.status),t.xp6(2),t.Oqu(e.memory),t.xp6(2),t.Oqu(e.about)}}const W=[{path:"",component:(()=>{class o{constructor(){}ngOnInit(){}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-datagrid"]],decls:6,vars:0,consts:[["cds-layout","p-l:md"],["orientation","horizontal"],["cds-layout","vertical gap:md",1,"dg-content"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"h1"),t._uU(2,"Datagrid"),t.qZA(),t._UZ(3,"cds-divider",1),t.TgZ(4,"section",2),t._UZ(5,"router-outlet"),t.qZA(),t.qZA())},directives:[c.on,p.lC],styles:[""]}),o})(),children:[{path:"",component:U},{path:"basic",component:U},{path:"detail",component:J},{path:"filtering",component:Y},{path:"hide-show-column",component:k},{path:"multi-action",component:B},{path:"multi-select",component:G},{path:"pagination",component:H},{path:"pin-columns",component:X},{path:"single-action",component:$},{path:"single-select",component:R},{path:"sorting",component:(()=>{class o{constructor(e){this.vmData=e,this.sortedData=[],this.sortType="none",this.data=e.get()}ngOnInit(){this.sortedData=A([...this.data],"id",this.sortType)}sortGrid(e){this.sortType=e.detail,console.log(e),this.sortedData=A([...this.data],"id",this.sortType)}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(m))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-sorting"]],decls:41,vars:4,consts:[["cds-layout","vertical gap:md"],["aria-label","row sort datagrid demo",2,"--body-height","360px"],["aria-label","sort hosts",3,"sortChange"],[4,"ngFor","ngForOf"],[2,"height","360px"],[3,"clrDgField"],[3,"clrDgItem",4,"clrDgItems","clrDgItemsOf"],[3,"clrDgItem"]],template:function(e,n){1&e&&(t.TgZ(0,"h2"),t._uU(1,"@cds/core Grid with column sorting"),t.qZA(),t.TgZ(2,"section",0),t.TgZ(3,"p"),t._uU(4,"Notes on a Clarity core grid filtering"),t.qZA(),t.TgZ(5,"ul"),t._UZ(6,"li"),t.qZA(),t.qZA(),t.TgZ(7,"cds-grid",1),t.TgZ(8,"cds-grid-column"),t._uU(9," Host "),t.TgZ(10,"cds-action-sort",2),t.NdJ("sortChange",function(l){return n.sortGrid(l)}),t.qZA(),t.qZA(),t.TgZ(11,"cds-grid-column"),t._uU(12,"Status"),t.qZA(),t.TgZ(13,"cds-grid-column"),t._uU(14,"CPU"),t.qZA(),t.TgZ(15,"cds-grid-column"),t._uU(16,"Memory"),t.qZA(),t.YNc(17,K,9,4,"cds-grid-row",3),t._UZ(18,"cds-grid-footer"),t.qZA(),t.TgZ(19,"h2"),t._uU(20,"@clr/angular Datagrid with built in column string filter"),t.qZA(),t.TgZ(21,"section",0),t.TgZ(22,"p"),t._uU(23,"Notes on a Clarity core grid filtering"),t.qZA(),t.TgZ(24,"ul"),t.TgZ(25,"li"),t._uU(26,"With the Angular datagrid, when a model property is bound to a column sorting and filtering is turned on"),t.qZA(),t.TgZ(27,"li"),t._uU(28,"Sorting happens when user clicks the column text"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(29,"clr-datagrid",4),t.TgZ(30,"clr-dg-column",5),t._uU(31,"ID"),t.qZA(),t.TgZ(32,"clr-dg-column"),t._uU(33,"Status"),t.qZA(),t.TgZ(34,"clr-dg-column"),t._uU(35,"Memory"),t.qZA(),t.TgZ(36,"clr-dg-column"),t._uU(37,"About"),t.qZA(),t.YNc(38,E,9,5,"clr-dg-row",6),t.TgZ(39,"clr-dg-footer"),t._uU(40,"Datagrid footer"),t.qZA(),t.qZA()),2&e&&(t.xp6(10),t.uIk("sort",n.sortType),t.xp6(7),t.Q6J("ngForOf",n.sortedData),t.xp6(13),t.Q6J("clrDgField","id"),t.xp6(8),t.Q6J("clrDgItemsOf",n.data))},directives:[c.MY,c.jR,c.V0,u.sg,c.Q2,r.C9t,r.PDs,r.Nh1,r.dml,r.K8c,r.m4W,r.KHL,r.f6,r.dRQ,c.Jm,c.av,r.Z4N,r.Gcc,r.fv_,r.jND],styles:[""]}),o})()}]}];let z=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[p.Bz.forChild(W)],p.Bz]}),o})(),tt=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({providers:[m],imports:[[u.ez,z,r.K6A,c.rn]]}),o})()}}]);