import React from 'react'
import Preview from '../components/preview'

export default {
  component: Preview,
  title: 'Components/Preview',
}

const Template = function (args) {
  return <Preview {...args} />
}

export const Default = Template.bind({})
Default.args = {
  date: new Date('2020-06-28'),
  href: 'http://localhost:6006/',
  title: '<title>',
  blurb: '<blurb>',
  source: '<source>',
  draft: true,
}
