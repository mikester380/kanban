import {
  AuthApiError,
  AuthRetryableFetchError,
} from '@supabase/supabase-js'

function getErrorMessage(error) {
  let code = error.code

  if (
    error instanceof AuthRetryableFetchError &&
    error.message === 'Failed to fetch'
  ) {
    return 'An error occured. Check your internet connection.'
  }

  if (
    error instanceof AuthApiError &&
    code === 'invalid_credentials'
  ) {
    return 'Invalid email or password.'
  }

  // if the error message is of no help to the user, use this.
  return 'An error occured. Try again.'
}

export { getErrorMessage }
