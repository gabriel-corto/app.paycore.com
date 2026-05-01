interface FormErrorMessageProps {
  message: string | undefined
}

export function FormErrorMessage({ message }: FormErrorMessageProps) {
  return <span className="text-left text-xs text-red-500">{message}</span>
}
