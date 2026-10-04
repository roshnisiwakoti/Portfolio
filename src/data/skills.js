import { Monitor, Server, Database, Activity, Wrench, Compass } from 'lucide-react'

export const skillCategories = [
  {
    id: 'frontend',
    index: '01',
    label: 'Frontend',
    icon: Monitor,
    title: 'Frontend Engineering',
    description:
      'Building responsive, accessible and interactive interfaces with modern frontend technologies and clear component structures.',
    skills: [
      'React',
      'JavaScript',
      'HTML5',
      'CSS3',
      'Tailwind CSS',
      'State Management',
    ],
    relatedProject: {
      label: 'View related projects',
      targetId: 'projects',
    },
    visualHighlight: 'udyamly',
  },
  {
    id: 'backend',
    index: '02',
    label: 'Backend',
    icon: Server,
    title: 'Backend Architecture',
    description:
      'Building application logic, APIs and server-side systems with maintainable structure and clear separation of responsibilities.',
    skills: [
      'ASP.NET Core',
      'C#',
      'Django',
      'Python',
      'REST API',
      'API Design',
    ],
    relatedProject: {
      label: 'View related projects',
      targetId: 'projects',
    },
    visualHighlight: 'backend',
  },
  {
    id: 'databases',
    index: '03',
    label: 'Databases',
    icon: Database,
    title: 'Databases & Modeling',
    description:
      'Working with relational databases, schema design and application data for reliable and maintainable systems.',
    skills: [
      'PostgreSQL',
      'MySQL',
      'Schema Design',
      'Relational Data',
      'Query Optimization',
    ],
    relatedProject: {
      label: 'View related projects',
      targetId: 'projects',
    },
    visualHighlight: 'inventory',
  },
  {
    id: 'real-time',
    index: '04',
    label: 'Real-Time',
    icon: Activity,
    title: 'Real-Time & Protocols',
    description:
      'Building synchronized and interactive experiences using real-time communication technologies.',
    skills: [
      'SignalR',
      'WebRTC',
      'WebSockets',
      'Event-Driven Communication',
      'Peer Connections',
    ],
    relatedProject: {
      label: 'View related projects',
      targetId: 'projects',
    },
    visualHighlight: 'moviesync',
  },
  {
    id: 'tools',
    index: '05',
    label: 'Tools',
    icon: Wrench,
    title: 'Tools & Environment',
    description:
      'Development tools and workflows I use to build, test, version and deploy applications.',
    skills: [
      'Git',
      'GitHub',
      'VS Code',
      'Postman',
      'Render',
      'Linux / CLI',
    ],
    relatedProject: {
      label: 'View related projects',
      targetId: 'projects',
    },
    visualHighlight: 'tools',
  },
  {
    id: 'principles',
    index: '06',
    label: 'Principles',
    icon: Compass,
    title: 'Engineering Approach',
    description:
      'The principles I try to follow when designing and improving software.',
    skills: [
      'Readable',
      'Maintainable',
      'Responsive',
      'Reusable',
      'Problem Solving',
      'Continuous Learning',
    ],
    relatedProject: null,
    visualHighlight: 'principles',
  },
]
