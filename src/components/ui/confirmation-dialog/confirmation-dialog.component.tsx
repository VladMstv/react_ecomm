import { createPortal } from 'react-dom'
import usePortal from 'utils/hooks/useportal.hook'

function Dialog(props: { children: JSX.Element[] }) {
	const target = usePortal('modal')
	const { children } = props

	const portal = createPortal(children, target)

	return <div className='portal'>
        
    </div>
}
