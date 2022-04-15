import React from 'react'
import Member from './member'

const data = [
  {
    id: 'marc',
    name: 'Marc',
    socialId: '@mrousavy',
    link: 'https://github.com/frusciante189',
  },
  {
    id: 'szymon',
    name: 'Szymon',
    socialId: '@szymon20000',
    link: 'https://github.com/frusciante189',
  },
  {
    id: 'thomas',
    name: 'Thomas',
    socialId: '@thomas-coldwell',
    link: 'https://github.com/frusciante189',
  },
  {
    id: 'christoph',
    name: 'Christoph',
    socialId: '@chrispader',
    link: 'https://github.com/frusciante189',
  },
  {
    id: 'Janic',
    name: 'Janic',
    socialId: '@janicduplessis',
    link: 'https://github.com/frusciante189',
  },
  {
    id: 'akinn',
    name: 'Akinn',
    socialId: '@akinncar',
    link: 'https://github.com/frusciante189',
  },
  {
    id: 'mo',
    name: 'Mo',
    socialId: '@gorhom',
    link: 'https://github.com/frusciante189',
  },
  {
    id: 'eric',
    name: 'Eric',
    socialId: '@ericvicenti',
    link: 'https://github.com/frusciante189',
  },
  {
    id: 'matei',
    name: 'Matei',
    socialId: '@mateioprea',
    link: 'https://github.com/frusciante189',
  },
  {
    id: 'viktoria',
    name: 'Viktoria',
    socialId: '@viktoria.psd',
    link: 'https://github.com/frusciante189',
  },
]

const AboutUs: React.FC = () => {
  return (
    <section className={`flex flex-col bg-white py-20 text-3xl md:text-4xl`}>
      <div className="container mx-auto px-11 ">
        <p className="mx-auto max-w-5xl text-4xl leading-tight tracking-tight">
          <strong>We will help you ship better apps, faster.</strong> Our team
          of expert engineers has created the best user experiences in some of
          the most popular apps worldwide.
        </p>
      </div>
      <div className="container mx-auto mt-28 px-3 text-center lg:px-11">
        <h2>Our Team</h2>
        <div className="mt-2">the &ldquo;spec-ops&rdquo;</div>
        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-20 xl:grid-cols-5">
          {data.map((item, index) => {
            return (
              <Member
                id={item.id}
                name={item.name}
                socialId={item.socialId}
                link={item.link}
                key={index}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default AboutUs
