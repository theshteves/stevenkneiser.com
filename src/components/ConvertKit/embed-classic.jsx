import React from 'react'


export default function Embed() {
  return (
    <>
      <script
        src='https://f.convertkit.com/ckjs/ck.5.js'
        crossOrigin='anonymous'
      />
      <form
        action='https://app.convertkit.com/forms/2490056/subscriptions'
        className='seva-form formkit-form'
        method='post'
        data-sv-form='2490056'
        data-uid='e4d58f3a7c'
        data-format='inline'
        data-version='5'
        data-options='{"settings":{"after_subscribe":{"action":"message","success_message":"Welcome! Now check your email to confirm that you are indeed not an automated disinformation bot 😉","redirect_url":""},"analytics":{"google":null,"facebook":null,"segment":null,"pinterest":null,"sparkloop":null,"googletagmanager":null},"modal":{"trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"powered_by":{"show":true,"url":"https://convertkit.com?utm_campaign=poweredby&amp;utm_content=form&amp;utm_medium=referral&amp;utm_source=dynamic"},"recaptcha":{"enabled":false},"return_visitor":{"action":"hide","custom_content":""},"slide_in":{"display_in":"bottom_right","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"sticky_bar":{"display_in":"top","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15}},"version":"5"}'
        min-width='400 500 600 700 800'
      >
        <div data-style='clean'>
          <ul
            className='formkit-alert formkit-alert-error'
            data-element='errors'
            data-group='alert'
          />
          <div
            data-element='fields'
            data-stacked='false'
            className='seva-fields formkit-fields'
          >
            <div className='formkit-field'>
              <input
                className='formkit-input'
                name='email_address'
                aria-label='Email Address'
                placeholder='Email Address'
                required=''
                type='email'
              />
            </div>
            <button
              data-element='submit'
              className='formkit-submit formkit-submit'
            >
              <div className='formkit-spinner'>
                <div />
                <div />
                <div />
              </div>
              <span className=''>Subscribe</span>
            </button>
          </div>
          <div className='formkit-powered-by-convertkit-container'>
            <a
              href='https://convertkit.com?utm_campaign=poweredby&amp;utm_content=form&amp;utm_medium=referral&amp;utm_source=dynamic'
              data-element='powered-by'
              className='formkit-powered-by-convertkit'
              data-variant='dark'
              target='_blank'
              rel='noopener noreferrer'
            >
              Built with ConvertKit
            </a>
          </div>
        </div>
      </form>
    </>
  )
}
