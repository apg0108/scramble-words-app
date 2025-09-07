declare module '@paunovic/random-words' {
  export function initialize(opts?: { countryCode?: 'es' | 'us' | 'rs'; variation?: 'cyrillic' }): {
    word(): string;
    words(howMany?: number): Array<string>;
  };
}