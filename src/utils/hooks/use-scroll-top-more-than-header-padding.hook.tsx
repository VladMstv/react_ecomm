
import { HeaderInitialPaddingTopRem } from 'components/layout/header/header.styles'
import { useCallback, useEffect, useMemo, useState } from 'react'

const useIsScrollTopMoreThanHeaderPadding = () => {
	const headerTopPadding = useMemo(() => 14 * HeaderInitialPaddingTopRem, [])

	const [isScrollTopMoreThanHeaderPadding, setIsScrollTopMoreThanHeaderPadding] =
		useState(false)

	const scrollListener = useCallback(() => {
		const isMore = window.scrollY > headerTopPadding

		setIsScrollTopMoreThanHeaderPadding(isMore)
	}, [headerTopPadding])

	useEffect(() => {
		document.addEventListener('scroll', scrollListener)

		return () => {
			document.removeEventListener('scroll', scrollListener)
		}
	}, [scrollListener])

	return isScrollTopMoreThanHeaderPadding
}

export default useIsScrollTopMoreThanHeaderPadding
