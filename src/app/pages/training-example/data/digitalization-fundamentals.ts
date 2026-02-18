import { TrainingModule } from '../models/training-models';

export const DIGITALIZATION_FUNDAMENTALS: TrainingModule = {
  id: 'digitalization-fundamentals',
  slug: 'digitalization/fundamentals',

  tag: 'Digitalization',
  title: 'Digitalization – Fundamentals', 
  subtitle: 'Understand how digitalization transforms processes, data, and daily work on the shopfloor.',
  breadcrumbs: [
    { label: 'Academy', link: '/academy' },
    { label: 'Learning Paths', link: '/learning-paths' },
    { label: 'Digitalization' }
  ],
  meta: {
    level: 'Basic',
    duration: '30 minutes',
    format: 'Concepts + micro-quiz'
  },
  steps: [
    { id: 'context', name: '01 — Context', desc: 'Why digitalization matters', status: 'done' },
    { id: 'fundamentals', name: '02 — Fundamentals', desc: 'Core concepts and definitions', status: 'current' },
    { id: 'quiz', name: '03 — Knowledge Check', desc: 'Validate understanding', status: 'locked' },
    { id: 'shopfloor', name: '04 — Shopfloor Mindset', desc: 'How this applies daily', status: 'locked' }
  ],
  completionCriteria: [
    'Read the fundamentals section',
    'Complete the micro-quiz',
    'Understand the role of data and people'
  ],
  blocks: [
    {
      title: 'Industrial Context',
      body:
        'Digitalization is not about tools or IT alone. It is about improving how data and processes support people, decisions, and production flow.'
    },
    {
      title: 'Key Concepts',
      pills: [
        'Data',
        'Processes',
        'Automation',
        'Transparency',
        'Decision Support',
        'People'
      ],
      body:
        'Digitalization connects data, systems, and people to create visibility, reduce errors, and support better decisions.'
    },
    {
      title: 'What Digitalization Is NOT',
      highlight: true,
      list: [
        'Replacing people with machines',
        'Employee monitoring or punishment',
        'Adding unnecessary reporting steps',
        'Just scanning documents into PDFs'
      ]
    }
  ],
  quiz: [
    {
      id: 'q1',
      text: 'What is digitalization?',
      options: [
        { id: 'a', text: 'Installing new computers in the company' },
        { id: 'b', text: 'Converting data, processes, and resources from analog to digital form' },
        { id: 'c', text: 'Creating backup copies of documents' },
        { id: 'd', text: 'Moving documents to a paper archive' }
      ],
      correctOptionId: 'b',
      explanation:
        'Digitalization focuses on transforming data and processes to improve how work is performed and decisions are made.'
    },
    {
      id: 'q2',
      text: 'What does digitalization mean in practice?',
      options: [
        { id: 'a', text: 'Working only on a computer' },
        { id: 'b', text: 'Using IT technologies to manage data and processes' },
        { id: 'c', text: 'Limiting information flow between departments' },
        { id: 'd', text: 'Placing all forms in a single network folder' }
      ],
      correctOptionId: 'b',
      explanation:
        'Digitalization uses technology to manage, analyze, and improve processes across the organization.'
    },
    {
      id: 'q3',
      text: 'Which of the following is NOT related to digitalization?',
      options: [
        { id: 'a', text: 'Automation of production processes' },
        { id: 'b', text: 'Collecting machine data in real time' },
        { id: 'c', text: 'Manually writing paper quality reports' },
        { id: 'd', text: 'Integrating systems across the organization' }
      ],
      correctOptionId: 'c',
      explanation:
        'Manual paper reporting is the opposite of digitalization and does not support data-driven processes.'
    },
    {
      id: 'q4',
      text: 'The main reason for implementing digitalization is:',
      options: [
        { id: 'a', text: 'Adding more reporting stages' },
        { id: 'b', text: 'Improving efficiency and reducing errors through data and automation' },
        { id: 'c', text: 'Increasing production preparation time' },
        { id: 'd', text: 'Separating quality data from production data' }
      ],
      correctOptionId: 'b',
      explanation:
        'Digitalization exists to improve efficiency, quality, and decision-making by using reliable data.'
    },
    {
      id: 'q5',
      text: 'Which statement is true?',
      options: [
        { id: 'a', text: 'Every digitization leads to digitalization' },
        { id: 'b', text: 'Digitization is a prerequisite for digitalization' },
        { id: 'c', text: 'Digitalization does not require data' },
        { id: 'd', text: 'Digitization always improves work quality' }
      ],
      correctOptionId: 'b',
      explanation:
        'Digitization (converting analog to digital) is a necessary first step before digitalization can occur.'
    },
    {
      id: 'q6',
      text: 'Why is the employee key in the digitalization process?',
      options: [
        { id: 'a', text: 'Employees choose which digital tools to buy' },
        { id: 'b', text: 'The quality of data entered by employees defines system output quality' },
        { id: 'c', text: 'Employees manually analyze all data' },
        { id: 'd', text: 'Systems automatically correct all incorrect data' }
      ],
      correctOptionId: 'b',
      explanation:
        'Digital systems reflect reality based on the data they receive. People are responsible for data quality.'
    }
  ],
  shopfloorTask: {
    title: 'Shopfloor Mindset',
    description:
      'Think about one daily activity where data is entered manually. Identify how incorrect or missing data could affect reports, decisions, or production flow.',
    tiles: [
      { title: 'Process', desc: 'Where data is entered' },
      { title: 'Data', desc: 'What information is recorded' },
      { title: 'Impact', desc: 'Who uses this data later' },
      { title: 'Improvement', desc: 'How data quality could be improved' }
    ]
  }
};
