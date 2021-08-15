import * as React from 'react'

export default function Embed() {
  const options =
    '{&quot;settings&quot;:{&quot;after_subscribe&quot;:{&quot;action&quot;:&quot;message&quot;,&quot;success_message&quot;:&quot;Success! Now check your email to confirm your subscription.&quot;,&quot;redirect_url&quot;:&quot;&quot;},&quot;analytics&quot;:{&quot;google&quot;:null,&quot;facebook&quot;:null,&quot;segment&quot;:null,&quot;pinterest&quot;:null,&quot;sparkloop&quot;:null,&quot;googletagmanager&quot;:null},&quot;modal&quot;:{&quot;trigger&quot;:&quot;timer&quot;,&quot;scroll_percentage&quot;:null,&quot;timer&quot;:5,&quot;devices&quot;:&quot;all&quot;,&quot;show_once_every&quot;:15},&quot;powered_by&quot;:{&quot;show&quot;:true,&quot;url&quot;:&quot;https://convertkit.com?utm_campaign=poweredby&amp;utm_content=form&amp;utm_medium=referral&amp;utm_source=dynamic&quot;},&quot;recaptcha&quot;:{&quot;enabled&quot;:false},&quot;return_visitor&quot;:{&quot;action&quot;:&quot;hide&quot;,&quot;custom_content&quot;:&quot;&quot;},&quot;slide_in&quot;:{&quot;display_in&quot;:&quot;bottom_right&quot;,&quot;trigger&quot;:&quot;timer&quot;,&quot;scroll_percentage&quot;:null,&quot;timer&quot;:5,&quot;devices&quot;:&quot;all&quot;,&quot;show_once_every&quot;:15},&quot;sticky_bar&quot;:{&quot;display_in&quot;:&quot;top&quot;,&quot;trigger&quot;:&quot;timer&quot;,&quot;scroll_percentage&quot;:null,&quot;timer&quot;:5,&quot;devices&quot;:&quot;all&quot;,&quot;show_once_every&quot;:15}},&quot;version&quot;:&quot;5&quot;}'

  return (
    <>
      <script defer src='https://f.convertkit.com/ckjs/ck.5.js' integrity="sha384-CerXSswRATPxytOhAi+oPx5OdTpYyuwzxb4bZu4bJJe/dlLHcY5OrVjR7fwLGIhB" crossorigin />

      <form
        action='https://app.convertkit.com/forms/2490056/subscriptions'
        className='formkit-form mx-auto'
        method='post'
        data-sv-form='2490056'
        data-uid='e4d58f3a7c'
        data-format='inline'
        data-version='5'
        data-options={options}
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

