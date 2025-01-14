export type animal = {
    id: number,
    type: string,
    cuts: cut[]
}

export type cut = {
    id: number,
    cut: string,
    coords: string
}