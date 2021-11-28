import React from 'react'
import Footer from '../components/footer'

export default {
  component: Footer,
  title: 'Components/Footer',
}

const Template = function (args) {
  return <Footer {...args} />
}

export const Default = Template.bind({})
Default.args = {}
