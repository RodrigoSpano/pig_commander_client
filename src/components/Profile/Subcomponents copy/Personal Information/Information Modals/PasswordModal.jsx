"use client";
import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { FaEdit } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useCookies } from "react-cookie";
import { updatePassword } from "@/redux/actions/userActions";

export default function FirstNameModal() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const dispatch = useDispatch();
  const [cookies, setCookies] = useCookies();

  const handleOldPassChange = (event) => {
    setOldPassword(event.target.value);
  };
  const handleNewPassChange = (event) => {
    setNewPassword(event.target.value);
  };

  const handleSave = () => {
    const Passwords = { oldPassword: oldPassword, newPassword: newPassword };
    dispatch(updatePassword({ token: cookies.token, Passwords }));
    onOpenChange(false);
    setOldPassword("");
    setNewPassword("");
  };

  return (
    <div className="relative">
      <FaEdit onClick={onOpen} className="text-gray-400 cursor-pointer" />

      <Modal
        backdrop="opaque"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        classNames={{
          backdrop:
            "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20",
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex gap-1">
                Cambia tu
                <span className="text-regularPink">Contraseña</span>
              </ModalHeader>
              <ModalBody>
                <input
                  type="text"
                  className="w-full border rounded p-2"
                  placeholder="Ingresa tu contraseña actual"
                  value={oldPassword}
                  onChange={handleOldPassChange}
                />
                <input
                  type="text"
                  className="w-full border rounded p-2"
                  placeholder="Ingresa tu nueva contraseña"
                  value={newPassword}
                  onChange={handleNewPassChange}
                />
              </ModalBody>
              <ModalFooter>
                <Button
                  color="gray"
                  variant="text"
                  onPress={onClose}
                  className="text-regularPink bg-transparent mr-2"
                >
                  Cancelar
                </Button>
                <Button
                  className="bg-gradient-to-r from-pink-400 to-pink-600 text-white py-2 rounded-md hover:from-pink-500 hover:to-pink-700 transition-all duration-300"
                  onPress={handleSave}
                >
                  Guardar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
