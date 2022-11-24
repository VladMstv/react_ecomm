export type OptionalProps<T extends object> = NonNullable<
	{
		[P in keyof T]: T extends Record<P, T[P]> ? never : P
	}[keyof T]
>

export type OnlyOptionalProps<T extends object> = {
 [P in OptionalProps<T>]: T[P]
}

export type OmitOptionalProps<T extends object> = Omit<T, OptionalProps<T>>

export type OnlyRequiredProps<T extends object> = OmitOptionalProps<T>