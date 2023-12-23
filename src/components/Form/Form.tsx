import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { twMerge } from 'tailwind-merge'
import { toast } from 'react-hot-toast'
import { TFormSchema } from '../../types/form'
import { formSchema } from '../../constants/constants'
import { CollapsedElem } from '../ui/CollapsedElem/CollapsedElem'
import { Button, ButtonTheme } from '../ui/Button/Button'

interface FormProps {
  onCloseModal?: () => void
  className?: string
}

export const Form = ({ className, onCloseModal }: FormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<TFormSchema>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = async (data: TFormSchema) => {
    try {
      const postData = await fetch(
        'https://sonplaceholder.typicode.com/users',
        {
          method: 'POST',
          body: JSON.stringify(data),
        }
      )

      const res = await postData.json()
      if (!res.ok)
        throw new Error(`Failed to fetch. Error status ${res.status}`)
      reset()
      toast.success('Success')
      onCloseModal?.()

      return postData
    } catch (error) {
      if (error instanceof Error) toast.error(error.message)
    }
  }

  return (
    <form
      autoComplete="off"
      onSubmit={handleSubmit(onSubmit)}
      className={twMerge(
        ' min-w-[300px] max-w-[570px] rounded-md p-8 bg-black phone:p-4 phone:pt-8',
        className
      )}
    >
      <fieldset
        disabled={isSubmitting}
        className="bg-inherit border-0 outline-none m-0 p-0 grid grid-cols-2 gap-2 phone:flex phone:flex-col"
      >
        <label>
          <input
            className="w-full bg-black p-2 border-2 border-typography outline-none focus:ring-2 ring-fuchsia-900 transition-color duration-200 ease "
            type="text "
            placeholder="Name"
            {...register('name')}
          />
          <CollapsedElem condition={Boolean(errors.name)}>
            {errors.name && (
              <span className="text-red-600 pt-1 ">{errors.name.message}</span>
            )}
          </CollapsedElem>
        </label>

        <label className="">
          <input
            className="w-full bg-black p-2 border-2 border-typography outline-none focus:ring-2 ring-fuchsia-900 transition-color duration-200 ease"
            type="email "
            placeholder="Email"
            {...register('email')}
          />
          <CollapsedElem condition={Boolean(errors.email)}>
            {errors.email && (
              <span className="text-red-600 pt-1 ">{errors.email.message}</span>
            )}
          </CollapsedElem>
        </label>

        <label className="col-span-2">
          <input
            className="w-full bg-black p-2 border-2 border-typography outline-none focus:ring-2 ring-fuchsia-900  transition-color duration-200 ease "
            type="text"
            placeholder="Title"
            {...register('title')}
          />
          <CollapsedElem condition={Boolean(errors.title)}>
            {errors.title && (
              <span className="text-red-600 pt-1 ">{errors.title.message}</span>
            )}
          </CollapsedElem>
        </label>

        <label className="col-span-2">
          <textarea
            className="w-full bg-black p-2 border-2 border-typography  outline-none focus:ring-2 ring-fuchsia-900  transition-color duration-200 ease resize-none"
            placeholder="Message"
            rows={5}
            max={200}
            {...register('message')}
          ></textarea>
          <CollapsedElem condition={Boolean(errors.message)}>
            {errors.message && (
              <span className="text-red-600 pt-1 ">
                {errors.message.message}
              </span>
            )}
          </CollapsedElem>
        </label>

        <Button
          className={`inline-block hover:-translate-y-1 ${
            isSubmitting && 'cursor-wait'
          }`}
          theme={ButtonTheme.PRIMARY}
        >
          {isSubmitting ? 'Loading...' : 'Send'}
        </Button>
      </fieldset>
    </form>
  )
}
