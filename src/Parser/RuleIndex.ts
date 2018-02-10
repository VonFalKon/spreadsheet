const enum RuleIndex {
  WhiteSpace = 0,
  DoubleQuotes = 1,
  SingleQuotes = 2,
  FormulaName = 3,
  $A1Cell = 6,
  A1Cell = 7,
  FormulaNameSimple = 8,
  Variable = 9,
  SimpleVariable = 10,
  Integer = 11,
  SelfContainedArray = 12,
  DollarSign = 13,
  Ampersand = 14,
  SingleWhitespace = 15,
  Period = 16,
  Colon = 17,
  Semicolon = 18,
  Comma = 19,
  Asterisk = 20,
  ForwardSlash = 21,
  Minus = 22,
  Plus = 23,
  Caret = 24,
  OpenParen = 25,
  CloseParen = 26,
  GreaterThan = 27,
  LessThanSign = 28,
  OpenDoubleQuote = 30,
  OpenSingleQuote = 31,
  ExclamationPoint = 32,
  Equals = 33,
  Percent = 34,
  FullError = 35,
  EndOfString = 36
}

export {
  RuleIndex
}