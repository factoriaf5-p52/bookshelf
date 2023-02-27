import { Outlet } from 'react-router-dom'
import { Navigation } from '../navigation'

type Props = {}

export const PageContainer = (props: Props) => {
    return (
        <>
            <header>
                <Navigation />
            </header>
            <main>
                <Outlet />
            </main>
        </>
    )
}
