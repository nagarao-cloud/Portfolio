import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-leadership-impact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './leadership-impact.component.html',
  styleUrl: './leadership-impact.component.css'
})
export class LeadershipImpactComponent {
  philosophy = 'Empower teams to innovate, automate, and deliver measurable business impact.';
  
  impactStories = [
    {
      title: 'Led 12-member data platform migration to Databricks',
      description: 'Successfully orchestrated migration of enterprise data platform, reducing costs by 40% and improving query performance by 3x.'
    },
    {
      title: 'Reduced ETL latency by 60% using Delta Lake optimization',
      description: 'Implemented Delta Lake architecture that transformed batch processing times and enabled real-time analytics capabilities.'
    }
  ];
  
  processStories = [
    {
      title: 'Scaled Agile delivery using Azure DevOps',
      description: 'Established CI/CD pipelines and Agile practices across multiple teams, reducing deployment time from weeks to hours.'
    },
    {
      title: 'Mentored cross-functional engineers to adopt AI automation',
      description: 'Led training programs and hands-on workshops that enabled 50+ engineers to integrate AI tools into their workflows.'
    }
  ];
}

