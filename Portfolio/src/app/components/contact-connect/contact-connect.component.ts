import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-connect',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact-connect.component.html',
  styleUrl: './contact-connect.component.css'
})
export class ContactConnectComponent {
  email = 'your.email@example.com';
  githubUrl = 'https://github.com/yourusername';
  linkedinUrl = 'https://linkedin.com/in/yourprofile';
  
  onEmailClick() {
    window.location.href = `mailto:${this.email}`;
  }
  
  onGitHubClick() {
    window.open(this.githubUrl, '_blank');
  }
  
  onLinkedInClick() {
    window.open(this.linkedinUrl, '_blank');
  }
  
  onCollaborateClick() {
    window.location.href = `mailto:${this.email}?subject=Collaboration on AI or Data Projects`;
  }
}

