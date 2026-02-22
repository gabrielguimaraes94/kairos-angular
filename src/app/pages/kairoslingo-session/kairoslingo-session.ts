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
  /* ---------- Config ---------- */
  private readonly QUESTIONS_PER_QUIZ = 10;
  private readonly PASS_RATE = 0.7;
  private readonly XP_PER_CORRECT = 15;

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

  /** ✅ Fix: nunca mostra 5/4 (clamp + considera steps fora do quiz) */
  get progressLabel(): string {
    const total = this.questions.length || 0;
    if (total === 0) return '0/0';

    // no RESULT, currentIndex geralmente vira total (porque você incrementa antes de finalizar)
    // então clamp garante que nunca passe do total
    const shownIndex =
      this.step === 'quiz'
        ? Math.min(this.currentIndex + 1, total)
        : total;

    return `${shownIndex}/${total}`;
  }

  /* ---------- Flow ---------- */
  startQuiz(level: Level) {
    this.level = level;

    const bank =
      level === 'basic'
        ? this.basicBank
        : this.intermediateBank;

    // 1) escolhe 10 perguntas aleatórias (sem repetir)
    const picked = this.pickQuestions(bank, this.QUESTIONS_PER_QUIZ);

    // 2) embaralha as opções de cada pergunta (a correta não fica sempre no meio)
    this.questions = this.shuffleQuestionsWithOptions(picked);

    // reset
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

      this.correctSound.currentTime = 0;
      this.correctSound.play();

      this.xp += this.XP_PER_CORRECT;
      this.popXp(this.XP_PER_CORRECT);
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
      this.score >= Math.ceil(this.questions.length * this.PASS_RATE);

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

  /** Pick N unique questions from bank */
  private pickQuestions(bank: Question[], count: number): Question[] {
    const copy = [...bank];
    this.shuffle(copy);
    return copy.slice(0, Math.min(count, copy.length));
  }

  /** Fisher–Yates shuffle */
  private shuffle<T>(arr: T[]): void {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  /** Shuffle only options inside a question (keeps correct string) */
  private shuffleOptions(question: Question): Question {
    const options = [...question.options];
    this.shuffle(options);

    // safety: garante que a opção correta continua existindo no array
    if (!options.includes(question.correct)) {
      // se por algum motivo não existir, recoloca
      options[0] = question.correct;
      this.shuffle(options);
    }

    return { ...question, options };
  }

  private shuffleQuestionsWithOptions(questions: Question[]): Question[] {
    return questions.map(q => this.shuffleOptions(q));
  }

  /* ---------- QUESTION BANKS ---------- */

  /** BASIC: perguntas mais simples e diretas */
  private basicBank: Question[] = [
    {
      topic: 'Digitalization',
      question: 'What is digitalization?',
      options: [
        'Installing new computers in the company',
        'Converting data, processes, and resources from analog to digital form',
        'Creating backup copies of documents',
      ],
      correct: 'Converting data, processes, and resources from analog to digital form',
    },
    {
      topic: 'Digitalization in practice',
      question: 'What does digitalization mean in practice?',
      options: [
        'Working only on a computer',
        'Using IT technologies to manage data and processes',
        'Limiting information flow between departments',
      ],
      correct: 'Using IT technologies to manage data and processes',
    },
    {
      topic: 'Digitization vs Digitalization',
      question: 'What is digitization?',
      options: [
        'Optimizing production processes',
        'Converting analog information into digital form (e.g., PDF)',
        'Automating machines',
      ],
      correct: 'Converting analog information into digital form (e.g., PDF)',
    },
    {
      topic: 'Data quality',
      question: 'Why is correct data entry important?',
      options: [
        'Because data affects quality and decision-making processes',
        'Because the system requires a constant number of entries',
        'Because it avoids the need for any audits forever',
      ],
      correct: 'Because data affects quality and decision-making processes',
    },
    {
      topic: 'Industry 4.0',
      question: 'What is a “rule” in the I4.0 environment?',
      options: [
        'An algorithm that generates alerts when predefined conditions occur',
        'A manual checklist made by the operator',
        'A module that replaces people with automatic decisions',
      ],
      correct: 'An algorithm that generates alerts when predefined conditions occur',
    },
    {
      topic: 'IoT Insight',
      question: 'What is IoT Insight mainly used for?',
      options: [
        'Real-time analysis of process data from machines and visualization as indicators/charts',
        'Managing technical changes',
        'Conducting audits only',
      ],
      correct: 'Real-time analysis of process data from machines and visualization as indicators/charts',
    },
    {
      topic: 'Timeseries',
      question: 'What is the main use of “Timeseries” in IoT Insight?',
      options: [
        'Plotting the trend of a selected signal within a defined time range',
        'Creating machine performance reports only in tables',
        'Managing IoT devices and assigning operating parameters',
      ],
      correct: 'Plotting the trend of a selected signal within a defined time range',
    },
    {
      topic: 'VQM',
      question: 'What is VQM (Virtual Quality Manager) used for?',
      options: [
        'Creating, executing, and archiving quality-management required records',
        'Production planning',
        'Computer network administration',
      ],
      correct: 'Creating, executing, and archiving quality-management required records',
    },
    {
      topic: 'VWM',
      question: 'What is VWM (Virtual Workflow Manager) used for?',
      options: [
        'Organizing tasks, reminders, and synchronization within the I4.0 environment',
        'Developing health & safety instructions',
        'Creating cost reports',
      ],
      correct: 'Organizing tasks, reminders, and synchronization within the I4.0 environment',
    },
    {
      topic: 'Digitalization principle',
      question: 'Which statement about data is correct?',
      options: [
        'The system reflects reality based on the data it receives',
        'Data has no impact on analysis results',
        'The system always generates correct values automatically',
      ],
      correct: 'The system reflects reality based on the data it receives',
    },

    // extras (se você quiser aumentar o banco depois)
    {
      topic: 'Digitalization goals',
      question: 'One goal of digitalization is to prepare the company for:',
      options: [
        'Industry 4.0',
        'Paper-only audits',
        'Manual work only',
      ],
      correct: 'Industry 4.0',
    },
    {
      topic: 'Problem reporting',
      question: 'Why is reporting problems important in digitalization?',
      options: [
        'It helps build an issue history for analysis and prevention',
        'It is required only during audits',
        'It transfers responsibility to another department',
      ],
      correct: 'It helps build an issue history for analysis and prevention',
    },
  ];

  /** INTERMEDIATE: mais aplicado ao ecossistema e ferramentas */
  private intermediateBank: Question[] = [
    {
      topic: 'Industry 4.0',
      question: 'What is iOT mainly used for?',
      options: [
        'Real-time analysis of process data from machines and visualization as indicators/charts',
        'Creating quality reports only',
        'Managing technical changes only',
      ],
      correct: 'Real-time analysis of process data from machines and visualization as indicators/charts',
    },
    {
      topic: 'Timeseries',
      question: 'What is the main use of “Timeseries” in IoT Insight?',
      options: [
        'Plotting the trend of a selected signal within a defined time range',
        'Configuring alarm rules based on signal values',
        'Production planning and scheduling',
      ],
      correct: 'Plotting the trend of a selected signal within a defined time range',
    },
    {
      topic: 'Rules',
      question: 'What is a “rule” in the I4.0 environment?',
      options: [
        'An algorithm that generates alerts and notifications when conditions occur',
        'A set of production data used to analyze trends over time',
        'A permissions module for managing users',
      ],
      correct: 'An algorithm that generates alerts and notifications when conditions occur',
    },
    {
      topic: 'VQM',
      question: 'VQM – Virtual Quality Manager is used for:',
      options: [
        'Creating, executing, and archiving records required by the quality management system',
        'Tracking production status only',
        'Production planning',
      ],
      correct: 'Creating, executing, and archiving records required by the quality management system',
    },
    {
      topic: 'VWM',
      question: 'VWM – Virtual Workflow Manager is used for:',
      options: [
        'Organizing tasks, reminders, and synchronization within the I4.0 environment',
        'Computer network administration',
        'Creating cost reports',
      ],
      correct: 'Organizing tasks, reminders, and synchronization within the I4.0 environment',
    },

    // Suas perguntas aplicadas (do arquivo atual)
    {
      topic: 'Plant Visualization',
      question: 'Which tool allows you to visualize information about your entire plant across its layout?',
      options: [
        'IoT Manager',
        'Plant Layout Viewer / Digital Layout',
        'Virtual Planner',
      ],
      correct: 'Plant Layout Viewer / Digital Layout',
    },
    {
      topic: 'VQM',
      question: 'How could you see expired forms for a specific Control Sheet?',
      options: [
        'Virtual Planner → Forms',
        'VQM → Control Sheets → Select sheet → Filter status = Expired',
        'IoT Insight → Alarms',
      ],
      correct: 'VQM → Control Sheets → Select sheet → Filter status = Expired',
    },
    {
      topic: 'Industry 4.0 Planning',
      question: 'What is the planning app in the Industry 4.0 ecosystem?',
      options: [
        'IoT Manager',
        'Virtual Planner',
        'IoT Insight',
      ],
      correct: 'Virtual Planner',
    },

    // extras intermediárias (mantém 10+ no banco)
    {
      topic: 'IoT Insight vs IoT Manager',
      question: 'What is the difference between IoT Insight and IoT Manager?',
      options: [
        'IoT Manager is used to visualize timeseries data',
        'IoT Insight is for analysis, IoT Manager is the administrative backend',
        'Both are used only for visualization',
      ],
      correct: 'IoT Insight is for analysis, IoT Manager is the administrative backend',
    },
    {
      topic: 'Digitalization vs Digitization',
      question: 'Which statement is true?',
      options: [
        'Digitization is a prerequisite for digitalization',
        'Digitalization does not require data',
        'Digitization always improves work quality',
      ],
      correct: 'Digitization is a prerequisite for digitalization',
    },
    {
      topic: 'Data protection',
      question: 'Which data-protection rule must be followed?',
      options: [
        'Sharing passwords with colleagues',
        'Logging out after work and not deleting data without authorization',
        'Changing data without system notification',
      ],
      correct: 'Logging out after work and not deleting data without authorization',
    },
  ];
}