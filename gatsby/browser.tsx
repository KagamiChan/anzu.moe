import { GatsbyBrowser } from 'gatsby'
import { RecoilRoot } from 'recoil'

export const wrapRootElement: GatsbyBrowser['wrapRootElement'] = ({
  element,
}) => {
  return <RecoilRoot>{element}</RecoilRoot>
}
