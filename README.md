# Labo-String: CLI per Utilità su Stringhe

Questo progetto fornisce una base per una semplice Command-Line Interface (CLI) Node.js che offre diverse utilità per la manipolazione di stringhe.

## Nota Importante per lo Studente - Setup Iniziale del Progetto

Benvenuto/a a `labo-string`!

Questo repository è un **template di partenza** per il tuo laboratorio valutato. Come avrai modo di leggere nelle istruzioni del laboratorio, una parte fondamentale del tuo lavoro iniziale (Esercizio 1) consisterà nell'analizzare attentamente la struttura e la configurazione corrente di questo progetto.

**Potresti notare che alcuni aspetti della configurazione iniziale – inclusa questa stessa documentazione (`README.md`), il file `package.json` e la gestione dei file da ignorare (`.gitignore`) – sono stati volutamente lasciati incompleti o potrebbero non seguire tutte le best practice per un progetto Node.js.**

Il tuo primo compito sarà proprio quello di identificare queste aree di miglioramento e apportare le necessarie correzioni e completamenti, come dettagliato nelle istruzioni del laboratorio, per portare il progetto a uno standard qualitativo superiore.

Buona analisi e buon lavoro!

## Funzionalità Principali (Previste)

* Inversione di una stringa.
* Verifica se una stringa è palindroma.
* Troncamento di una stringa a una lunghezza massima specificata.
* Conteggio delle occorrenze di ciascun carattere in una stringa.

## Installazione e Avvio

### Configurazione Iniziale

Per poter eseguire il programma:

Assicurati di avere installato **Node.js** versione `>=22.14.0`. Puoi verificare la versione di Node.js installata sul tuo sistema con il comando:

```bash
node -v
```
1. Clona il repository:
    ```bash
    git clone https://github.com/M-mitch-M/ssgs-labo2.git
    ```

2. Installa le dipendenze:
    ```bash
    npm ci
    ```

per eseguire il programma:
```bash
node ./index.js <numero_funzione> <stringa_input> [parametro_aggiuntivo]
```
dove *numero_funzione* :
1. Inverti Stringa (reverseString)
2. Controlla Palindromo (isPalindrome)
3. Tronca Stringa (truncateString) - richiede [lunghezza_massima]
4. Conta Caratteri (countCharacters)

### Testing con Jest
Jest deve essere configurato nel file `package.json`
```json
    "devDependencies": {
    "jest": "^29.7.0"
  }
```

1. Assicurati che Jest generi il report di coverage nel file `package.json`:
    ```json
    "scripts": {
        "test": "jest --coverage"
    }
    ```
2. Esegui il comando:
    ```bash
    npm test
    ```
3. Il report di coverage sarà generato nella directory `coverage/`.


*(Questa sezione dovrà essere completata dallo studente come parte dell'Esercizio 1, includendo i comandi per installare le dipendenze ed eseguire l'applicazione e i test).*

---

*Suggerimento: Presta particolare attenzione ai requisiti dell'Esercizio 1 del laboratorio per completare e correggere questo README e gli altri file di configurazione.*