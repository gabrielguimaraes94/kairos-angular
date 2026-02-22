import { TrainingModule } from '../models/training-models';

export const GPS_FUNDAMENTALS: TrainingModule = {
  id: 'gps-fundamentals',
  slug: 'gps/fundamentals',

  tag: 'GPS',
  title: 'GPS – Gestamp Production System',
  subtitle: 'Understand how GPS drives Operational Excellence through standardized processes and people development.',

  breadcrumbs: [
    { label: 'Academy', link: '/academy' },
    { label: 'Training Examples', link: '/training-example' },
    { label: 'GPS' },
  ],

  meta: {
    level: 'Basic',
    duration: '30 minutes',
    format: 'Concepts + micro-quiz',
  },

  steps: [
    { id: 'context', name: '01 — Context', desc: 'Why GPS exists', status: 'done' },
    { id: 'fundamentals', name: '02 — Fundamentals', desc: 'Core principles and pillars', status: 'current' },
    { id: 'check', name: '03 — Knowledge Check', desc: 'Validate understanding', status: 'locked' },
    { id: 'shopfloor', name: '04 — Shopfloor Mindset', desc: 'Daily application', status: 'locked' },
  ],

  completionCriteria: [
    'Understand the purpose of GPS',
    'Know the three pillars',
    'Complete the micro-quiz',
  ],

  blocks: [
    {
      title: 'What is GPS?',
      body: 'GPS is Gestamp’s production system, defining how processes are standardized and how people are developed to achieve Operational Excellence.',
      highlight: true,
    },
    {
      title: 'GPS Pillars',
      pills: ['Processes', 'People', 'Foundations'],
      body: 'These pillars ensure stability, continuous improvement, and sustainable results across all plants.',
    },
    {
      title: 'Continuous Improvement',
      list: [
        'SDCA stabilizes standard work',
        'PDCA drives improvements',
        'People engagement is essential',
      ],
    },
  ],

  quiz: [
    {
      id: 'q1',
      text: 'What is GPS (Gestamp Production System)?',
      correctOptionId: 'b',
      explanation: 'GPS defines sustainable, standardized best practices for processes and people.',
      options: [
        { id: 'a', text: 'A set of financial rules used by Gestamp' },
        { id: 'b', text: 'The definition and deployment of sustainable, standardized best practices in processes and people development' },
        { id: 'c', text: 'An IT system for quality reporting' },
        { id: 'd', text: 'A training program for new employees' },
      ],
    },
    {
      id: 'q2',
      text: 'What is the main objective of GPS?',
      correctOptionId: 'b',
      explanation: 'GPS aims to achieve Operational Excellence to improve competitiveness.',
      options: [
        { id: 'a', text: 'Increasing employee turnover' },
        { id: 'b', text: 'Achieving the vision of Operational Excellence to improve competitiveness' },
        { id: 'c', text: 'Faster implementation of new IT technologies' },
        { id: 'd', text: 'Reducing the number of documents in the organization' },
      ],
    },
    {
      id: 'q3',
      text: 'Which three pillars form the structure of GPS?',
      correctOptionId: 'b',
      explanation: 'GPS is based on processes, people, and foundations.',
      options: [
        { id: 'a', text: 'People, projects, digitalization' },
        { id: 'b', text: 'Processes, people, foundations' },
        { id: 'c', text: 'Quality, cost, delivery' },
        { id: 'd', text: 'Planning, organization, control' },
      ],
    },
    {
      id: 'q4',
      text: 'Which cycles support continuous improvement within GPS?',
      correctOptionId: 'c',
      explanation: 'SDCA stabilizes and PDCA improves.',
      options: [
        { id: 'a', text: 'DMAIC and FMEA' },
        { id: 'b', text: 'SWOT and Kaizen' },
        { id: 'c', text: 'PDCA and SDCA' },
        { id: 'd', text: 'RACI and SMED' },
      ],
    },
    {
      id: 'q5',
      text: 'Which element does NOT contribute to Operational Excellence in GPS?',
      correctOptionId: 'd',
      explanation: 'GPS focuses on internal capability, not external dependency.',
      options: [
        { id: 'a', text: 'Ensuring optimum project launches' },
        { id: 'b', text: 'Improving customer satisfaction' },
        { id: 'c', text: 'Reducing operational costs' },
        { id: 'd', text: 'Hiring external consultants' },
      ],
    },
  ],

  shopfloorTask: {
    title: 'GPS in Daily Work',
    description: 'Identify one standard process in your area and evaluate whether it is stable (SDCA) or needs improvement (PDCA).',
    tiles: [
      { title: 'Process', desc: 'Select a standard process' },
      { title: 'Stability', desc: 'Is it consistently followed?' },
      { title: 'Improvement', desc: 'Where can PDCA be applied?' },
      { title: 'People', desc: 'Who is responsible?' },
    ],
  },
};