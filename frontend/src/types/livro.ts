export type Livro = {
    id: number;
    title: string;
    score: number;
    count: number;
    image: string;
}

export type LivroPage = {
    content: Livro[];
    last: boolean;
    totalPages: number;
    totalElements: number;
    size: number;
    number: number;
    first: boolean;
    numberOfElements: number;
    empty: boolean;
}