import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface BlogPost {
  title: string;
  description: string;
  topics: string[];
  readTime: string;
  link: string;
}

@Component({
  selector: 'app-thought-leadership',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './thought-leadership.component.html',
  styleUrl: './thought-leadership.component.css'
})
export class ThoughtLeadershipComponent {
  blogPosts: BlogPost[] = [
    {
      title: 'How AI Agents are Redefining IT Leadership',
      description: 'Exploring how AI automation is transforming the role of IT leaders, enabling strategic focus while maintaining technical depth.',
      topics: ['AI', 'Leadership', 'Automation'],
      readTime: '8 min read',
      link: '#'
    },
    {
      title: 'Bridging .NET Systems with Modern Data Pipelines',
      description: 'Practical strategies for integrating legacy .NET applications with cloud-native data engineering solutions.',
      topics: ['.NET', 'Data Engineering', 'Cloud'],
      readTime: '6 min read',
      link: '#'
    },
    {
      title: 'Lessons from 18 Years in IT — Moving from Execution to Strategy',
      description: 'Reflections on career growth, transitioning from hands-on development to strategic technology leadership.',
      topics: ['Career', 'Strategy', 'Leadership'],
      readTime: '10 min read',
      link: '#'
    },
    {
      title: 'Low-Cost AI Development Setup using GCP Cloud Run + GitHub Actions',
      description: 'A comprehensive guide to building production-ready AI applications with minimal infrastructure costs.',
      topics: ['AI', 'GCP', 'DevOps', 'Cost Optimization'],
      readTime: '12 min read',
      link: '#'
    }
  ];
}

