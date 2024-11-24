type animal = {
    id: number,
    type: string,
    cuts: cut[]
}

type cut = {
    cut: string,
    path: string
}

export type {animal, cut}