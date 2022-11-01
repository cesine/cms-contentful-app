import Image from 'next/image'

// TODO: cannot serialize function when rendered in a server component
const contentfulLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`
}

const ContentfulImage = ({src, ...props}) => {
  const { width, quality, height } = props;
  return <Image src={`${src}?w=${width}&q=${quality || 75}`} {...props} />
}

export default ContentfulImage
