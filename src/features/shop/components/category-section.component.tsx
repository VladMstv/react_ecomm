import React, { PropsWithChildren } from 'react'
import { Link } from 'react-router-dom'
import { LoadingSpinner } from 'shared/components/loading-spinner/loading-spinner.component'
import { OnlyOptionalProps } from 'shared/types/type-utils'

type CategorySectionProps = {
	title: string
	titleIsLink?: boolean
	isLoading?: boolean
}

const defaultProps: OnlyOptionalProps<CategorySectionProps> = {
	titleIsLink: false,
	isLoading: false,
}

export default function CategorySection(
	props: PropsWithChildren<CategorySectionProps>
) {
	const { isLoading, title, titleIsLink, children } = props

	return (
		<div className='mb-10'>
			{titleIsLink ? (
				<Link
					className='text-3xl font-semibold text-center w-full mb-10'
					to={title.toLowerCase()}
				>
					{title.toUpperCase()}
				</Link>
			) : (
				<h2 className='text-3xl font-semibold text-center w-full mb-10'>
					{title.toUpperCase()}
				</h2>
			)}
			{isLoading ? (
				<LoadingSpinner />
			) : (
				<div className='flex gap-5 justify-evenly md:justify-start flex-wrap'>
					{children}
				</div>
			)}
		</div>
	)
}

CategorySection.defaultProps = defaultProps
