import { Component } from '@angular/core';

@Component({
  selector: 'app-image-input',
  templateUrl: './image-input.component.html',
  styleUrls: ['./image-input.component.scss'],
})
export class ImageInputComponent {
  Object = Object;
  selectedFile: File | null = null;
  previewUrl: string | ArrayBuffer | null = null;
  languages: string[] = [
    'English',
    'Spanish',
    'French',
    'German',
    'Chinese',
    'Japanese',
    'Russian',
    'Arabic',
  ];
  selectedLanguages: string[] = ['English'];
  descriptionLength: 'short' | 'long' = 'short';
  aiOutput: { [key: string]: string } = {};

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
    this.previewImage();
  }

  previewImage(): void {
    if (this.selectedFile) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.previewUrl = e.target.result;
      };
      reader.readAsDataURL(this.selectedFile);
    }
  }

  toggleLanguage(language: string): void {
    const index = this.selectedLanguages.indexOf(language);
    if (index > -1) {
      this.selectedLanguages.splice(index, 1);
      delete this.aiOutput[language];
    } else {
      this.selectedLanguages.push(language);
    }
  }

  generateDescription(): void {
    console.log('Generating description...');
    console.log('File:', this.selectedFile);
    console.log('Languages:', this.selectedLanguages);
    console.log('Description length:', this.descriptionLength);

    // Simulate AI output generation
    this.selectedLanguages.forEach((lang) => {
      this.aiOutput[
        lang
      ] = `This is a ${this.descriptionLength} AI-generated description for the uploaded image in ${lang}.`;
    });
  }
}
