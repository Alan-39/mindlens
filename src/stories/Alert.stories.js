import Alert from '../components/Alert.vue';

export default {
  component: Alert,
}

const titleSample = "A short descriptive header";
const contentSample = "This is a paragraph of information with additional supporting detail or links to help the user understand what they should do."
const action = "Action";

export const AllInfo = {
  render: (args) => ({
    components: { Alert },
    setup() {
      return { args };
    },
    template: '<Alert v-bind="args" />',
  }),
  args: {
    color: 'info',
    type: 'all',
    title: titleSample,
    content: contentSample,
    action: action,
    actionSecondary: action
  },
}
export const AllError = {
  render: (args) => ({
    components: { Alert },
    setup() {
      return { args };
    },
    template: '<Alert v-bind="args" />',
  }),
  args: {
    color: 'error',
    type: 'all',
    title: titleSample,
    content: contentSample,
    action: action,
    actionSecondary: action
  },
}
export const AllWarning = {
  render: (args) => ({
    components: { Alert },
    setup() {
      return { args };
    },
    template: '<Alert v-bind="args" />',
  }),
  args: {
    color: 'warning',
    type: 'all',
    title: titleSample,
    content: contentSample,
    action: action,
    actionSecondary: action
  },
}
export const AllSuccess = {
  render: (args) => ({
    components: { Alert },
    setup() {
      return { args };
    },
    template: '<Alert v-bind="args" />',
  }),
  args: {
    color: 'success',
    type: 'all',
    title: titleSample,
    content: contentSample,
    action: action,
    actionSecondary: action
  },
}

export const ContentOnlyInfo = {
  render: (args) => ({
    components: { Alert },
    setup() {
      return { args };
    },
    template: '<Alert v-bind="args" />',
  }),
  args: {
    color: 'info',
    type: 'content-only',
    content: titleSample,
  },
}
export const ContentOnlyError = {
  render: (args) => ({
    components: { Alert },
    setup() {
      return { args };
    },
    template: '<Alert v-bind="args" />',
  }),
  args: {
    color: 'error',
    type: 'content-only',
    content: titleSample,
  },
}
export const ContentOnlyWarning = {
  render: (args) => ({
    components: { Alert },
    setup() {
      return { args };
    },
    template: '<Alert v-bind="args" />',
  }),
  args: {
    color: 'warning',
    type: 'content-only',
    content: titleSample,
  },
}
export const ContentOnlySuccess = {
  render: (args) => ({
    components: { Alert },
    setup() {
      return { args };
    },
    template: '<Alert v-bind="args" />',
  }),
  args: {
    color: 'success',
    type: 'content-only',
    content: titleSample,
  },
}

export const TitleContentInfo = {
  render: (args) => ({
    components: { Alert },
    setup() {
      return { args };
    },
    template: '<Alert v-bind="args" />',
  }),
  args: {
    color: 'info',
    type: 'title-content',
    title: titleSample,
    content: contentSample,
  },
}
export const TitleContentError = {
  render: (args) => ({
    components: { Alert },
    setup() {
      return { args };
    },
    template: '<Alert v-bind="args" />',
  }),
  args: {
    color: 'error',
    type: 'title-content',
    title: titleSample,
    content: contentSample,
  },
}
export const TitleContentWarning = {
  render: (args) => ({
    components: { Alert },
    setup() {
      return { args };
    },
    template: '<Alert v-bind="args" />',
  }),
  args: {
    color: 'warning',
    type: 'title-content',
    title: titleSample,
    content: contentSample,
  },
}
export const TitleContentSuccess = {
  render: (args) => ({
    components: { Alert },
    setup() {
      return { args };
    },
    template: '<Alert v-bind="args" />',
  }),
  args: {
    color: 'success',
    type: 'title-content',
    title: titleSample,
    content: contentSample,
  },
}

export const TitleOnlyInfo = {
  render: (args) => ({
    components: { Alert },
    setup() {
      return { args };
    },
    template: '<Alert v-bind="args" />',
  }),
  args: {
    color: 'info',
    type: 'title-only',
    title: titleSample,
  },
}
export const TitleOnlyError = {
  render: (args) => ({
    components: { Alert },
    setup() {
      return { args };
    },
    template: '<Alert v-bind="args" />',
  }),
  args: {
    color: 'error',
    type: 'title-only',
    title: titleSample,
  },
}
export const TitleOnlyWarning = {
  render: (args) => ({
    components: { Alert },
    setup() {
      return { args };
    },
    template: '<Alert v-bind="args" />',
  }),
  args: {
    color: 'warning',
    type: 'title-only',
    title: titleSample,
  },
}
export const TitleOnlySuccess = {
  render: (args) => ({
    components: { Alert },
    setup() {
      return { args };
    },
    template: '<Alert v-bind="args" />',
  }),
  args: {
    color: 'success',
    type: 'title-only',
    title: titleSample,
  },
}