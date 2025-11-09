import { Component } from '@angular/core';
import { HeroSectionComponent } from '../hero-section/hero-section.component';
import { TechnicalPortfolioComponent } from '../technical-portfolio/technical-portfolio.component';
import { LeadershipImpactComponent } from '../leadership-impact/leadership-impact.component';
import { ThoughtLeadershipComponent } from '../thought-leadership/thought-leadership.component';
import { ProfessionalTimelineComponent } from '../professional-timeline/professional-timeline.component';
import { ContactConnectComponent } from '../contact-connect/contact-connect.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [
    HeroSectionComponent,
    TechnicalPortfolioComponent,
    LeadershipImpactComponent,
    ThoughtLeadershipComponent,
    ProfessionalTimelineComponent,
    ContactConnectComponent
  ],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
}

