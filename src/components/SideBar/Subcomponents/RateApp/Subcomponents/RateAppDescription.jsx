import React from 'react';
import { motion } from 'framer-motion';

const RateAppDescription = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-grayDark p-6 rounded-lg shadow-md text-center"
        >
            <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                Thanks for using our app!
            </h2>

            <h3 className="text-md mb-4 text-gray-600 dark:text-lightGrey">
                We would like to know how we can improve. Please take a moment to let us know what you think of the app. You can rate it from 1 to 5 stars and write a short description of your experience.
            </h3>

            <h4 className="text-sm text-gray-500">
                Your feedback helps us make the app better for all users. Thank you!
            </h4>

        </motion.div>
    );
};

export default RateAppDescription;
