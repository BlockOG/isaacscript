import { createRule } from "../utils";

export const noThrow = createRule({
  name: "no-throw",
  meta: {
    type: "problem",
    docs: {
      description: 'Disallows the usage of "throw"',
      recommended: false,
      requiresTypeChecking: false,
    },
    schema: [],
    messages: {
      noThrow:
        'The "throw" keyword is forbidden. Use the "error" function instead.',
    },
  },
  defaultOptions: [],
  create(context) {
    return {
      ThrowStatement(node) {
        context.report({
          node,
          messageId: "noThrow",
        });
      },
    };
  },
});
