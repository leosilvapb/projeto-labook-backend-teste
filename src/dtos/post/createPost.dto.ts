import z from 'zod'

export interface CreatePostInputDTO {
    content: string,
    token: string
}

export type CreatePostOutputDTO = undefined

export const CreatPostSchema = z.object({
    content: z.string().min(2),
    token: z.string().min(1)
})