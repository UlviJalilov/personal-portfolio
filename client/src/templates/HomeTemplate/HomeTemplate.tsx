import Introduction from "../../components/Introduction/Introduction"
import ProfileSpotlight from "../../components/ProfileSpotlight/ProfileSpotlight"
import TechStack from "../../components/TechStack/TechStack"
import FeaturedProjects from "../../components/FeaturedProjects/FeaturedProjects"
const HomeTemplate = () => {
  return (
    <div>
      <ProfileSpotlight />
      <Introduction />
      <TechStack />
      <FeaturedProjects />
    </div>
  )
}

export default HomeTemplate
