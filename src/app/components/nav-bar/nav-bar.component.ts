import { Component, HostListener } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common'; // Required for [class.active]

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  activeSection: string = 'home';

  constructor(private router: Router) {}

  // Automatically updates the active section as you scroll
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const sections = ['home', 'about', 'projects', 'contact'];
    const scrollPosition = window.pageYOffset + 150; // Offset to match navbar height

    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const offset = element.offsetTop;
        const height = element.offsetHeight;

        if (scrollPosition >= offset && scrollPosition < offset + height) {
          this.activeSection = section;
        }
      }
    }
  }

  goToSection(id: string): void {
    this.activeSection = id; // Update active state immediately on click
    
    this.router.navigate(['/']).then(() => {
      setTimeout(() => {
        const element = document.getElementById(id);

        if (element) {
          const navbarOffset = 120; 
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - navbarOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
        
        // Auto-close hamburger menu on mobile after selection
        const navbarCollapse = document.getElementById('navbarNav');
        if (navbarCollapse?.classList.contains('show')) {
          navbarCollapse.classList.remove('show');
        }
      }, 0);
    });
  }
}