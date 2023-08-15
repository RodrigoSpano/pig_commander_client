import React from "react";

export default function Signs ({title, amount}) {
    return (
        <div>
            <div>
                {title}
            </div>
            <div>
                $ {amount}
            </div>
        </div>
    )
}