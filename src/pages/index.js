import React from 'react'
import PageWrapper from '../components/page-wrapper'
import Counter from '../components/counter'

export default PageWrapper(() => (
  <div>
    <Counter />
    <Counter />
    <Counter />
  </div>
))
