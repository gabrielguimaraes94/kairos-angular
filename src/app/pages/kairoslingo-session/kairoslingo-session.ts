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
  step: Step = 'select';
  level: Level | null = null;

  questions: Question[] = [];
  currentIndex = 0;

  score = 0;
  xp = 0;
  passed = false;

  // UI state
  selectedOption: string | null = null;
  isCorrect: boolean | null = null;
  showXpPop = false;
  xpPopValue = 0;

  get currentQuizTitle(): string {
    return this.level === 'basic' ? 'Basic Digitization Test' : 'Intermediate Digitization Test';
  }

  get currentQuestion(): Question | null {
    return this.questions[this.currentIndex] ?? null;
  }

  get progressLabel(): string {
    return `${this.currentIndex + 1}/${this.questions.length}`;
  }

  startQuiz(level: Level) {
    this.level = level;
    this.questions = level === 'basic' ? this.basicQuestions : this.intermediateQuestions;

    this.currentIndex = 0;
    this.score = 0;
    this.xp = 0;
    this.passed = false;

    this.resetAnswerState();
    this.step = 'quiz';
  }

  selectAnswer(option: string) {
    if (!this.currentQuestion) return;
    if (this.selectedOption) return; // trava para não trocar depois

    this.selectedOption = option;

    const correct = option === this.currentQuestion.correct;
    this.isCorrect = correct;

    if (correct) {
      this.score += 1;
      const gain = 15;
      this.xp += gain;
      this.popXp(gain);
    }
  }

  next() {
    if (!this.selectedOption) return;

    this.currentIndex += 1;

    if (this.currentIndex >= this.questions.length) {
      this.finish();
      return;
    }

    this.resetAnswerState();
  }

  finish() {
    // 70% para passar
    this.passed = this.score >= Math.ceil(this.questions.length * 0.7);
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

  private resetAnswerState() {
    this.selectedOption = null;
    this.isCorrect = null;
    this.showXpPop = false;
    this.xpPopValue = 0;
  }

  private popXp(value: number) {
    this.xpPopValue = value;
    this.showXpPop = true;
    window.setTimeout(() => (this.showXpPop = false), 650);
  }

  /* ---------- BASIC DIGITIZATION TEST ---------- */
  basicQuestions: Question[] = [
    {
      topic: 'IoT Insight',
      question: 'What is IoT Insight?',
      options: [
        'A planning and scheduling tool',
        'The main tool for real-time visualization and analysis of machine data',
        'A maintenance ticket system',
      ],
      correct: 'The main tool for real-time visualization and analysis of machine data',
    },
    {
      topic: 'IoT Insight vs IoT Manager',
      question: 'What is the difference between IoT Insight and IoT Manager?',
      options: [
        'Both are used only for visualization',
        'IoT Insight is for analysis, IoT Manager is the administrative backend',
        'IoT Manager is used to visualize timeseries data',
      ],
      correct: 'IoT Insight is for analysis, IoT Manager is the administrative backend',
    },
    {
      topic: 'Timeseries',
      question: 'What is the main use of Timeseries in IoT Insight?',
      options: [
        'To configure alarms',
        'To visualize historical and real-time trends of machine signals',
        'To create production plans',
      ],
      correct: 'To visualize historical and real-time trends of machine signals',
    },
    {
      topic: 'Rules',
      question: 'What is a rule?',
      options: [
        'A manual inspection checklist',
        'An automated condition that triggers actions when criteria are met',
        'A maintenance work order',
      ],
      correct: 'An automated condition that triggers actions when criteria are met',
    },
  ];

  /* ---------- INTERMEDIATE DIGITIZATION TEST ---------- */
  intermediateQuestions: Question[] = [
    {
      topic: 'Plant Visualization',
      question: 'Which tool allows you to visualize information about your entire plant across its layout?',
      options: ['Virtual Planner', 'Plant Layout Viewer / Digital Layout', 'IoT Manager'],
      correct: 'Plant Layout Viewer / Digital Layout',
    },
    {
      topic: 'VQM',
      question: 'How could you see expired forms for a specific Control Sheet?',
      options: [
        'IoT Insight → Alarms',
        'VQM → Control Sheets → Select sheet → Filter status = Expired',
        'Virtual Planner → Forms',
      ],
      correct: 'VQM → Control Sheets → Select sheet → Filter status = Expired',
    },
    {
      topic: 'Industry 4.0 Planning',
      question: 'What is the planning app in the Industry 4.0 ecosystem?',
      options: ['IoT Insight', 'Virtual Planner', 'IoT Manager'],
      correct: 'Virtual Planner',
    },
  ];
}
