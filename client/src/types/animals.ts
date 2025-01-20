export type animal = {
    id: number,
    type: string,
    cuts: cut[],
    viewBox: string
}

export type cut = {
    id: number,
    cut: string,
    coords: string
}