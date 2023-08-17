    import { useState } from "react";

    const useVisibility = () => {

        const [showPassword, setShowPassword] = useState(false);
        const [showPasswordConfirmation, setShowPasswordConfirmation] = useState(false);

        const togglePasswordVisibility = () => {
            setShowPassword(!showPassword);
        };

        const togglePasswordConfirmationVisibility = () => {
            setShowPasswordConfirmation(!showPasswordConfirmation);
        };

        return {
            showPassword,
            togglePasswordVisibility,
            showPasswordConfirmation,
            togglePasswordConfirmationVisibility,
        };
    }

    export default useVisibility