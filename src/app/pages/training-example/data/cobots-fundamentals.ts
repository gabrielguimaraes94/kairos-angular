import { TrainingModule } from '../models/training-models';

export const COBOTS_FUNDAMENTALS: TrainingModule = {
  id: 'cobots-fundamentals',
  slug: 'cobots/fundamentals',

  tag: 'Cobots',
  title: 'Cobots – Fundamentals',
  subtitle: 'Learn what collaborative robots are, how they differ from industrial robots, and where they make sense on the shopfloor.',

  breadcrumbs: [
    { label: 'Academy', link: '/academy' },
    { label: 'Training Examples', link: '/training-example' },
    { label: 'Cobots' },
  ],

  meta: {
    level: 'Basic',
    duration: '30 minutes',
    format: 'Concepts + micro-quiz',
  },

  steps: [
    { id: 'context', name: '01 — Context', desc: 'Why cobots exist', status: 'done' },
    { id: 'fundamentals', name: '02 — Fundamentals', desc: 'Key differences and safety', status: 'current' },
    { id: 'check', name: '03 — Knowledge Check', desc: 'Validate understanding', status: 'locked' },
    { id: 'shopfloor', name: '04 — Practical Fit', desc: 'Where cobots fit in operations', status: 'locked' },
  ],

  completionCriteria: [
    'Understand what a cobot is',
    'Know how safety is decided (risk assessment)',
    'Complete the micro-quiz',
  ],

  blocks: [
    {
      title: 'What is a Cobot?',
      body: 'A cobot (collaborative robot) is designed to operate safely in the same workspace as people, supporting tasks rather than replacing entire stations.',
      highlight: true,
    },
    {
      title: 'Key Differences vs Industrial Robots',
      list: [
        'Industrial robots often require guarded cells',
        'Cobots focus on safe interaction with humans',
        'Cobots typically run lower speeds/forces depending on risk assessment',
      ],
    },
    {
      title: 'Best-Fit Applications',
      pills: ['Quality inspection', 'Light assembly', 'Testing', 'Pick & place (organized)'],
      body: 'Cobots are strongest when the task is repetitive, lightweight, and benefits from working side-by-side with an operator.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      text: 'Which sentence best fits the definition of a Cobot?',
      correctOptionId: 'c',
      explanation: 'Cobots are designed for safe collaboration in shared workspaces with humans.',
      options: [
        { id: 'a', text: 'A robot supervising tasks performed by humans' },
        { id: 'b', text: 'A robot that cooperates with other robots' },
        { id: 'c', text: 'A robot that can work in the same shared workspace together with a human' },
        { id: 'd', text: 'A robot that meets high ecology/energy-efficiency requirements' },
      ],
    },
    {
      id: 'q2',
      text: 'What is the main difference between a Cobot and an industrial robot?',
      correctOptionId: 'b',
      explanation: 'Industrial robots typically work in isolated cells; cobots are designed to cooperate safely with humans.',
      options: [
        { id: 'a', text: 'Cobots work autonomously and robots need human supervision' },
        { id: 'b', text: 'Industrial robots usually work in isolated cells, while cobots are designed to cooperate directly with humans' },
        { id: 'c', text: 'An industrial robot is always bigger than a cobot' },
        { id: 'd', text: 'An industrial robot is always faster than a cobot' },
      ],
    },
    {
      id: 'q3',
      text: 'Does a cobot always need to work inside a fenced area or with safety barriers?',
      correctOptionId: 'b',
      explanation: 'Barrier requirements depend on risk assessment, tooling, and the task.',
      options: [
        { id: 'a', text: 'Definitely yes' },
        { id: 'b', text: 'No, if a risk assessment does not require it' },
        { id: 'c', text: 'No, if it is not using sharp tools' },
        { id: 'd', text: 'No, if it is working at a safe speed' },
      ],
    },
    {
      id: 'q4',
      text: 'Choose a proper task for cobot application.',
      correctOptionId: 'd',
      explanation: 'Quality inspection is a common and practical cobot use case.',
      options: [
        { id: 'a', text: 'Continuous high-speed packing with maximum throughput' },
        { id: 'b', text: 'Painting' },
        { id: 'c', text: 'Heavy part handling' },
        { id: 'd', text: 'Quality inspection' },
      ],
    },
    {
      id: 'q5',
      text: 'What is a typical maximum payload range for many industrial cobots?',
      correctOptionId: 'b',
      explanation: 'Most cobots commonly operate in the 3–30 kg payload category.',
      options: [
        { id: 'a', text: 'Up to 3 kg' },
        { id: 'b', text: '3–30 kg' },
        { id: 'c', text: '30–100 kg' },
        { id: 'd', text: 'More than 100 kg' },
      ],
    },
    {
      id: 'q6',
      text: 'What kind of robot type is most likely to expand and replace many fixed cobot use cases in the future?',
      correctOptionId: 'b',
      explanation: 'Mobile manipulators combine mobility with an arm, increasing flexibility across stations.',
      options: [
        { id: 'a', text: 'Autonomous mobile robots (AMRs)' },
        { id: 'b', text: 'Mobile manipulators (a robotic arm mounted on a mobile base)' },
        { id: 'c', text: 'Hybrid robots' },
        { id: 'd', text: 'Humanoids' },
      ],
    },
  ],

  shopfloorTask: {
    title: 'Cobot Opportunity',
    description: 'Identify one quality check or light assembly step that could be supported by a cobot. Define the safety concerns and what the risk assessment would evaluate.',
    tiles: [
      { title: 'Task', desc: 'Select a stable, repetitive task' },
      { title: 'Safety', desc: 'Tooling + speed/force limits' },
      { title: 'Value', desc: 'Cycle time, ergonomics, quality' },
      { title: 'Feasibility', desc: 'Space, payload, variability' },
    ],
  },
};