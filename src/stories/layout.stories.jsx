import React from 'react'
import Layout from '../components/layout'

export default {
  component: Layout,
  title: 'Components/Layout',
}

const Template = (args) => <Layout {...args} />

export const Default = Template.bind({})
Default.args = {
  children: [<h1>&lt;&lt; insert Layout children components&gt;&gt;</h1>],
  meta: {
    title: 'stevenkneiser.com',
    description: 'Another page from my little home on the internet',
  },
}
