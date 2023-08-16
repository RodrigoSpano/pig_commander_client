import axios from "axios"

const { default: Swal } = require("sweetalert2")

export const createAutomateTransaction = async (info, token) => {
  try {
    const { data } = await axios.post('/auto/transaction', info, { headers: { Authorization: token } })
    console.log(data)
    return data
  } catch (error) {
    if (error.response.status === 302) {
      Swal.fire({
        icon: 'info',
        title: error.response.data.message
      })
    } else {
      Swal.fire({
        icon: 'error',
        title: error.message
      })
    }
  }
}