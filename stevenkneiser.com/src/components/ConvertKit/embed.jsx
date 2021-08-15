import * as React from 'react'

export default function Embed() {
  return (
    <>
      <script defer src='https://f.convertkit.com/ckjs/ck.5.js' integrity="sha384-CerXSswRATPxytOhAi+oPx5OdTpYyuwzxb4bZu4bJJe/dlLHcY5OrVjR7fwLGIhB" crossOrigin="true"></script>

      <form
        action='https://app.convertkit.com/forms/2490056/subscriptions'
        className='seva-form formkit-form mx-auto'
        method='post'
        data-sv-form='2490056'
        data-uid='e4d58f3a7c'
        data-format='inline'
        data-version='5'
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
            <div
              className='formkit-field'
              style={{ backgroundColor: '#78350f' }}
            >
              <input
                className='border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full'
                name='email_address'
                aria-label='Email Address'
                placeholder='Email Address'
                required=''
                type='email'
              />
            </div>

            <button
              type='button'
              data-element='submit'
              className='formkit-submit'
            >
              <div className='formkit-spinner'>
                <div />
                <div />
                <div />
              </div>

              <span className='font-bold bg-yellow-900'>Subscribe</span>
            </button>
          </div>
        </div>
      </form>
    </>
  )
}

