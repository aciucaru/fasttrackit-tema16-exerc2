import { Component } from '@angular/core';
import { RNANucleotide, DNANucleotide } from './model/nucleotide';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent
{
    dnaStrand: DNANucleotide[] =
        [
            new DNANucleotide('A'),
            new DNANucleotide('C'),
            new DNANucleotide('G'),
            new DNANucleotide('T')
        ];

    rnaStrand: RNANucleotide[] =
    [
        new RNANucleotide('A'),
        new RNANucleotide('C'),
        new RNANucleotide('g'),
        new RNANucleotide('U')
    ];

    ngOnInit(): void
    {
        this.calculateRNAStrand();
    }

    // metoda ce determina complementul RNA al fiecarui element din sirul DNA
    calculateRNAStrand(): void
    {
        for(let i=0; i<this.dnaStrand.length; i++)
        {
            this.rnaStrand[i] = this.dnaStrand[i].calculateRNAComplement();
        }
    }

    // metoda ce adauga cate un element la sfarsitul sirulrilor de DNA si RNA
    addNucleotide(): void
    {
        let dnaNucleotide: DNANucleotide = new DNANucleotide('A');
        let RNANucleotide: RNANucleotide = dnaNucleotide.calculateRNAComplement();

        this.dnaStrand.push(dnaNucleotide);
        this.rnaStrand.push(RNANucleotide);
    }

    // metoda ce elimina cate un element de la sfarsitul sirulrilor de DNA si RNA
    removeNucleotide(): void
    {
        this.dnaStrand.pop();
        this.rnaStrand.pop();
    }
}
