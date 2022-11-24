import { useEffect, useRef } from 'react'

function addToDOM(element: HTMLDivElement) {
	document.body.insertBefore(
		element,
		document.body.lastElementChild!.nextElementSibling
	)
}

function createTarget(id: string) {
	const element = document.createElement('div')
	element.setAttribute('id', id)
	addToDOM(element)
	return element
}

function usePortalTarget(id: string) {
	let targetElemRef = useRef<HTMLElement>(null)

	useEffect(
		() => () => {
			targetElemRef.current?.remove()
		},
		[id]
	)

	// initialize ref lazily for it not to be initialized every render
	const getTargetElement = () => {
		if (!targetElemRef.current) {
			const existingTargetEl = document.querySelector<HTMLDivElement>(`#${id}`)
			const targetEl = existingTargetEl || createTarget(id)
			// eslint-disable-next-line react-hooks/rules-of-hooks
			targetElemRef = useRef(targetEl)
		}
		return targetElemRef.current!
	}
	return getTargetElement()
}

export default usePortalTarget
