import { writeFile } from "fs/promises";
import { NextRequest, NextResponse } from "next/server";
import { join } from "path";


export async function POST(request:NextRequest){
    const data = await request.formData();
    const file:File | null = data.get("fileProfile") as unknown as File;

    if(!file){
        return NextResponse.json({success:false})
    }
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const path = join(process.cwd(), "/public/profile/",file.name);
    await writeFile(path,buffer);

    return NextResponse.json({success:true,fileName:file.name});
    

}