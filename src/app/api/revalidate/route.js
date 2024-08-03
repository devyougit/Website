import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function POST() {
    // Check for secret to confirm this is a valid request
    // if (req.query.secret !== process.env.MY_SECRET_TOKEN) {
    //   return res.status(401).json({ message: 'Invalid token' });
    // }
  
    try {
      revalidatePath('/', 'layout');
      return NextResponse.json({ revalidated: true });
    } catch (err) {
      return NextResponse.json('Error revalidating');
    }
  }