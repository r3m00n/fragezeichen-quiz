// importing dotenv to read environment variables
import * as dotenv from "dotenv"
dotenv.config()

// importing scraped data from file
import * as importData from "../out/episodes.json" assert {type: "json"}
const {
    default: {episodes}
} = importData

// importing & inizialising supabase
import {createClient} from "@supabase/supabase-js"
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY)

episodes.forEach(async episode => {
    // if it's not a special
    if (!isNaN(episode.number) && !episode.title.includes("Steelbook")) {
        const {data, error} = await supabase.from("episodes").insert([
            {
                number: episode.number,
                title: episode.title,
                cover_url: episode.cover_url,
                release: episode.release,
                summary: episode.summary,
                speaker: episode.speaker,
                details: episode.details,
                mp3_urls: episode.mp3_urls
            }
        ])
    }
})
