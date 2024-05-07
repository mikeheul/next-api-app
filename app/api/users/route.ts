import axios from "axios";
import { NextResponse } from "next/server";

export async function getUsers() {
    try {
        const response = await axios.get("https://jsonplaceholder.org/users")
        const users = response.data

        return NextResponse.json(users);

    } catch (error) {
        return new NextResponse("Internal Error", { status: 500 })
    }
}