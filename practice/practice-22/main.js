import SmartCountrySelection from './smartcountrySelection.js';

let onCountrySelectionChange = function (selectedCountry) {
  alert(`Selected country is "${selectedCountry.name.common}"`);
};
let countrySelection = new SmartCountrySelection(
  document.querySelector('#app'),
  onCountrySelectionChange
);
