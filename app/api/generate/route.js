import { NextResponse } from "next/server";
import OpenAI from "openai";

const systemPrompt = 'You are a flashcard creator. Generate only 10 flashcards. Your task is to generate flashcards in the following JSON format: {"flashcards": [{"front": "string", "back": "string"}]}';

export async function POST(request) {
    const openai = new OpenAI()
    const data = await request.text()
    
    const completion = await openai.chat.completions.create({
        messages: [
            {role: "system", content: systemPrompt},
            {role: "user", content: data},
        ],
        model: "gpt-4o",
        response_format: {type: "json_object"},
    })

    console.log(completion.choices[0].message.content)


    const flashcards= JSON.parse(completion.choices[0].message.content)

    return NextResponse.json(flashcards.flashcards) 
}

