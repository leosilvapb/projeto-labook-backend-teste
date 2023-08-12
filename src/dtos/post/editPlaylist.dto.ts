import z from 'zod'

export interface EditPostinputDTO {
    content: string
    token: string,
    idToEdit: string

}

export interface EditPostOutputDTO {

}

export const EditPostSchema = z.object({
    content: z.string().min(2),
    token: z.string().min(1),
    idToEdit: z.string().min(1)
})

