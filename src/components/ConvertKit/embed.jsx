import React from 'react'

export default function Embed() {
  const options =
    '{"settings":{"after_subscribe":{"action":"message","success_message":"Success! Now check your email to confirm that this is you.","redirect_url":"https://stevenkneiser.com/thanks"},"analytics":{"google":null,"facebook":null,"segment":null,"pinterest":null,"sparkloop":null,"googletagmanager":null},"modal":{"trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"powered_by":{"show":false,"url":""},"recaptcha":{"enabled":false},"return_visitor":{"action":"hide","custom_content":""},"slide_in":{"display_in":"bottom_right","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"sticky_bar":{"display_in":"top","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15}},"version":"5"}'

  return (
    <>
      <script
        src='https://f.convertkit.com/ckjs/ck.5.js'
        integrity='sha384-CerXSswRATPxytOhAi+oPx5OdTpYyuwzxb4bZu4bJJe/dlLHcY5OrVjR7fwLGIhB'
        crossOrigin='anonymous'
      />

      <form
        action='https://app.convertkit.com/forms/2490056/subscriptions'
        className='seva-form formkit-form mx-auto flex justify-center'
        method='post'
        data-uid='e4d58f3a7c'
        data-format='inline'
        data-version='5'
        data-options={options}
        style={{ minWidth: '400 500 600 700 800' }}
      >
        <div className='max-w-md'>
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
                  className='w-full px-3 py-3 rounded text-md text-center text-yellow-900 bg-white placeholder-gray-400 border-4 border-yellow-900 shadow focus:outline-none focus:border-gray-400 font-bold'
                  name='email_address'
                  aria-label='Email Address'
                  placeholder='Email Address'
                  required=''
                  type='email'
                />
              </div>

              <button
                type='submit'
                data-element='submit'
                className='formkit-submit'
              >
                <div className='formkit-spinner'>
                  <div />
                  <div />
                  <div />
                </div>

                <span className='font-bold bg-yellow-900'>
                  &gt;&gt; Send Me The Best &lt;&lt;
                </span>
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  )
}
