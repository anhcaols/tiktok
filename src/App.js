import { Fragment } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { publicRoutes } from '~/routes'
import { DefaultLayout, HeaderOnly } from '~/components/Layout'

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        let Layout = DefaultLayout
                        if(route.layout === null) {
                            Layout = Fragment
                        } else if(route.layout === HeaderOnly) {
                            Layout = HeaderOnly
                        }
                        const Page = route.component
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        )
                    })}
                </Routes>
            </div>
        </Router>
    )
}

export default App
