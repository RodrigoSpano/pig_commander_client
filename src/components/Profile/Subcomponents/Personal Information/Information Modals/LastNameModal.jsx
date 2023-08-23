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
import { updateUser } from "@/redux/actions/userActions";

export default function LastNameModal() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [editedName, setEditedName] = useState("");

  const dispatch = useDispatch();
  const [cookies, setCookies] = useCookies();

  const handleNameChange = (event) => {
    setEditedName(event.target.value);
  };

  const handleSave = () => {
    dispatch(updateUser({ token: cookies.token, lastname: editedName }));
    onOpenChange(false);
    setEditedName("");
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
                Change your
                <span className="text-regularPink">Last Name</span>
              </ModalHeader>
              <ModalBody>
                <input
                  type="text"
                  className="w-full border rounded p-2"
                  placeholder="Edit Last Name"
                  value={editedName}
                  onChange={handleNameChange}
                />
              </ModalBody>
              <ModalFooter>
                <Button
                  color="gray"
                  variant="text"
                  onPress={onClose}
                  className="text-regularPink bg-transparent mr-2"
                >
                  Cancel
                </Button>
                <Button
                  className="bg-gradient-to-r from-pink-400 to-pink-600 text-white py-2 rounded-md hover:from-pink-500 hover:to-pink-700 transition-all duration-300"
                  onPress={handleSave}
                >
                  Save
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
