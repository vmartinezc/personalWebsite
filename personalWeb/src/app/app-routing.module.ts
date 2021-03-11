import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutMeComponent} from './pages/about-me/about-me.component';
import { PortfolioComponent} from './pages/portfolio/portfolio.component';
import { ResumeComponent} from './pages/resume/resume.component';



const routes: Routes = [
  {path: 'aboutme', component: AboutMeComponent },
  {path: 'portfolio', component: PortfolioComponent },
  {path: 'resume', component: ResumeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
