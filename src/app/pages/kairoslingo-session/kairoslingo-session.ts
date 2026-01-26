import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

type Step = 'select' | 'quiz' | 'result';
type Level = 'basic' | 'intermediate';

type Question = {
  topic: string;
  question: string;
  options: string[];
  correct: string;
};

@Component({
  selector: 'app-kairoslingo-session',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './kairoslingo-session.html',
  styleUrls: ['./kairoslingo-session.css'],
})
export class KairoslingoSession {
  /* ---------- Sounds ---------- */
  correctSound = new Audio('assets/sounds/correct.mp3');
  wrongSound = new Audio('assets/sounds/wrong.mp3');

  /* ---------- State ---------- */
  step: Step = 'select';
  level: Level | null = null;

  questions: Question[] = [];
  currentIndex = 0;

  score = 0;
  xp = 0;
  passed = false;

  /* ---------- UI State ---------- */
  selectedOption: string | null = null;
  isCorrect: boolean | null = null;
  showFeedback = false;
  showXpPop = false;
  xpPopValue = 0;

  /* ---------- Getters ---------- */
  get currentQuizTitle(): string {
    return this.level === 'basic'
      ? 'Basic Digitization Test'
      : 'Intermediate Digitization Test';
  }

  get currentQuestion(): Question | null {
    return this.questions[this.currentIndex] ?? null;
  }

  get progressLabel(): string {
    return `${this.currentIndex + 1}/${this.questions.length}`;
  }

  /* ---------- Flow ---------- */
  startQuiz(level: Level) {
    this.level = level;
    this.questions =
      level === 'basic'
        ? this.basicQuestions
        : this.intermediateQuestions;

    this.currentIndex = 0;
    this.score = 0;
    this.xp = 0;
    this.passed = false;

    this.resetAnswerState();
    this.step = 'quiz';
  }

  selectAnswer(option: string) {
    if (!this.currentQuestion) return;
    if (this.selectedOption) return;

    this.selectedOption = option;
    const correct = option === this.currentQuestion.correct;
    this.isCorrect = correct;

    if (correct) {
      this.score += 1;
      const gain = 15;

      this.correctSound.currentTime = 0;
      this.correctSound.play();

      this.xp += gain;
      this.popXp(gain);
    } else {
      this.wrongSound.currentTime = 0;
      this.wrongSound.play();
    }

    this.showFeedback = true;
  }

  next() {
    if (!this.selectedOption) return;

    this.currentIndex++;

    if (this.currentIndex >= this.questions.length) {
      this.finish();
      return;
    }

    this.resetAnswerState();
  }

  finish() {
    this.passed =
      this.score >= Math.ceil(this.questions.length * 0.7);
    this.step = 'result';
  }

  backToSelect() {
    this.step = 'select';
    this.level = null;
    this.questions = [];
    this.currentIndex = 0;
    this.score = 0;
    this.xp = 0;
    this.passed = false;
    this.resetAnswerState();
  }

  restartSameLevel() {
    if (!this.level) return;
    this.startQuiz(this.level);
  }

  /* ---------- Helpers ---------- */
  private resetAnswerState() {
    this.selectedOption = null;
    this.isCorrect = null;
    this.showFeedback = false;
    this.showXpPop = false;
    this.xpPopValue = 0;
  }

  private popXp(value: number) {
    this.xpPopValue = value;
    this.showXpPop = true;
    setTimeout(() => (this.showXpPop = false), 650);
  }

  /* ---------- QUESTIONS ---------- */

  basicQuestions: Question[] = [
    {
      topic: 'IoT Insight',
      question: 'What is IoT Insight?',
      options: [
        'A maintenance ticket system',
        'The main tool for real-time visualization and analysis of machine data',
        'A planning and scheduling tool'
      ],
      correct:
        'The main tool for real-time visualization and analysis of machine data',
    },
    {
      topic: 'IoT Insight vs IoT Manager',
      question:
        'What is the difference between IoT Insight and IoT Manager?',
      options: [
        'IoT Manager is used to visualize timeseries data',
        'IoT Insight is for analysis, IoT Manager is the administrative backend',
        'Both are used only for visualization'
      ],
      correct:
        'IoT Insight is for analysis, IoT Manager is the administrative backend',
    },
    {
      topic: 'Timeseries',
      question:
        'What is the main use of Timeseries in IoT Insight?',
      options: [
        'To visualize historical and real-time trends of machine signals',
        'To create production plans',
        'To configure alarms'
      ],
      correct:
        'To visualize historical and real-time trends of machine signals',
    },
    {
      topic: 'Rules',
      question: 'What is a rule?',
      options: [
        'An automated condition that triggers actions when criteria are met',
        'A maintenance work order',
        'A manual inspection checklist'
      ],
      correct:
        'An automated condition that triggers actions when criteria are met',
    },
  ];


  intermediateQuestions: Question[] = [
  {
    topic: 'Plant Visualization',
    question:
      'Which tool allows you to visualize information about your entire plant across its layout?',
    options: [
      'IoT Manager',
      'Plant Layout Viewer / Digital Layout',
      'Virtual Planner'
    ],
    correct: 'Plant Layout Viewer / Digital Layout',
  },
  {
    topic: 'VQM',
    question:
      'How could you see expired forms for a specific Control Sheet?',
    options: [
      'Virtual Planner → Forms',
      'VQM → Control Sheets → Select sheet → Filter status = Expired',
      'IoT Insight → Alarms'
    ],
    correct:
      'VQM → Control Sheets → Select sheet → Filter status = Expired',
  },
  {
    topic: 'Industry 4.0 Planning',
    question:
      'What is the planning app in the Industry 4.0 ecosystem?',
    options: [
      'IoT Manager',
      'Virtual Planner',
      'IoT Insight'
    ],
    correct: 'Virtual Planner',
  },
];

}
