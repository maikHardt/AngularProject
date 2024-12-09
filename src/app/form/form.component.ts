import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form', // Der Name des Angular-Komponenten-Selectors
  imports: [ReactiveFormsModule], // Importieren von ReactiveFormsModule, um reaktive Formulare zu ermöglichen
  templateUrl: './form.component.html', // Die HTML-Datei für die Vorlage der Komponente
  styleUrl: './form.component.scss' // Die SCSS-Datei für die Stile der Komponente
})
export class FormComponent {
  // Deklaration einer FormGroup-Instanz, die das Formular repräsentiert
  userForm: FormGroup;

  // Konstruktor zur Initialisierung des Formulars mit einem FormBuilder
  constructor(private formBuilder: FormBuilder) {
    // Formular initialisieren und mit FormBuilder einrichten
    this.userForm = this.formBuilder.group({
      // Eingabefeld für die E-Mail-Adresse mit Validierungsregeln
      email: ['', [Validators.required, Validators.email]], // Erforderlich und muss eine gültige E-Mail sein

      // Eingabefeld für das Passwort mit Validierungsregeln
      password: ['', [Validators.required, Validators.minLength(6)]], // Erforderlich und muss mindestens 6 Zeichen lang sein

      // Eingabefeld für die Adresse (erforderlich)
      address: ['', Validators.required], // Erforderlich

      // Eingabefeld für den Adresszusatz (optional)
      addressSupplement: [''], // Kein Validator, optional

      // Eingabefeld für die Stadt (erforderlich)
      city: ['', Validators.required], // Erforderlich

      // Eingabefeld für das Land (erforderlich)
      state: ['', Validators.required], // Erforderlich

      // Eingabefeld für die Postleitzahl mit einer Validierung für eine 5-stellige Zahl
      zip: ['', [Validators.required, Validators.pattern('^[0-9]{5}$')]], // Erforderlich und muss eine 5-stellige Zahl sein

      // Checkbox für die Zustimmung, standardmäßig auf false gesetzt, muss angekreuzt sein
      accepted: [false, Validators.requiredTrue] // Erforderlich und muss true sein, um das Formular abzuschicken
    });
  }

  // Methode, die beim Abschicken des Formulars aufgerufen wird
  onSubmit() {
    if (this.userForm.valid) { // Überprüfen, ob das Formular gültig ist
      // Formulardaten in JSON umwandeln und in der Konsole ausgeben
      console.log('Submitted:', JSON.stringify(this.userForm.value, null, 1));
      // Benachrichtigung für den Benutzer
      alert("Registrierung erfolgreich!");
    } else {
      // Ausgabe, falls das Formular nicht gültig ist
      console.log('Form is not valid');
    }
  }
}
