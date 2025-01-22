const URL = 'https://31.javascript.htmlacademy.pro/kekstagram';

const Routes = {
  GET_DATA: '/data',
  SEND_DATA: ''
};

const Methods = {
  GET: 'GET',
  POST: 'POST'
};

const ERROR_SHOW_TIME = 5000;

const Steps = {
  VALUE: 25,
  FIRST: 1,
  LAST: 4,
  DEFAULT: 4
};

const Filters = {
  CHROME: {
    name: 'grayscale',
    level: '1',
    noUiSliderSettings: {
      range: {
        min: 0,
        max: 1
      },
      start: 1,
      step: 0.1
    }
  },
  SEPIA: {
    name: 'sepia',
    level: '1',
    noUiSliderSettings: {
      range: {
        min: 0,
        max: 1
      },
      start: 1,
      step: 0.1
    }
  },
  MARVIN: {
    name: 'invert',
    level: '100%',
    noUiSliderSettings: {
      range: {
        min: 0,
        max: 100
      },
      start: 100,
      step: 1
    }
  },
  PHOBOS: {
    name: 'blur',
    level: '3px',
    noUiSliderSettings: {
      range: {
        min: 0,
        max: 3
      },
      start: 3,
      step: 0.1
    }
  },
  HEAT: {
    name: 'brightness',
    level: '3',
    noUiSliderSettings: {
      range: {
        min: 1,
        max: 3
      },
      start: 3,
      step: 0.1
    }
  }
};

export {
  ERROR_SHOW_TIME,
  Filters,
  Methods,
  Routes,
  Steps,
  URL
};
