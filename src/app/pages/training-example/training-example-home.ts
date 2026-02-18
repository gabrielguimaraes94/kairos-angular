import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

type TopicStatus = 'active' | 'soon';

interface TrainingTopic {
  title: string;
  desc: string;
  icon: string;
  tag: string;
  status: TopicStatus;
  route?: string;
}

@Component({
  selector: 'app-training-example-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './training-example-home.html',
  styleUrls: ['./training-example-home.css'],
})
export class TrainingExampleHome {
  topics: TrainingTopic[] = [
    {
      title: 'Digitalization',
      desc: 'Fundamentals of digital transformation in daily operations and data quality.',
      icon: '💻',
      tag: 'Base module',
      status: 'active',
      route: '/training-example/digitalization/fundamentals',
    },
    {
      title: 'GPS',
      desc: 'Gestamp Production System principles and mindset.',
      icon: '⚙️',
      tag: 'Coming soon',
      status: 'soon',
    },
    {
      title: 'Industry 4.0',
      desc: 'Smart manufacturing and connected systems.',
      icon: '🏭',
      tag: 'Coming soon',
      status: 'soon',
    },
    {
      title: 'Cobots',
      desc: 'Collaborative robots in production environments.',
      icon: '🤖',
      tag: 'Coming soon',
      status: 'soon',
    },
    {
      title: 'Humanoid',
      desc: 'Human-machine interaction and future applications.',
      icon: '🧠',
      tag: 'Coming soon',
      status: 'soon',
    },
  ];

  trackByTitle(_: number, item: TrainingTopic) {
    return item.title;
  }
}
