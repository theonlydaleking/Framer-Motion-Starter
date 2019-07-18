import React, { lazy, Component, Suspense } from 'react'
import './App.css'
import { ScaleExample } from './Basic-start'
import { importMDX } from 'mdx.macro'

const Content = lazy(() => importMDX('../README.mdx'))
class App extends Component {
  render() {
    return (
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          something
          <Content />
        </Suspense>
      </div>
    )
  }
}
export default App
