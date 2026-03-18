## Case for Statens Pensjonskasse, my-pension (MVP)

Dette er en enkel nettside for å vise estimert årlig pensjon fra SPK, og den er bygget med React, TypeScript og Tailwind.

Målet med nettsiden er at et medlem kan få en rask og enkel oversikt og estimat for sin årlige pensjon fra Statens Pensjonskasse.

## Kjør lokalt

Start utviklingsserveren fra prosjektmappen:

### `npm install`

### `npm start`

Åpne deretter i nettleseren:

http://localhost:3000

## Funksjonalitet

- Kunne velge en demo-bruker og få et estimat av årlig pensjon

- Vise frem estimert årlig pensjon med beregning basert på:
  - Årslønn

  - Stillingsprosent

  - Ansettelsesstart (Maksimalt 30 års opptjening)

- Responsivt design (mobilvennlig)

## Pensjonsberegning

Applikasjonen bruker en forenklet formel:

estimatedAnnualPension = annualSalaryNOK × 0.66 × pensionFactor

Hvor:

pensionFactor = serviceYears / 30

Merk: I produksjon ville jeg hatt denne beregningen fra backend-API.

## Teknologi

- React

- TypeScript

- Tailwind

- Create React App

## Kommende funksjoner

- Unit tester

- Valg av uttaksår

- Eventuelt mer avanserte beregninger med uttaksår

- Forbedret UI/UX

## Status

MVP – under utvikling
