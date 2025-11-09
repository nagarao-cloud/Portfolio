import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  type: 'career' | 'certification' | 'award';
}

@Component({
  selector: 'app-professional-timeline',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './professional-timeline.component.html',
  styleUrl: './professional-timeline.component.css'
})
export class ProfessionalTimelineComponent {
  timelineEvents: TimelineEvent[] = [
    {
      year: '2024',
      title: 'Senior Fullstack & Data Engineering Leader',
      description: 'Leading enterprise digital transformation initiatives',
      type: 'career'
    },
    {
      year: '2023',
      title: 'Azure Solutions Architect Expert',
      description: 'Microsoft Certified: Azure Solutions Architect Expert',
      type: 'certification'
    },
    {
      year: '2022',
      title: 'Databricks Certified Data Engineer',
      description: 'Professional certification in data engineering',
      type: 'certification'
    },
    {
      year: '2021',
      title: 'AWS Certified Solutions Architect',
      description: 'Amazon Web Services Solutions Architect - Professional',
      type: 'certification'
    },
    {
      year: '2020',
      title: 'Innovation Award - AI Automation Platform',
      description: 'Recognized for developing AI-powered automation solutions',
      type: 'award'
    },
    {
      year: '2018',
      title: 'Data Platform Migration Lead',
      description: 'Led successful migration of enterprise data platform to cloud',
      type: 'career'
    }
  ];
  
  getEventIcon(type: string): string {
    switch(type) {
      case 'career': return '💼';
      case 'certification': return '🏆';
      case 'award': return '⭐';
      default: return '📅';
    }
  }
  
  getEventColor(type: string): string {
    switch(type) {
      case 'career': return '#667eea';
      case 'certification': return '#10b981';
      case 'award': return '#f59e0b';
      default: return '#6b7280';
    }
  }
}

