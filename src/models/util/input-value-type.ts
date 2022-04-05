import { DetailedHTMLProps, InputHTMLAttributes } from 'react'

// get the HTMLInputElement
export type HTMLElementValueType<T = HTMLElement> = DetailedHTMLProps<
	InputHTMLAttributes<T>,
	T
>['value']
