import { NextResponse } from "next/server";
const BASE_URL='https://api.mapbox.com/search/searchbox/v1/suggest'
export async function GET(request:any) {
    const {searchParams} = new URL(request.url);
    const searchText=searchParams.get('q');

    const res=await fetch(BASE_URL+'?q='+searchText+'?language=en&limit=10&session_taken=0e5c3adf-722b-4a11-88fb-4ff272300bbb&country=US'
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