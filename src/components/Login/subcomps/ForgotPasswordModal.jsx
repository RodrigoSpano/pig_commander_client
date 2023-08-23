import React, { useState } from 'react'
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input} from "@nextui-org/react";
import axios from 'axios';
import Swal from 'sweetalert2';

function ForgotPasswordModal() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const [email, setEmail] = useState('')
  const [notification, setNotification] = useState(false)

  const handelSubmitForgotPassword = async () => {
    await axios(`${process.env.NEXT_PUBLIC_API_URI}/recovery/forgot-password/${email}`)
      .then(() => {
        setNotification(true)
      })
      .catch(err => {
        setNotification(false)
        Swal.fire({
          icon: 'error',
          title: err.response.data.error
        })
      })
  }

  return (
    <div>
      <button type='button' onClick={onOpen}className="text-regularPink font-medium text-sm cursor-pointer">Forgot your password ?</button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={false}>
      <ModalContent >
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Forgot your password?</ModalHeader>
              <ModalBody>
                <div>
                  <span>Write your Email associated with your account</span>
                  {/* <input type='text' value={email} name='email' placeholder='percy@jackson.com' /> */}
                  <Input
                    isRequired
                    type="email"
                    label="Email"
                    variant="underlined"
                    className="max-w-xs"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {notification ? <span className='text-green-400 font-bold'>Mail sent succesfully</span> : null}
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="primary" variant="light" onClick={handelSubmitForgotPassword}>
                  Submit
                </Button>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  )
}

export default ForgotPasswordModal