import { cva, VariantProps } from 'class-variance-authority'

const buttonClasses = cva(
  [
    'rounded-xl',
    'font-semibold',
    'hover:scale-110',
    'active:scale-100',
    'transition',
    'duration-200',
    'ease-in-out',
  ],
  {
    variants: {
      intent: {
        primary: ['bg-[#323330]', 'text-white', 'hover:bg-[#5b5c59]'],

        secondary: [
          'bg-[#F0DB4F]',
          'text-BLACK',
          'hover:bg-[#F3E272]',
        ],
        text: ['bg-transparent', 'text-black'],
      },
      size: {
        small: ['text-md', 'py-1', 'px-2'],
        medium: ['text-lg', 'px-6', 'py-2'],
        large: ['text-xlg', 'px-8', 'py-4'],
      },
    },
    defaultVariants: {
      intent: 'primary',
      size: 'medium',
    },
  }
)

export interface ButtonProps
  extends React.HtmlHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonClasses> {}

export function Button({
  children,
  className,
  intent,
  size,
  ...props
}: ButtonProps) {
  return (
    <button
      className={buttonClasses({ intent, size, className })}
      {...props}
      type="submit"
    >
      {children}
    </button>
  )
}
