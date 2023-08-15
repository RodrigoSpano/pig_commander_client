import React from "react";
import { Textarea } from "@nextui-org/react";
import { motion } from "framer-motion";

export default function TextAreaModal() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-xl font-semibold">
        Your Opinion
      </h3>

      <Textarea
        variant="faded"
        labelPlacement="outside"
        placeholder="Enter your Opinion..."
        description="Enter a concise opinion of the Pig Commander!"
        className="max-w-sm"
      />
    </motion.div>
  );
}
