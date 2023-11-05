/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  dsa: {
    'dsa-level-0': {
     'expressions': [
      'dsa/dsa-level-0/expressions/expressions-i',
      'dsa/dsa-level-0/expressions/expressions-ii',
      'dsa/dsa-level-0/expressions/expressions-iii'
     ],
     'tuples': [
      'dsa/dsa-level-0/tuples/tuples-i',
     ]
    },
    'dsa-level-1': {
      'expressions': [
       'dsa/dsa-level-1/expressions/expressions-i',
       'dsa/dsa-level-1/expressions/expressions-ii',
       'dsa/dsa-level-1/expressions/expressions-iii'
      ],
      'tuples': [
       'dsa/dsa-level-1/tuples/tuples-i',
      ]
     },
     'dsa-level-2': {
      'expressions': [
        'dsa/dsa-level-2/expressions/expressions-i'
      ]
     },
     'dsa-level-3': {
      'expressions': [
        'dsa/dsa-level-3/expressions/expressions-i'
      ]
     },
     'dsa-level-4': {
      'expressions': [
        'dsa/dsa-level-4/expressions/expressions-i'
      ]
     }
  },
  ml: {
    'ai-ml-0': {
      'sample': [
        'ml/ai-ml-0/sample/sample-i'
      ]
    },
    'ai-ml-1': {
      'sample': [
        'ml/ai-ml-1/sample/sample-i'
      ]
    }
  },

  /**Support routing */
  support: {
    'support': [
      'support/support'
    ]
  }
};

module.exports = sidebars;
