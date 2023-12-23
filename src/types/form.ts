import { z } from 'zod'
import { formSchema } from '../constants/constants'



export type TFormSchema = z.infer<typeof formSchema>
