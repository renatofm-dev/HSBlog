import { buildLegacyTheme } from "sanity"

const props = {
  '--my-white': '#fefefe',
  '--my-black': '#1a1a1a',
  '--hsb-brand': '#142D49',


  '--my-grey': '#6A7079',
  '--my-yellow': '#f4b400',
  '--my-green': '#0f9d58',
  '--my-red': '#db4437'
}

export const myTheme = buildLegacyTheme({
  '--gray-base': '#666',

  '--component-bg': props['--my-black'],
  '--component-text-color': props['--my-white'],

  // Brand
  '--brand-primary': props['--hsb-brand'],

  //Default Button
  '--default-button-color': '#666',
  '--default-button-primary-color': props['--my-yellow'],
  '--default-button-success-color': props['--my-green'],
  '--default-button-warning-color': props['--my-yellow'],
  '--default-button-danger-color': props['--my-red'],

  /* State */
  '--state-info-color': props['--hsb-brand'],
  '--state-success-color': props['--my-green'],
  '--state-warning-color': props['--my-yellow'],
  '--state-danger-color': props['--my-red'],

  /* Navbar */
  '--main-navigation-color': props['--my-black'],
  '--main-navigation-color--inverted': props['--my-white'],

  '--focus-color': props['--my-yellow'],


})