// import { revalidatePath } from "next/cache";

import { NextResponse } from "next/server";

// export default async function handler(req, res) {
//     // Check for secret to confirm this is a valid request
//     // if (req.query.secret !== process.env.MY_SECRET_TOKEN) {
//     //   return res.status(401).json({ message: 'Invalid token' });
//     // }
  
//     try {
//       // Revalidate specific pages
//       revalidatePath('/');
//       return res.json({ revalidated: true });
//     } catch (err) {
//       return res.status(500).send('Error revalidating');
//     }
//   }

export async function GET () {
  return NextResponse.json({hello:"world"})
}