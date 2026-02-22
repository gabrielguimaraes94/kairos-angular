import { TrainingModule } from '../models/training-models';

export const HUMANOIDS_FUNDAMENTALS: TrainingModule = {
  id: 'humanoids-fundamentals',
  slug: 'humanoids/fundamentals',

  tag: 'Humanoids',
  title: 'Humanoids – Fundamentals',
  subtitle: 'Understand what humanoid robots are, how they work, and where they can realistically be applied in industry.',

  breadcrumbs: [
    { label: 'Academy', link: '/academy' },
    { label: 'Training Examples', link: '/training-example' },
    { label: 'Humanoids' },
  ],

  meta: {
    level: 'Basic',
    duration: '35 minutes',
    format: 'Concepts + micro-quiz',
  },

  steps: [
    { id: 'context', name: '01 — Context', desc: 'Why humanoids matter', status: 'done' },
    { id: 'fundamentals', name: '02 — Fundamentals', desc: 'Core concepts and limits', status: 'current' },
    { id: 'check', name: '03 — Knowledge Check', desc: 'Validate understanding', status: 'locked' },
    { id: 'shopfloor', name: '04 — Industrial Reality', desc: 'Where humanoids fit today', status: 'locked' },
  ],

  completionCriteria: [
    'Understand what defines a humanoid robot',
    'Know current technical limitations',
    'Complete the micro-quiz',
  ],

  blocks: [
    {
      title: 'What is a Humanoid?',
      body: 'A humanoid robot is defined by its human-like body structure, enabling it to operate in environments designed for people.',
      highlight: true,
    },
    {
      title: 'Key Technologies',
      pills: ['Sensors', 'Vision Systems', 'Learning Algorithms', 'ZMP Control'],
      body: 'These technologies allow humanoids to perceive, balance, and interact safely with their surroundings.',
    },
    {
      title: 'Industrial Reality',
      list: [
        'Still limited payload capacity',
        'High cost and energy consumption',
        'Best suited for logistics and repetitive tasks',
      ],
    },
  ],

  quiz: [
    {
      id: 'q1',
      text: 'What best defines a Humanoid robot?',
      correctOptionId: 'a',
      explanation: 'Humanoids are defined by their human-like body structure.',
      options: [
        { id: 'a', text: 'A robot built with a body structure resembling a human (torso, head, and limbs)' },
        { id: 'b', text: 'A robot designed to look exactly like a real human' },
        { id: 'c', text: 'A robot that can share a workspace with humans' },
        { id: 'd', text: 'A robot capable of logical conversation with humans' },
      ],
    },
    {
      id: 'q2',
      text: 'How does a Humanoid interact with its environment?',
      correctOptionId: 'd',
      explanation: 'Humanoids combine sensors, vision, and learning.',
      options: [
        { id: 'a', text: 'Sensors' },
        { id: 'b', text: 'Vision systems' },
        { id: 'c', text: 'Programming and learning' },
        { id: 'd', text: 'All of the above' },
      ],
    },
    {
      id: 'q3',
      text: 'Which element is most critical for walking stability in humanoids?',
      correctOptionId: 'd',
      explanation: 'ZMP control is essential for balance.',
      options: [
        { id: 'a', text: 'Feet' },
        { id: 'b', text: 'LiDAR unit' },
        { id: 'c', text: 'Fast servo motors' },
        { id: 'd', text: 'Zero Moment Point (ZMP) control' },
      ],
    },
    {
      id: 'q4',
      text: 'Which task is currently NOT feasible for commercial humanoids?',
      correctOptionId: 'd',
      explanation: 'Payload capacity remains a key limitation.',
      options: [
        { id: 'a', text: 'Walking up stairs' },
        { id: 'b', text: 'Avoiding obstacles' },
        { id: 'c', text: 'Automatic battery replacement' },
        { id: 'd', text: 'Transporting a 100 kg load' },
      ],
    },
    {
      id: 'q5',
      text: 'Which tasks are humanoids already used for today?',
      correctOptionId: 'd',
      explanation: 'Most current use cases focus on logistics.',
      options: [
        { id: 'a', text: 'Piloting aircraft' },
        { id: 'b', text: 'Surgery' },
        { id: 'c', text: 'Taxi driving' },
        { id: 'd', text: 'Logistics and warehouse transport' },
      ],
    },
    {
      id: 'q6',
      text: 'Which humanoid is currently tested by BMW on assembly lines?',
      correctOptionId: 'c',
      explanation: 'BMW is testing Figure 02 for assembly operations.',
      options: [
        { id: 'a', text: 'Iron (Xpeng)' },
        { id: 'b', text: 'Digit (Agility Robotics)' },
        { id: 'c', text: 'Figure 02 (Figure AI)' },
        { id: 'd', text: 'Ameca (Engineered Arts)' },
      ],
    },
  ],

  shopfloorTask: {
    title: 'Humanoids in Industry',
    description: 'Identify one task in your area that could realistically be supported by a humanoid in the future.',
    tiles: [
      { title: 'Task', desc: 'Select a repetitive task' },
      { title: 'Feasibility', desc: 'Is payload and safety acceptable?' },
      { title: 'Environment', desc: 'Is the workspace human-oriented?' },
      { title: 'Value', desc: 'Would it add real value?' },
    ],
  },
};