## Case for Statens Pensjonskasse: my-pension (MVP)

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

- Kunne velge uttaksår og se estimert årlig pensjon basert på dette

- Responsivt design (mobilvennlig)

## Pensjonsberegning

Applikasjonen bruker en forenklet formel for:

```typescript
estimatedAnnualPension = annualSalaryNOK × 0.66 × pensionFactor
```

Hvor:

```typescript
pensionFactor = serviceYears / 30;
```

Applikasjonen bruker også en forenklet formel for å regne ut pensjon ved ulike uttaksår, hvor det er ±5% per år fra 67 år for alle brukere
(Forenklet modell - Virkelige SPK-regler er mer komplekse)

**Merk**: I produksjon ville jeg hatt beregningene fra backend-API.

## Teknologi

- React

- TypeScript

- Tailwind

- Create React App

- Jest Unit tester
