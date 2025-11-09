import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  category: string;
  name: string;
  techStack: string[];
  highlights: string;
  githubUrl: string;
  icon: string;
}

@Component({
  selector: 'app-technical-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './technical-portfolio.component.html',
  styleUrl: './technical-portfolio.component.css'
})
export class TechnicalPortfolioComponent {
  projects: Project[] = [
    {
      category: 'AI Agents',
      name: 'Report Generation Agent, Code Review Agent',
      techStack: ['Python', 'LangChain', 'Vertex AI', 'GCP Cloud Run'],
      highlights: 'Automates reporting with LLM logic',
      githubUrl: 'https://github.com/nagarao-cloud',
      icon: '🤖'
    },
    {
      category: 'Data Engineering',
      name: 'Delta Lake ETL Pipeline',
      techStack: ['Databricks', 'Spark', 'Delta Lake'],
      highlights: 'End-to-end batch + streaming data pipeline',
      githubUrl: 'https://github.com/nagarao-cloud',
      icon: '📊'
    },
    {
      category: 'Fullstack Apps',
      name: '.NET + React Dashboard',
      techStack: ['ASP.NET Core', 'React', 'SQL', 'Docker'],
      highlights: 'Live metrics and CI/CD integration',
      githubUrl: 'https://github.com/nagarao-cloud',
      icon: '💻'
    },
    {
      category: 'MLOps / Deployment',
      name: 'ML Model Deployment',
      techStack: ['Azure ML', 'GitHub Actions', 'Docker'],
      highlights: 'Automated deployment via CI/CD',
      githubUrl: 'https://github.com/nagarao-cloud',
      icon: '🚀'
    },
    {
      category: 'Portfolio Source',
      name: 'YourName.dev',
      techStack: ['Next.js', 'GitHub Pages'],
      highlights: 'Your own site hosted for free',
      githubUrl: 'https://github.com/nagarao-cloud',
      icon: '🌐'
    }
  ];

  openGitHub(url: string) {
    window.open(url, '_blank');
  }
}

