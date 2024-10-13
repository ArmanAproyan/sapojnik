import { NextRequest, NextResponse } from "next/server";
const db = require('../../database/init'); 

export async function GET() {
    try {
        const reviews = db.prepare(`SELECT * FROM reviews`).all(); 
        return NextResponse.json(reviews); 
    } catch (error) {
        console.error("Ошибка при получении отзывов:", error);
        return NextResponse.json({ success: false, message: "Ошибка при получении отзывов." }, { status: 500 });
    }
}


export async function POST(request: NextRequest) {
    try {
        const data = await request.json();
        const { email, review } = data;

        // Проверка входных данных
        if (!email || !review) {
            return NextResponse.json({ success: false, message: "Email и отзыв обязательны." }, { status: 400 });
        }

        const stmt = db.prepare(`
            INSERT INTO reviews (email, review) VALUES (?, ?)
        `);
        
        stmt.run(email, review);

        return NextResponse.json({success: true, message: "Отзыв успешно добавлен." }, { status: 201 });
    } catch (error: any) {
        console.error("Ошибка при добавлении отзыва:", error);
        return NextResponse.json({ success: false, message: error.message }, { status: 500 });
    }
}


