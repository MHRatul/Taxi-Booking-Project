import { NextResponse } from "next/server";
const BASE_URL='https://api.mapbox.com/search/searchbox/v1/suggest'
export async function GET(request:any) {
    const {searchParams} = new URL(request.url);
    const searchText=searchParams.get('q')

    const res=await fetch(BASE_URL+'?q='+searchText+'?language=en&limit=8&session_taken=f6193827-9ef4-43e5-acf6-3d4a1c466587&proximity=-83.748708,42.265837&country=US'
    +"&access_token="+process.env.MAPBOX_ACCESS_TOKEN,
        {
            headers:{
                "content-Type": "application/json"
            }
        }
    )

    const searchResult = await res.json();
     return NextResponse.json(searchResult);
}