export type TrainingStepStatus = 'done' | 'current' | 'locked';

export interface TrainingStep {
  id: string;
  name: string;
  desc: string;
  status: TrainingStepStatus;
}

export interface TrainingQuizOption {
  id: string;
  text: string;
}

export interface TrainingQuizQuestion {
  id: string;
  text: string;
  options: TrainingQuizOption[];
  correctOptionId: string;
  explanation: string;
}

export interface TrainingContentBlock {
  title: string;
  body?: string;
  pills?: string[];
  list?: string[];
  highlight?: boolean;
}

export interface TrainingModule {
  id: string;
  slug: string;
  tag: string;
  title: string;
  subtitle: string;
  breadcrumbs: { label: string; link?: string }[];
  meta: { level: string; duration: string; format: string };
  steps: TrainingStep[];
  completionCriteria: string[];
  blocks: TrainingContentBlock[];
  quiz: TrainingQuizQuestion[];
  shopfloorTask: {
    title: string;
    description: string;
    tiles: { title: string; desc: string }[];
  };
}
