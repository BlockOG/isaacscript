/* eslint-disable isaacscript/format-line-comments */

// THIS CODE WAS AUTOMATICALLY GENERATED.
// DO NOT EDIT THIS FILE BY HAND.
// YOU CAN REGENERATE IT USING:
// yarn run generate:rules

import { completeSentencesJSDoc } from "./rules/complete-sentences-jsdoc";
import { completeSentencesLineComments } from "./rules/complete-sentences-line-comments";
import { enumMemberNumberSeparation } from "./rules/enum-member-number-separation";
import { eqeqeqFix } from "./rules/eqeqeq-fix";
import { formatJSDocComments } from "./rules/format-jsdoc-comments";
import { formatLineComments } from "./rules/format-line-comments";
import { jsdocCodeBlockLanguage } from "./rules/jsdoc-code-block-language";
import { memberOrdering } from "./rules/member-ordering";
import { noConfusingSetMethods } from "./rules/no-confusing-set-methods";
import { noEmptyJSDoc } from "./rules/no-empty-jsdoc";
import { noEmptyLineComments } from "./rules/no-empty-line-comments";
import { noExplicitArrayLoops } from "./rules/no-explicit-array-loops";
import { noExplicitMapSetLoops } from "./rules/no-explicit-map-set-loops";
import { noInvalidDefaultMap } from "./rules/no-invalid-default-map";
import { noLetAny } from "./rules/no-let-any";
import { noObjectAny } from "./rules/no-object-any";
import { noObjectMethodsWithMapSet } from "./rules/no-object-methods-with-map-set";
import { noTemplateCurlyInStringFix } from "./rules/no-template-curly-in-string-fix";
import { noThrow } from "./rules/no-throw";
import { noUnsafePlusplus } from "./rules/no-unsafe-plusplus";
import { noVoidReturnType } from "./rules/no-void-return-type";
import { preferPlusplus } from "./rules/prefer-plusplus";
import { preferPostfixPlusplus } from "./rules/prefer-postfix-plusplus";
import { requireCapitalConstAssertions } from "./rules/require-capital-const-assertions";
import { requireCapitalReadOnly } from "./rules/require-capital-read-only";
import { requireVRegistration } from "./rules/require-v-registration";
import { requireVariadicFunctionArgument } from "./rules/require-variadic-function-argument";
import { strictEnums } from "./rules/strict-enums";

export const rules = {
  "complete-sentences-jsdoc": completeSentencesJSDoc,
  "complete-sentences-line-comments": completeSentencesLineComments,
  "enum-member-number-separation": enumMemberNumberSeparation,
  "eqeqeq-fix": eqeqeqFix,
  "format-jsdoc-comments": formatJSDocComments,
  "format-line-comments": formatLineComments,
  "jsdoc-code-block-language": jsdocCodeBlockLanguage,
  "member-ordering": memberOrdering,
  "no-confusing-set-methods": noConfusingSetMethods,
  "no-empty-jsdoc": noEmptyJSDoc,
  "no-empty-line-comments": noEmptyLineComments,
  "no-explicit-array-loops": noExplicitArrayLoops,
  "no-explicit-map-set-loops": noExplicitMapSetLoops,
  "no-invalid-default-map": noInvalidDefaultMap,
  "no-let-any": noLetAny,
  "no-object-any": noObjectAny,
  "no-object-methods-with-map-set": noObjectMethodsWithMapSet,
  "no-template-curly-in-string-fix": noTemplateCurlyInStringFix,
  "no-throw": noThrow,
  "no-unsafe-plusplus": noUnsafePlusplus,
  "no-void-return-type": noVoidReturnType,
  "prefer-plusplus": preferPlusplus,
  "prefer-postfix-plusplus": preferPostfixPlusplus,
  "require-capital-const-assertions": requireCapitalConstAssertions,
  "require-capital-read-only": requireCapitalReadOnly,
  "require-v-registration": requireVRegistration,
  "require-variadic-function-argument": requireVariadicFunctionArgument,
  "strict-enums": strictEnums,
};
