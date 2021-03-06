import {
  FORMS_CHANGE,
  FORMS_CLEAR,
  FORMS_LOADING,
  FORMS_TOGGLE
} from '../actions/forms';

/* There are better ways to initialize our forms but this makes it easier to
 * understand for now
 */
const initialState = {
  'topics-search': {
    _loading: false,
    qry: ''
  },
  'topics-new': {
    _loading: false,
    name: ''
  },
  'account-new': {
    _loading: false,
    name: '',
    email: '',
    pass: '',
    pass2: ''
  },
  'account-signin': {
    _loading: false,
    email: '',
    pass: ''
  },
  'resources-comment': {
    _loading: false,
    comment: ''
  },
  'resources-new': {
    _loading: false,
    name: '',
    url: '',
    abstract: ''
  },
  'toggles': { }
};

/* reducer for the form for creating a user */
export default function reducer(state = initialState, action) {
  let sp = null;
  switch (action.type) {
    case FORMS_LOADING:
      sp = Object.assign({}, state);
      sp[action.form] = Object.assign({}, state[action.form], {_loading: action.payload});
      return sp;
    case FORMS_CHANGE:
      sp = Object.assign({}, state);
      sp[action.form] = Object.assign({}, state[action.form], action.payload);
      return sp;
    case FORMS_CLEAR:
      sp = Object.assign({}, initialState[action.form]);
      return Object.assign({}, state, { [action.form]: sp });
    case FORMS_TOGGLE:
      sp = Object.assign({}, state.toggles);
      sp[action.field] = action.value;
      return Object.assign({}, state, { toggles: sp });
    default:
      return state;
  }
}
