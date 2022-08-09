export const argTypes = {
  checked: {
    name: 'checked',
    type: { name: 'boolean', required: false },
    table: {
      defaultValue: { summary: false },
    },
  },
  disabled: {
    name: 'disabled',
    type: { name: 'boolean', required: false },
    table: {
      defaultValue: { summary: false },
    },
  },
  invalid: {
    name: 'invalid',
    type: { name: 'boolean', required: false },
    table: {
      defaultValue: { summary: false },
    },
  },
  required: {
    name: 'required',
    type: { name: 'boolean', required: false },
    table: {
      defaultValue: { summary: false },
    },
  },
  modelValue: {
    name: 'modelValue',
    type: { name: 'string', required: false },
  },
  value: {
    name: 'value',
    type: { name: 'string', required: false },
  },
};

export const radioButtonWithFieldsetAndLegendData = [
  { id: 1, label: 'Publiekszaken', name: 'publiekszaken' },
  { id: 2, label: 'Wijkservicecentrum Vleuten - De Meern', name: 'wijkservicecentrum-vleuten-de-meern' },
];
