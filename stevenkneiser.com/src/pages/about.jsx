import * as React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

// TODO: position as /start-here from / homepage

export default function AboutPage() {
  return (
    <Layout>
      <h2 id='me-in-10-seconds'>Me in 10 seconds</h2>
      <p>TODO quickbio</p>

      {/*
      <div style="width: 100%; max-width: 1248px; margin-top: 2px; margin-bottom: 4px;">
        <div style="display: flex;">
          <div style="display: flex; width: 100%; border-radius: 3px; border-width: 1px; border-style: solid; border-color: transparent; background: rgba(89, 86, 59, 0.3); padding: 16px 16px 16px 12px;">
            <div>
              <div role="button" aria-disabled="false" tabindex="0" style="user-select: none; transition: background 20ms ease-in 0s; cursor: pointer; display: flex; align-items: center; justify-content: center; height: 24px; width: 24px; border-radius: 3px; flex-shrink: 0;">
                <div style="display: flex; align-items: center; justify-content: center; height: 24px; width: 24px;">
                  <div style="height: 21.6px; width: 21.6px; font-size: 21.6px; line-height: 1.1; margin-left: 0px; color: white;">
                    <span role="image" aria-label="💡" style="font-family: &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, NotoColorEmoji, &quot;Noto Color Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Android Emoji&quot;, EmojiSymbols; line-height: 1em;">💡</span>
                  </div>
                </div>
              </div>
            </div>
            <div style="display: flex; flex-direction: column; min-width: 0px; margin-left: 8px; width: 100%;">
              <div contenteditable="true" spellcheck="true" placeholder="Type something…" data-content-editable-leaf="true" style="max-width: 100%; width: 100%; white-space: pre-wrap; word-break: break-word; caret-color: rgba(255, 255, 255, 0.9); padding-left: 2px; padding-right: 2px;">THIS IS A TEST</div>
            </div>
          </div>
        </div>
      </div>
      */}

      <h2 id='me-in-10-minutes'>Me in 10 minutes</h2>
      <p>TODO</p>

      <figure className='flex my-8 text-4xl bg-gradient-to-r from-yellow-300 to-yellow-50 w-max p-4 rounded items-center'>
        <div className='px-4'>📆 </div>
        <Link to='/now'>what I’m up to /now</Link>
      </figure>
    </Layout>
  )
}
