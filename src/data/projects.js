import { siteLinks } from './siteLinks'

/**
 * Real Portfolio Projects Data
 *
 * All project details, metadata, screenshot paths, and link targets
 * are centrally configured here using siteLinks.
 */
export const projects = [
  {
    id: 'udyamly',
    number: '01',
    title: 'Udyamly',
    category: 'BUSINESS PLATFORM / SAAS',
    description:
      'A digital platform for helping local businesses create a professional online presence and showcase their products, services and business information through a simple digital storefront.',
    technologies: ['ASP.NET Core', 'PostgreSQL', 'JavaScript', 'HTML / CSS'],
    image: '/projects/udyamly.png',
    alt: 'Udyamly business platform interface',
    live: siteLinks.projects.udyamly.live,
    github: siteLinks.projects.udyamly.github,
  },
  {
    id: 'moviesync',
    number: '02',
    title: 'MovieSync',
    category: 'REAL-TIME WATCH PARTY PLATFORM',
    description:
      'A synchronized watch-party platform that allows users to watch videos together while using real-time chat and video communication. Playback synchronization keeps participants connected to the same viewing experience.',
    technologies: ['ASP.NET Core', 'SignalR', 'WebRTC', 'JavaScript'],
    image: '/projects/moviesync.png',
    alt: 'MovieSync real-time watch party platform',
    live: siteLinks.projects.moviesync.live,
    github: siteLinks.projects.moviesync.github,
  },
  {
    id: 'inventory-management-system',
    number: '03',
    title: 'Inventory Management System',
    category: 'INVENTORY & STOCK MANAGEMENT',
    description:
      'A complete inventory management system for managing products, purchases, sales and stock levels while providing a centralized dashboard for monitoring inventory health and business activity.',
    technologies: ['.NET', 'MySQL', 'JavaScript', 'HTML / CSS'],
    image: '/projects/inventory.png',
    alt: 'Inventory management system dashboard',
    live: siteLinks.projects.inventory.live,
    github: siteLinks.projects.inventory.github,
  },
]
