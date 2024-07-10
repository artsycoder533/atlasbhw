
import Navbar from "./Navbar"
import { SanityDocument } from "next-sanity"
import { NAVIGATION_MENU_QUERY } from "../../../sanity/lib/queries"
import { sanityFetch } from "../../../sanity/lib/fetch"

type Props = {}

const Header = async (props: Props) => {
    const navigationMenu = await sanityFetch<SanityDocument[]>({
        query: NAVIGATION_MENU_QUERY,
    });

    console.log('navigationMenu-->',navigationMenu)
  return (
    <header className="px-4 py-2 fixed w-full shadow-sm top-0 z-30 bg-background">
      <Navbar navigationMenu={navigationMenu} />
    </header>
  )
}

export default Header
  
  