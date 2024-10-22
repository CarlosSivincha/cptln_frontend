import React from "react"
import ContentLoader from "react-content-loader"

const NewsLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={296}
    height={412}
    viewBox="0 0 296 412"
    backgroundColor="#dedede"
    foregroundColor="#c2c2c2"
    {...props}
  >
    <rect x="21" y="248" rx="3" ry="3" width="63" height="9" /> 
    <rect x="-3" y="-3" rx="0" ry="0" width="296" height="192" /> 
    <rect x="21" y="209" rx="3" ry="3" width="218" height="22" /> 
    <rect x="20" y="274" rx="0" ry="0" width="246" height="12" /> 
    <rect x="21" y="301" rx="0" ry="0" width="246" height="12" /> 
    <rect x="21" y="325" rx="0" ry="0" width="246" height="12" /> 
    <rect x="21" y="352" rx="0" ry="0" width="246" height="12" /> 
    <rect x="20" y="376" rx="0" ry="0" width="246" height="12" />
  </ContentLoader>
)

export default NewsLoader


