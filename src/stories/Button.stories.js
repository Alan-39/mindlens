import Button from '../components/Button.vue';

export default {
  component: Button,
};

export const PrimaryLeftIcon = {
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: '<Button v-bind="args" />',
  }),
  args: {
    color: 'info',
    isSecondary: 'false',
    type: 'left-icon-text',
    action: 'Action'
  },
};

export const PrimaryRightIcon = {
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: '<Button v-bind="args" />',
  }),
  args: {
    color: 'info',
    isSecondary: 'false',
    type: 'right-icon-text',
    action: 'Action'
  },
};

export const PrimaryIconOnly = {
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: '<Button v-bind="args" />',
  }),
  args: {
    color: 'info',
    isSecondary: 'false',
    type: 'icon-only',
    action: 'Action'
  },
};

export const PrimaryTextOnly = {
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: '<Button v-bind="args" />',
  }),
  args: {
    color: 'info',
    isSecondary: 'false',
    type: 'text-only',
    action: 'Action'
  },
};

export const SecondaryLeftIcon = {
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: '<Button v-bind="args" />',
  }),
  args: {
    color: 'info',
    isSecondary: 'true',
    type: 'left-icon-text',
    action: 'Action'
  },
};

export const SecondaryRightIcon = {
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: '<Button v-bind="args" />',
  }),
  args: {
    color: 'info',
    isSecondary: 'true',
    type: 'right-icon-text',
    action: 'Action'
  },
};

export const SecondaryIconOnly = {
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: '<Button v-bind="args" />',
  }),
  args: {
    color: 'info',
    isSecondary: 'true',
    type: 'icon-only',
    action: 'Action'
  },
};

export const SecondaryTextOnly = {
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: '<Button v-bind="args" />',
  }),
  args: {
    color: 'info',
    isSecondary: 'true',
    type: 'text-only',
    action: 'Action'
  },
};