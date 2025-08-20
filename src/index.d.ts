// TypeScript Declaration File for LaTeX.js

/**
 * Parses a LaTeX document and returns a generator for creating the output document.
 * @param latex - The LaTeX source document.
 * @param options - Options for the parser, including the generator instance.
 * @returns An instance of the HtmlGenerator.
 */
export function parse(latex: string, options: { generator: HtmlGenerator }): HtmlGenerator;

/**
 * Represents a syntax error during parsing.
 */
export class SyntaxError extends Error {
    constructor(message: string);
}

/**
 * Options for the HtmlGenerator class.
 */
export interface HtmlGeneratorOptions {
    documentClass?: string;
    CustomMacros?: Function;
    hyphenate?: boolean;
    languagePatterns?: Record<string, unknown>;
    styles?: string[];
}

/**
 * A class for generating HTML from LaTeX documents.
 */
export class HtmlGenerator {
    constructor(options: HtmlGeneratorOptions);

    /**
     * Resets the generator for reuse.
     */
    reset(): void;

    /**
     * Returns the full DOM HTMLDocument representation of the LaTeX source.
     * @param baseURL - The base URL for assets.
     * @returns The HTMLDocument.
     */
    htmlDocument(baseURL?: string): Document;
}
