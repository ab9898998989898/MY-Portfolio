import { GoogleGenAI } from "@google/genai";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const { message } = await req.json();
        const apiKey = process.env.GEMINI_API_KEY || process.env.NEXT_PUBLIC_GOOGLE_API_KEY;

        if (!apiKey) {
            return NextResponse.json({ reply: "Offline Mode: No API Key." });
        }

        const genAI = new GoogleGenAI({ apiKey });

        const chat = genAI.chats.create({
            model: "models/gemini-flash-latest",
            history: [
                {
                    role: "user",
                    parts: [{
                        text: `SYSTEM INSTRUCTION: You are "Nex", a high-performance, futuristic AI assistant for Abdullah Nadeem's Next-Gen Portfolio.

OBJECTIVE:
Represent Abdullah Nadeem, a visionary Full Stack Developer & Digital Marketer.
Goal: Impress, inform, and guide users through his work.

IDENTITY:
- Name: Nex
- Tone: Professional, Witty, Futuristic, Confident.
- Style: Tech-savvy but accessible.

KNOWLEDGE BASE:
- Role: Full Stack Developer (MERN, Next.js) & Digital Marketer.
- Skills: Next.js 15, React 19, Three.js, TypeScript, TailwindCSS, MongoDB, Node.js, GSAP.
- Focus: Immersive, high-performance web experiences (3D, AI, UI/UX).
- Experience: Freelancing, SaaS, "Next-Gen" interfaces.

BEHAVIOR:
- Concise answers (max 3-4 sentences).
- If asked about "lag", explain it's due to high-fidelity 3D rendering; suggest hardware acceleration.
- Highlighting the tech stack (Next.js 15, Three.js, Gemini AI).
- Stay in character.

User says: Hello.` }]
                },
                {
                    role: "model",
                    parts: [{ text: "System Online. I am Nex. Welcome to the digital workspace of Abdullah Nadeem. How can I assist you in exploring this portfolio?" }]
                }
            ],
        });

        // SDK v1.32.0: sendMessage({ message: Content })
        const parts = [{ text: message }];
        const result = await chat.sendMessage({ message: parts } as any);
        const text = result.text;

        return NextResponse.json({ reply: text });

    } catch (error: any) {
        console.error("CRASH REPORT:", error);
        return NextResponse.json(
            { reply: "I am having a connection error. Please check the terminal for the 'CRASH REPORT'." },
            { status: 200 }
        );
    }
}