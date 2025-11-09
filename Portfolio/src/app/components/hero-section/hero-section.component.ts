import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.css'
})
export class HeroSectionComponent {
  headline = 'Senior Fullstack & Data Engineering Leader | 18+ years in .NET, AI, Cloud & Innovation | Future IT Director';
  summary = 'Experienced in driving enterprise-scale digital transformation through cloud-native architectures, AI automation, and data-driven innovation. Passionate about building high-performing teams and leading technology strategy.';
  
  profileImageSrc = 'assets/profile-photo.jpg';
  readonly fallbackImageSrc = 'https://via.placeholder.com/300x300?text=Professional+Photo';
  
  onImageError() {
    this.profileImageSrc = this.fallbackImageSrc;
  }
  
  onViewGitHub() {
    window.open('https://github.com/nagarao-cloud', '_blank');
  }
  
  onConnectLinkedIn() {
    window.open('https://linkedin.com/in/yourprofile', '_blank');
  }
}

