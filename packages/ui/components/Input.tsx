import { cva, VariantProps } from 'class-variance-authority'

const inputClasses = cva(['rounded-md block shadow-sm border-0'], {
  variants: {
    intent: {
      primary: [
        'ring-1',
        'ring-inset',
        'ring-gray-300',
        'focus:outline-0',
        'focus:ring-2',
        'focus:border-transparent',
        'focus:ring-inset',
        'focus:ring-silver-300',
        'sm:leading-6',
        'w-full',
      ],

      secondary: ['bg-yellow-200', 'px-6', 'py-2', 'text-lg'],
      text: [
        'bg-transparent',
        'placeholder:text-gray-400',
        'text-gray-900',
      ],
    },
    size: {
      small: ['text-sm', 'py-1', 'px-2'],
      medium: ['text-lg', 'px-6', 'py-2'],
      large: ['text-xlg', 'px-8', 'py-4'],
    },
  },
  defaultVariants: {
    intent: 'primary',
    size: 'medium',
  },
})

export interface InputProps
  extends React.HtmlHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputClasses> {}

export function Input({
  children,
  className,
  intent,
  size,
  ...props
}: InputProps) {
  return (
    <input
      className={inputClasses({ intent, size, className })}
      {...props}
    />
  )
}
