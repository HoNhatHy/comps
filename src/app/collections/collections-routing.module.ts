import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColletionsModComponent } from './colletions-mod/colletions-mod.component';

const routes: Routes = [{ path: '', component: ColletionsModComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CollectionsRoutingModule {}
