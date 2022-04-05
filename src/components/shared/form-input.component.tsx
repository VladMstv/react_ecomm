import { HTMLElementValueType } from 'models/util/input-value-type'
import React from 'react'

interface FormInputProps {
	handleChange: React.ChangeEventHandler<HTMLInputElement>
	label: string
	id: string
	type?: string
	required?: boolean
	value: HTMLElementValueType<HTMLInputElement>
	name: string
}

function FormInput(props: FormInputProps) {
	const { handleChange, label, id, type, required, value, name } = props
	return (
		<div className='form-group relative my-5'>
			<input
				className='form-input bg-none bg-white text-currentColor text-md p-3 pl-2 block w-full 
                           border-0 border-b my-3 outline-0 ring-0 peer'
				onChange={handleChange}
				type={type || 'text'}
				required={required}
				name={name}
				value={value}
				id={id}
			/>
			{label ? (
				<label
					className={`form-label absolute  left-2 block peer-focus:-top-3 peer-focus:text-sm transition-all ${
						value ? '-top-3 text-sm' : 'top-3'
					} `}
					htmlFor={id}
				>
					{label}
				</label>
			) : null}
		</div>
	)
}

FormInput.defaultProps = {
	type: 'text',
	required: false,
} as Partial<FormInputProps>

export default FormInput
