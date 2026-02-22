import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';

import { DIGITALIZATION_FUNDAMENTALS } from './data/digitalization-fundamentals';
import { INDUSTRY4_FUNDAMENTALS } from './data/industry4-fundamentals';
import { TrainingModule } from './models/training-models';
import { GPS_FUNDAMENTALS } from './data/gps-fundamentals';
import { HUMANOIDS_FUNDAMENTALS } from './data/humanoids-fundamentals';
import { COBOTS_FUNDAMENTALS } from './data/cobots-fundamentals';

@Component({
  selector: 'app-training-example',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './training-example.html',
  styleUrls: ['./training-example.css'],
})
export class TrainingExample implements OnInit, OnDestroy {
  module: TrainingModule = DIGITALIZATION_FUNDAMENTALS;

  answers: Record<string, string> = {};
  submitted = false;

  private sub?: Subscription;

  // 🔥 Registry of available modules: "topic/module" => TrainingModule
  private registry: Record<string, TrainingModule> = {
    'digitalization/fundamentals': DIGITALIZATION_FUNDAMENTALS,
    'industry4/fundamentals': INDUSTRY4_FUNDAMENTALS,
    'gps/fundamentals': GPS_FUNDAMENTALS,
    'humanoids/fundamentals': HUMANOIDS_FUNDAMENTALS,
    'cobots/fundamentals': COBOTS_FUNDAMENTALS,
  };

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Listen to route param changes: /training-example/:topic/:module
    this.sub = this.route.paramMap.subscribe((params) => {
      const topic = (params.get('topic') || '').toLowerCase();
      const mod = (params.get('module') || '').toLowerCase();

      const key = `${topic}/${mod}`;

      // Pick module from registry (fallback to digitalization)
      const selected = this.registry[key] ?? DIGITALIZATION_FUNDAMENTALS;

      // Reset state and scroll when module changes
      this.setModule(selected);
    });
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  setModule(m: TrainingModule) {
    this.module = m;
    this.answers = {};
    this.submitted = false;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  selectAnswer(qId: string, optionId: string) {
    this.answers[qId] = optionId;
  }

  submitQuiz() {
    this.submitted = true;
  }

  isCorrect(qId: string): boolean {
    const q = this.module.quiz.find(x => x.id === qId);
    return !!q && this.answers[qId] === q.correctOptionId;
  }
}
