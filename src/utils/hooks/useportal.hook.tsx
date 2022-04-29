import { useEffect, useRef } from 'react'

function createRootElement(id: string) {
	const rootContainer = document.createElement('div')
	rootContainer.setAttribute('id', id)
	return rootContainer
}

function addRootElement(element: HTMLDivElement) {
	document.body.insertBefore(
		element,
		document.body.lastElementChild!.nextElementSibling
	)
}

function usePortal(id: string) {
	let rootElemRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		// check for existing parent target element to append to
		const existingParent = document.querySelector<HTMLDivElement>(`#${id}`)

		// it's either an existing one or we create a new one with provided `id`
		const parentElem = existingParent || createRootElement(id)

		// if no existing parent -> add it to the DOM
		if (!existingParent) {
			addRootElement(parentElem)
		}

		// append element to the parent target
		parentElem.appendChild(rootElemRef.current!)

		return () => {
			rootElemRef.current?.remove()
			if (!parentElem.childElementCount) {
				parentElem.remove()
			}
		}
	}, [id])

	// initialize ref lazily for it not to be initialized every render
	function getRootElement() {
		if (!rootElemRef.current) {
			rootElemRef = useRef(document.createElement('div'))
		}
		return rootElemRef.current!
	}
	return getRootElement()
}

export default usePortal
