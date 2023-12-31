import React, { useState } from "react";
import { Textarea } from "@nextui-org/react";
import { motion } from "framer-motion";

export default function TextAreaModalEs({ onContentChange }) {
  const [content, setContent] = useState("");
  const handleContentChange = (e) => {
    const newContent = e.target.value;
    setContent(newContent);
    onContentChange(newContent);
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-xl font-semibold">Tu Opinión</h3>

      <Textarea
        variant="faded"
        labelPlacement="outside"
        placeholder="Ingresa tu Opinión..."
        description="¡Ingresa una opinion concisa de Pig Commander!"
        className="max-w-sm"
        value={content}
        onChange={handleContentChange}
      />
    </motion.div>
  );
}
