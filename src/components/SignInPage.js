import React from 'react';

function SignInPage() {
  return(
    <main id='sign-in-page'>
      <form>
        <div>
          <label htmlFor='email'>Email</label>
          <input type='text' id='email' name='email'/>
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <input type='password' id='password' name='password'/>
        </div>
        <div>
          <input type='submit' value='Sign In'/>
        </div>
      </form>
    </main>
  )
}

export default SignInPage;