    import { useState } from "react";

    const useVisibility = () => {

        const [showPassword, setShowPassword] = useState(false)

        const togglePasswordVisibility = () => {
            setShowPassword(!showPassword);
        };

        return { showPassword, togglePasswordVisibility };
    }

    export default useVisibility