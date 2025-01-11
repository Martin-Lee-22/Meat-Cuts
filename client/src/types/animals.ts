export type animal = {
    id: number,
    type: string,
    cuts: cut[]
}

export type cut = {
    id: number,
    title: string,
    shape: string,
    coords: string
}