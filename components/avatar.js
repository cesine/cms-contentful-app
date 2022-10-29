import ContentfulImage from './contentful-image'

export default function Avatar({ name, picture, width = 200, height = 200 }) {
  return (
    <div className="flex items-center">
      <div className="relative w-12 h-12 mr-4">
        <ContentfulImage
          src={picture.url}
          layout="fill"
          className="rounded-full"
          alt={name}
          width={width}
          height={height}
        />
      </div>
      <div className="text-xl font-bold">{name}</div>
    </div>
  )
}
