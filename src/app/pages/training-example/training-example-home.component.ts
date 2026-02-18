import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

type TopicStatus = 'active' | 'soon';

interface TrainingTopic {
  title: string;
  desc: string;
  icon: string;
  route?: string;
  tag: string;
  status: TopicStatus;

  concepts?: string[];
  not?: string[];
}

@Component({
  selector: 'app-training-example-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './training-example-home.component.html',
  styleUrls: ['./training-example-home.component.css'],
})
export class TrainingExampleHomeComponent {
  topics: TrainingTopic[] = [
    {
      title: 'Digitalization',
      desc: 'Fundamentals of digital transformation in daily operations and data quality.',
      icon: '💻',
      tag: 'Base module',
      status: 'active',
      route: '/training-example/digitalization/fundamentals',
      concepts: ['Data', 'Processes', 'Automation', 'Transparency', 'Decision Support', 'People'],
      not: ['Employee punishment', 'Replacing people with machines', 'Extra reporting for no reason'],
    },
    {
      title: 'Industry 4.0',
      desc: 'Connected systems (IoT, rules, workflows) for real-time visibility and faster decisions.',
      icon: '🏭',
      tag: 'Base module',
      status: 'active',
      route: '/training-example/industry4/fundamentals',
      concepts: ['IoT', 'Timeseries', 'Rules', 'Workflows', 'Alerts', 'KPIs'],
      not: ['Extra bureaucracy', 'Replacing people', 'Blocking information flow'],
    },
    { title: 'GPS', desc: 'Gestamp Production System principles and mindset.', icon: '⚙️', tag: 'Coming soon', status: 'soon' },
    { title: 'Cobots', desc: 'Collaborative robots in production environments.', icon: '🤖', tag: 'Coming soon', status: 'soon' },
    { title: 'Humanoid', desc: 'Human-machine interaction and future applications.', icon: '🧠', tag: 'Coming soon', status: 'soon' },
  ];

  trackByTitle(_: number, item: TrainingTopic) {
    return item.title;
  }
}
