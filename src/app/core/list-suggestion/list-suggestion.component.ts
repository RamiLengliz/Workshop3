import { Component } from '@angular/core';
import { Suggestion } from '../../models/suggestion';

@Component({
  selector: 'app-list-suggestion',
  templateUrl: './list-suggestion.component.html',
  styleUrls: ['./list-suggestion.component.css']
})
export class ListSuggestionComponent {

  searchText: string = '';

  suggestions: Suggestion[] = [
    { id: 1, title: 'Organiser une journée team building',
      description: 'Suggestion pour organiser une journée...',
      category: 'Événements', date: new Date('2025-01-20'),
      status: 'acceptee'
    },
    { id: 2, title: 'Améliorer le système de réservation',
      description: 'Proposition pour améliorer...',
      category: 'Technologie', date: new Date('2025-01-15'),
      status: 'refusee'
    },
    { id: 3, title: 'Créer un système de récompenses',
      description: 'Mise en place d’un système...',
      category: 'RH', date: new Date('2025-01-25'),
      status: 'refusee'
    },
    { id: 4, title: 'Moderniser l’interface UI',
      description: 'Refonte complète...',
      category: 'Technologie', date: new Date('2025-01-30'),
      status: 'en_attente'
    }
  ];

  get filteredSuggestions() {
    return this.suggestions.filter(s =>
      s.title.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }
}
