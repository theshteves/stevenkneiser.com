import React from 'react'
import NavBar from '../components/navbar'

export default {
  component: NavBar,
  title: 'Components/NavBar',
}

const Template = (args) => <NavBar {...args} />

export const Default = Template.bind({})
Default.args = {}
