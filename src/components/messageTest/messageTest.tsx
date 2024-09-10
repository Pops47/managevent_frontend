// import { useEffect, useState } from "react";
// import messageFaker from "./messageFaker";

export interface MessageInterface {
    element: {
        name: string,
        content: string,
        author: string
    }
}[];

export function Message({ element }: MessageInterface) {

    return (
        <>
            <div
                className="border-orangeDP border-2 rounded-xl text-center flex items-center justify-center h-12 p-4">
                <h1>{element.author}</h1>
                <p>{element.name}</p>
                <p className="text-base">{element.content}</p>
            </div>
        </>
    )
}