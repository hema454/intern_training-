
export interface Quote {
    quote: string;
    author: string;
}

export function formatQuote(data: Quote): string {
    return `"${data.quote}" - ${data.author}`;
}