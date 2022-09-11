import { Component, Input, OnInit } from '@angular/core';
import { RNANucleotide, DNANucleotide } from 'src/app/model/nucleotide';

// component ce permite incrementarea/decrementarea unei nucleotide DNA
@Component({
  selector: 'app-nucleotide',
  template: `
    <div>
        <button (click)="dnaNucleotide?.decrement()">-</button>
        <a style="display: inline;"> {{dnaNucleotide?.value}} </a>
        <button (click)="dnaNucleotide?.increment()">+</button>
    </div>
  `,
  styles: [
  ]
})
export class NucleotideComponent implements OnInit
{
    // nucleotida DNA este primita ca input de la tabelul de nucleotide
    @Input() dnaNucleotide?: DNANucleotide;

    constructor() { }

    ngOnInit(): void {}


}
