import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-learning-paths',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './learning-paths.html',
  styleUrls: ['./learning-paths.css']
})
export class LearningPaths {}
