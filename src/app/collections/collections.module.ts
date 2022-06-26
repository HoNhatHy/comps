import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectionsRoutingModule } from './collections-routing.module';
import { ColletionsModComponent } from './colletions-mod/colletions-mod.component';

@NgModule({
  declarations: [ColletionsModComponent],
  imports: [CommonModule, CollectionsRoutingModule],
  exports: [],
})
export class CollectionsModule {}
