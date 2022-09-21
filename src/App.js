const planets = [
  {
    id: 1,
    name: 'Mercury',
    href: '#',
    imageSrc: 'https://cdn.pixabay.com/photo/2021/04/05/15/44/mercury-6153848_960_720.png',
    imageAlt: "Mercury: The closest planet from the Sun",
    rotation: '58 Earth Days',
    translation: '88 Earth Days',
  },
  {
    id: 2,
    name: 'Venus',
    href: '#',
    imageSrc: 'https://cdn.pixabay.com/photo/2021/04/05/15/44/venus-6153849_1280.png',
    imageAlt: "Mercury: The Brightest planet in the sky",
    rotation: '243 Earth days',
    translation: '225 Earth days',
  },
  {
    id: 3,
    name: 'Earth',
    href: '#',
    imageSrc: 'https://purepng.com/public/uploads/large/purepng.com-earthearthplanetglobethird-planet-from-the-sun-1411526987961jvz5u.png',
    imageAlt: "Earth: Our Planet",
    rotation: 'Almost 24 Hours',
    translation: '365 Days',
  },
  {
    id: 4,
    name: 'Mars',
    href: '#',
    imageSrc: 'https://www.pngall.com/wp-content/uploads/13/Mars-PNG-File.png',
    imageAlt: "Mars: The Red Planet",
    rotation: '24.6 Earth Hours',
    translation: '687 Earth Days',
  },
  {
    id: 5,
    name: 'Jupiter',
    href: '#',
    imageSrc: 'https://www.pngall.com/wp-content/uploads/7/Jupiter-PNG-Images.png',
    imageAlt: "Jupiter: The Largest Planet",
    rotation: '10 Earth Hours',
    translation: '12 Earth Years',
  },
  {
    id: 6,
    name: 'Saturn',
    href: '#',
    imageSrc: 'https://i.pinimg.com/originals/00/df/ce/00dfced1106ea2701f50843be39a6598.png',
    imageAlt: "Saturn: The Ringed Planet",
    rotation: '10.7 Earth Hours',
    translation: '29.4 Earth Years',
  },
  {
    id: 7,
    name: 'Uranus',
    href: '#',
    imageSrc: 'https://i.pinimg.com/originals/4b/b4/49/4bb449ca254cce3d40bf9d148ed41b77.png',
    imageAlt: "Uranus: The coldest planet",
    rotation: '17 Earth Hours',
    translation: '84 Earth Years',
  },
  {
    id: 8,
    name: 'Neptune',
    href: '#',
    imageSrc: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7b65b94b-d208-4026-93a7-869c3b7f60c2/d7xz1za-95cbbfb0-7b71-488a-99a9-f28d806061bf.png/v1/fill/w_1024,h_1023,strp/neptune_png_by_heroys_d7xz1za-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAyMyIsInBhdGgiOiJcL2ZcLzdiNjViOTRiLWQyMDgtNDAyNi05M2E3LTg2OWMzYjdmNjBjMlwvZDd4ejF6YS05NWNiYmZiMC03YjcxLTQ4OGEtOTlhOS1mMjhkODA2MDYxYmYucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.CdQAfBVkv6lyrFOHuJpVa3vdc4kJMPMhjrrlFZDWwTQ',
    imageAlt: "Neptune: The eightth solar planet",
    rotation: '16 Earth Hours',
    translation: '165 Earth Years',
  },
]

export default function App() {
  return (
    <div className="bg-[url(https://i.ytimg.com/vi/DRSbkYryPhA/maxresdefault.jpg)]">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl text-center font-bold tracking-tight text-white">Solar System Planets</h2>
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {planets.map((planet) => (
            <div key={planet.id=1} className="group relative">
              <div className="bg-[url(https://i.ytimg.com/vi/DRSbkYryPhA/maxresdefault.jpg)] min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                <img
                  src={planet.imageSrc}
                  alt={planet.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-1xl font-bold tracking-tight text-white">
                    <a href={planet.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {planet.name}
                    </a>
                  </h3>
                  <p className="text-sm font-bold tracking-tight text-white">Rotation Period: {planet.rotation}
                  <br></br>
                  Translation Period: {planet.translation} </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}