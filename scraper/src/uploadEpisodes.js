import chalkAnimation from "chalk-animation"
import {createClient} from "@supabase/supabase-js"
import * as dotenv from "dotenv"
import * as importData from "../out/episodes.json" assert {type: "json"}

const main = async () => {
    chalkAnimation.rainbow("??? Uploaderino")
    console.log("Start inserting episodes from episodes.json")

    dotenv.config()
    const supabase = createClient(
        process.env.SUPABASE_URL,
        process.env.SUPABASE_ANON_KEY
    )

    const episodes = importData.default.episodes
    episodes.forEach(async episode => {
        await insertEpisode(supabase, episode)
    })

    console.log("Successfully inserted episodes into database!")
}

const insertEpisode = async (supabase, episode) => {
    const {data, error} = await supabase
        .from("episodes")
        .insert({id: episode.number, ...episode})
    if (error) {
        console.error(error)
    }
}

main()
