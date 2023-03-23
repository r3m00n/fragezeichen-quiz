// importing dotenv to read environment variables
import * as dotenv from "dotenv"
dotenv.config()

// importing scraped data from file
import * as importData from "../out/folgen_importfaehig.json" assert {type: "json"}
const {
    default: {folgen}
} = importData

// importing & inizialising supabase
import {createClient} from "@supabase/supabase-js"
const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_ANON_KEY
)

folgen.forEach(async folge => {
    // if it's not a special
    if (!isNaN(folge.nummer)) {
        const {data, error} = await supabase.from("folgen").insert([
            {
                nummer: folge.nummer,
                titel: folge.titel,
                bild_url: folge.bild_url,
                veroeffentlichung: folge.veroeffentlichung,
                inhalt: folge.inhalt,
                sprecher: folge.sprecher,
                details: folge.detailinformationen,
                mp3_urls: folge.mp3_urls
            }
        ])
    }
})
