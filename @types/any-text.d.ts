declare module 'any-text' {
  export function getText(filePath: string): Promise<string>
}

export type Maybe<T> = T | null | undefined
