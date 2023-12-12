import { Component, OnInit, ViewChild } from '@angular/core';
import { DigimonService } from '../digimon.service';

@Component({
  selector: 'app-digimon-display',
  templateUrl: './digimon-display.component.html',
  styleUrls: ['./digimon-display.component.css']
})
export class DigimonDisplayComponent implements OnInit {
  @ViewChild('digimonModal') digimonModal: any;

  digimons: any[] = [];
  currentDigimons: any[] = [];
  currentPage: number = 1;
  pageSize: number = 12;
  pages: number[] = [];
  selectedDigimon: any = null;
  filterName: string = '';
  filterLevel: string = '';
  errorMessage: string = '';

  constructor(private digimonService: DigimonService) { }

  ngOnInit(): void {
 
  }

  loadAllDigimons(): void {
    this.digimonService.getAllDigimons().subscribe(data => {
      this.digimons = data;
      this.setPage(1);
    },
    error => {
      this.errorMessage = 'Erro ao carregar todos os Digimons';
    });
  }

  setPage(page: number): void {
    this.currentPage = page;
    let startIndex = (page - 1) * this.pageSize;
    this.currentDigimons = this.digimons.slice(startIndex, startIndex + this.pageSize);

    // Atualiza a paginação
    this.pages = [];
    for (let i = 1; i <= Math.ceil(this.digimons.length / this.pageSize); i++) {
      this.pages.push(i);
    }
  }

  showDigimonDetails(digimon: any): void {
    this.selectedDigimon = digimon;
    this.digimonModal.nativeElement.classList.add('show');
    this.digimonModal.nativeElement.style.display = 'block';
  }

  hideModal(): void {
    this.digimonModal.nativeElement.classList.remove('show');
    this.digimonModal.nativeElement.style.display = 'none';
  }

  applyFilter() {
    if (this.filterName) {
      this.digimonService.getDigimonByName(this.filterName).subscribe(data => {
        this.digimons = data;
        this.setPage(1);
        this.errorMessage = '';
      },
      error => {
        this.errorMessage = error;
      }
    );
    } else if (this.filterLevel) {
      this.digimonService.getDigimonByLevel(this.filterLevel).subscribe(data => {
        this.digimons = data;
        this.setPage(1);
        this.errorMessage = '';
      });
    } else {
      this.errorMessage = '';
      this.loadAllDigimons();      
    
    }
  }

}
