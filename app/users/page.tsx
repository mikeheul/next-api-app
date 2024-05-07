"use client";

import { useEffect, useState } from 'react';
import { getUsers } from '../api/users/route';
import Card from '../components/Card';

const Page = () => {

    const [users, setUsers] = useState<any[]>([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await getUsers();
                const data = await response.json();
                setUsers(data);
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        };

        fetchUsers();
    }, []);

    return (
        <div>
            <h1 className="text-4xl text-white font-bold">API Users</h1>
            <div className="grid grid-cols-1 w-full sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-5">
                {users.map((user) => {
                    return (
                        <Card 
                            key={user.id}
                            user={user}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Page;
