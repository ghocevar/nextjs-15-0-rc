import { NextResponse } from 'next/server';

export const GET = async () => {
  const time = new Date().toISOString();
  return NextResponse.json({ time });
};
