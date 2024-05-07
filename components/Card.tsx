"use client"

import { cn, formatDateTime } from "@/lib/utils";

interface User {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
    birthDate: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        };
    };
}

interface CardProps {
    user: User
}

const Card = ({
    user
}: CardProps) => {
    return (
        <div className={cn("relative flex items-center justify-center text-center aspect-square rounded-lg shadow-md bg-slate-800 cursor-pointer", 
        {"bg-slate-600": user.id % 2 === 0}
        )}>
            <div className="flex flex-col">
                <p className="dark:text-red-500 text-xl text-white font-semibold">{user.firstname} {user.lastname}</p>
                <div className="text-sm text-slate-300">
                    <p>{user.email}</p>
                    <p>{user.address.street}</p>
                    <p>{user.address.city} {user.address.zipcode}</p>
                </div>
            </div>
            <div className="absolute text-xs px-2 py-1 text-white rounded-full bg-cyan-900 top-4 right-4">
                {formatDateTime(user.birthDate)}
            </div>
        </div>
    );
}

export default Card;