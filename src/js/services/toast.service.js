import { toast } from 'react-toastify'
const defaultOptions = {
  autoClose: 2000,
  hideProgressBar: true
}

// types: success, info, warn, error
const toastService = (type, message, options) => {
  const toastOptions = !options ? defaultOptions : options
  toast[type](message, toastOptions)
}

export { toastService }
