import React from 'react'
import NavBar from '../components/navbar'

export default {
  component: NavBar,
  title: 'Components/NavBar',
}

const Template = function (args) {
  return <NavBar {...args} />
}

export const Default = Template.bind({})
Default.args = {}
