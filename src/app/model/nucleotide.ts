
// clasa de baza pentru nucleotide RNA si DNA
// aceasta clasa serveste mai mult ca un Enum ce contine logica pt. a se incrementa si
// decrementa la valoarea urmatoare/precedenta dintr-un set de valori posibile
class Nucleotide
{
    // valorile posibile pe care le poate avea o instanta a acestei clase
    // acest sir de valori posibile se seteaza in constructor
    posibleValues: string[] = [];
    // indexul corespunzator valorii curente
    valueIndex: number = 0;
    // valoare curenta (va fi garantat o valoare din sirul de valori posibile) 
    value: string = 'A';

    // in constructor se seteaza valorile posibile ale instantelor
    constructor(posibleValues: string[])
    {
        this.posibleValues = posibleValues;
    }

    // metoda ce avanseaza valoarea curenta la urmatoare valoare din sirul de valori posibile
    increment(): void
    {
        if(this.valueIndex < this.posibleValues.length-1)
        {
            this.valueIndex++;
            this.value = this.posibleValues[this.valueIndex];
        }
        else
        {
            this.valueIndex = 0;
            this.value = this.posibleValues[this.valueIndex];
        }
    }

    // metoda ce decrementeaza valoarea curenta la valoarea precedenta din sirul de valori posibile
    decrement(): void
    {
        if(this.valueIndex > 0)
        {
            this.valueIndex--;
            this.value = this.posibleValues[this.valueIndex];
        }
        else
        {
            this.valueIndex = this.posibleValues.length-1;
            this.value = this.posibleValues[this.valueIndex];
        }
    }
}

export class RNANucleotide extends Nucleotide
{
    constructor(nucleotideValue: string)
    {
        // in constructor se seteaza valorile posibile pt. instantele acestei clase (adica RNA)
        super(['A', 'C', 'G', 'U']);

        // se verifica daca valoarea primita face parte din sirul de valori posibile
        let index = this.posibleValues.indexOf(nucleotideValue);
        if(index >= 0)
        {
            this.valueIndex = index;
            this.value = nucleotideValue;
        }
        else
        {
            // daca nu face parte din sirul de valori posibile, atunci se foloseste ca valoare
            // default prima valoare din sirul de valori posibile
            this.valueIndex = 0;
            this.value = this.posibleValues[0];
        }
    }

    // metoda ce calculeaza si returneaza complementul nucleotidei
    calculateDNAComplement(): DNANucleotide
    {
        let complementValue: string = '';

        switch(this.value)
        {
            case 'A':
                complementValue = 'T';
                break;
            case 'C':
                complementValue = 'G';
                break;
            case 'G':
                complementValue = 'C';
                break;
            case 'U':
                complementValue = 'A';
                break;
        }

        return new DNANucleotide(complementValue);
    }
}

export class DNANucleotide extends Nucleotide
{
    constructor(nucleotideValue: string)
    {
        // valori posibile pentru DNA
        super(['A', 'C', 'G', 'T']);

        let index = this.posibleValues.indexOf(nucleotideValue);
        if(index >= 0)
        {
            this.valueIndex = index;
            this.value = nucleotideValue;
        }
        else
        {
            this.valueIndex = 0;
            this.value = this.posibleValues[0];
        }
    }

    calculateRNAComplement(): RNANucleotide
    {
        let complementValue: string = '';

        switch(this.value)
        {
            case 'A':
                complementValue = 'U';
                break;
            case 'C':
                complementValue = 'G';
                break;
            case 'G':
                complementValue = 'C';
                break;
            case 'T':
                complementValue = 'A';
                break;
        }

        return new RNANucleotide(complementValue);
    }
}