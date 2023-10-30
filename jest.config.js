export default {
  transform: {
    "^.+\\.js$": "babel-jest",
    "^.+\\.jsx?$": "babel-jest"
  },
  testMatch: ["**/__tests__/**/*.test.(js|jsx|ts|tsx)"],
  testPathIgnorePatterns: ["/node_modules/", "/src/assets/"],
  coveragePathIgnorePatterns: ["/node_modules/", "/src/assets/"],
  moduleNameMapper: {
    "\\.(css|scss)$": "<rootDir>/__mocks__/styleMock.js"
  },
  collectCoverage: true,
  coverageReporters: ["text", "cobertura"]
};
