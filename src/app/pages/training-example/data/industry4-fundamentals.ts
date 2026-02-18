import { TrainingModule } from '../models/training-models';

export const INDUSTRY4_FUNDAMENTALS: TrainingModule = {
  id: 'industry4-fundamentals',
  slug: 'industry4/fundamentals',

  tag: 'Industry 4.0',
  title: 'Industry 4.0 – Fundamentals',
  subtitle: 'Understand IoT, workflows, rules, and real-time data in smart manufacturing.',
  breadcrumbs: [
    { label: 'Academy', link: '/academy' },
    { label: 'Training Examples', link: '/training-example' },
    { label: 'Industry 4.0' },
  ],
  meta: {
    level: 'Basic',
    duration: '25 minutes',
    format: 'Concepts + micro-quiz',
  },
  steps: [
    { id: 'context', name: '01 — Context', desc: 'Why Industry 4.0 matters', status: 'done' },
    { id: 'fundamentals', name: '02 — Fundamentals', desc: 'Core tools and definitions', status: 'current' },
    { id: 'check', name: '03 — Knowledge Check', desc: 'Validate understanding', status: 'locked' },
    { id: 'shopfloor', name: '04 — Shopfloor Task', desc: 'Apply it in daily work', status: 'locked' },
  ],
  completionCriteria: [
    'Complete the micro-quiz',
    'Understand the role of IoT and alerts',
    'Identify one practical use case on the shopfloor',
  ],
  blocks: [
    {
      title: 'Industrial Context',
      body: 'Industry 4.0 connects machines, data, and people to increase visibility, reduce reaction time, and support better decisions.',
    },
    {
      title: 'Key Concepts',
      pills: ['IoT', 'Timeseries', 'Rules', 'Workflows', 'Alerts', 'KPIs'],
      body: 'The focus is visibility and action: collect signals, visualize trends, trigger rules, and coordinate tasks through workflows.',
    },
    {
      title: 'What Industry 4.0 Is NOT',
      highlight: true,
      list: [
        'Replacing people with machines',
        'Creating extra paperwork without value',
        'Limiting information flow between departments',
      ],
    },
  ],
  quiz: [
    {
      id: 'q1',
      text: 'VQM – Virtual Quality Manager is used for:',
      options: [
        { id: 'a', text: 'Tracking production status' },
        { id: 'b', text: 'Production planning' },
        { id: 'c', text: 'KPI visualization' },
        { id: 'd', text: 'Creating, executing, and archiving records required by the quality management system' },
      ],
      correctOptionId: 'd',
      explanation: 'VQM supports quality management by creating, executing, and archiving required quality records.',
    },
    {
      id: 'q2',
      text: 'IoT is mainly used for:',
      options: [
        { id: 'a', text: 'Real-time analysis of process data from machines and visualizing it as indicators/charts' },
        { id: 'b', text: 'Managing technical changes' },
        { id: 'c', text: 'Creating quality reports' },
        { id: 'd', text: 'Conducting audits' },
      ],
      correctOptionId: 'a',
      explanation: 'IoT focuses on collecting machine/process signals and turning them into real-time insights and visualizations.',
    },
    {
      id: 'q3',
      text: 'VWM – Virtual Workflow Manager is used for:',
      options: [
        { id: 'a', text: 'Computer network administration' },
        { id: 'b', text: 'Organizing tasks, reminders, and synchronization within the Industry 4.0 environment' },
        { id: 'c', text: 'Creating cost reports' },
        { id: 'd', text: 'Developing health & safety instructions' },
      ],
      correctOptionId: 'b',
      explanation: 'VWM is about coordinating work: tasks, reminders, and synchronization inside the I4.0 environment.',
    },
    {
      id: 'q4',
      text: 'What is the main use of the “Timeseries” application in IoT Insight?',
      options: [
        { id: 'a', text: 'Plotting the trend of a selected signal within a defined time range' },
        { id: 'b', text: 'Configuring alarm rules based on signal values' },
        { id: 'c', text: 'Managing IoT devices and assigning operating parameters' },
        { id: 'd', text: 'Creating machine performance reports in a tabular form' },
      ],
      correctOptionId: 'a',
      explanation: 'Timeseries is used to visualize the signal trend over a chosen time window.',
    },
    {
      id: 'q5',
      text: 'A “rule” in the Industry 4.0 environment is:',
      options: [
        { id: 'a', text: 'An algorithm that generates alerts and notifications when predefined conditions occur' },
        { id: 'b', text: 'A set of production data used to analyze trends over time' },
        { id: 'c', text: 'A module responsible for managing users and permissions' },
        { id: 'd', text: 'A graphical visualization showing current machine status' },
      ],
      correctOptionId: 'a',
      explanation: 'Rules trigger actions (alerts/notifications) when conditions are met (thresholds, patterns, states).',
    },
    {
      id: 'q6',
      text: 'What is the primary goal of Industry 4.0?',
      options: [
        { id: 'a', text: 'Connecting machines, data, and systems to improve visibility and decision-making' },
        { id: 'b', text: 'Replacing all operators with robots' },
        { id: 'c', text: 'Creating more paperwork and reports' },
        { id: 'd', text: 'Limiting access to production information' },
      ],
      correctOptionId: 'a',
      explanation: 'The goal is better visibility and faster, data-driven decisions—not replacing people or adding bureaucracy.',
    },
  ],
  shopfloorTask: {
    title: 'Shopfloor Task',
    description: 'Choose one machine signal (e.g., speed, temperature, pressure). Define a normal range and propose one rule (alert) that would help your team react faster.',
    tiles: [
      { title: 'Signal', desc: 'What will be monitored?' },
      { title: 'Normal Range', desc: 'What is considered OK?' },
      { title: 'Rule', desc: 'When should an alert trigger?' },
      { title: 'Action', desc: 'What should happen next?' },
    ],
  },
};
