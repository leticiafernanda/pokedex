import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HeaderComponent } from "./header/header.component";
import { ListComponent } from "./list/list.component";
import { SearchComponent } from "./search/search.component";

@NgModule({
    declarations: [
      HeaderComponent,
      SearchComponent,
      ListComponent
    ],
    exports: [
      HeaderComponent,
      SearchComponent,
      ListComponent
    ],
    imports: [
      CommonModule,
      RouterModule
    ]
  })
  export class CoreModule { }