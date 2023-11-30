import { NextResponse } from "next/server"

export const GET = async (request: any) => {
    // fetching

    return new NextResponse("It's Connected!", { status: 200 })
}