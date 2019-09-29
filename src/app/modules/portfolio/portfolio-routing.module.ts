import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from './portfolio.component';

const routes: Routes = [{
    path: '', children: [{
        path: '', component: PortfolioComponent
    }]
}];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PortfolioRoutingModule { }
export const PortfolioRoutingComponents = [PortfolioComponent];
