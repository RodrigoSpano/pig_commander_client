import React from 'react';

const UsersCards = () => {
    const count = {
        total: 74507,
        basic: 41051,
        pro: 33456,
        baned: 540,
    };

    const cardStyles =
        'px-8 py-10 bg-white rounded-lg shadow-md text-center';

    return (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className={cardStyles}>
                <h2 className="font-semibold text-2xl text-neutral-800 mb-4">
                    Total Users
                </h2>
                <h1 className="font-bold text-5xl text-neutral-800">{count.total}</h1>
            </div>

            <div className={cardStyles}>
                <h2 className="font-semibold text-2xl text-neutral-800 mb-4">
                    Basic Users
                </h2>
                <h1 className="font-bold text-5xl text-neutral-800">{count.basic}</h1>
            </div>

            <div className={cardStyles}>
                <h2 className="flex justify-center font-semibold text-2xl text-neutral-800 mb-4 gap-1">
                    <span className='text-regularPink'>Pro</span>
                    <span>Users</span>
                </h2>
                <h1 className="font-bold text-5xl text-neutral-800">{count.pro}</h1>
            </div>

            <div className={cardStyles}>
                <h2 className="font-semibold text-2xl text-neutral-800 mb-4">
                    Banned Users
                </h2>
                <h1 className="font-bold text-5xl text-neutral-800">{count.baned}</h1>
            </div>
        </div>
    );
};

export default UsersCards;
