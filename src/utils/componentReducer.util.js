const initialComponentState = {
  id: null,
  state: false,
  title: '',
  parent: '',
  color: '#0000ff',
  children: [],
};

const componentReducerUtil = {
  addComponent: (state, { title }) => {
    const components = [
      ...state.components,
      {
        ...initialComponentState,
        id: state.totalComponents,
        title,
      },
    ];

    const totalComponents = state.totalComponents + 1;

    return {
      ...state,
      totalComponents,
      components,
    };
  },
  deleteComponent: (state, { index, id }) => {
    const components = [
      ...state.components.slice(0, index),
      ...state.components.slice(index + 1),
    ];

    const totalComponents = state.totalComponents - 1;

    return {
      ...state,
      totalComponents,
      components,
    };
  },
  updateColor: (state, { color, index, id }) => {
    const component = { ...state.components[index], color };
    const components = [
      ...state.components.slice(0, index),
      component,
      ...state.components.slice(index + 1),
    ];

    return {
      ...state,
      components,
    };
  },
};

export default componentReducerUtil;
