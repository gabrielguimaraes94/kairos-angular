import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { Academy } from './pages/academy/academy';
import { LearningPaths } from './pages/learning-paths/learning-paths';
import { AiLearningPath } from './pages/ai-learning-path/ai-learning-path';
import { IndustryLearningPath } from './pages/industry-learning-path/industry-learning-path';
import { DigitalizationLearningPath } from './pages/digitalization-learning-path/digitalization-learning-path';
import { SkillMatrix } from './pages/skill-matrix/skill-matrix';
import { Rewards } from './pages/rewards/rewards';

import { TrainingExample } from './pages/training-example/training-example';
import { TrainingExampleHomeComponent } from './pages/training-example/training-example-home.component';

import { WhatIsKairos } from './pages/what-is-kairos/what-is-kairos';
import { Kairoslingo } from './pages/kairoslingo/kairoslingo';
import { KairoslingoSession } from './pages/kairoslingo-session/kairoslingo-session';

export const routes: Routes = [
  { path: '', component: Home },

  { path: 'academy', component: Academy },
  { path: 'learning-paths', component: LearningPaths },
  { path: 'learning-paths/ai', component: AiLearningPath },
  { path: 'learning-paths/industry', component: IndustryLearningPath },
  { path: 'learning-paths/digitalization', component: DigitalizationLearningPath },
  { path: 'skill-matrix', component: SkillMatrix },
  { path: 'rewards', component: Rewards },

  {
    path: 'training-example',
    children: [
      // 🏠 HUB (Training Examples)
      { path: '', component: TrainingExampleHomeComponent },

      // 📘 ALL training modules (Digitalization, Industry 4.0, future ones)
      { path: ':topic/:module', component: TrainingExample },
    ],
  },

  { path: 'about-kairos', component: WhatIsKairos },
  { path: 'kairoslingo', component: Kairoslingo },
  { path: 'kairoslingo/session', component: KairoslingoSession },

  { path: '**', redirectTo: '' },
];
