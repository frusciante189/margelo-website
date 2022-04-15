import Image from 'next/image'
import React from 'react'
import TileWrapper, { Tile, TileBackground, TileContent } from './tile'
import {
  WorkBackground,
  WorkContainer,
  WorkLeft,
  WorkLink,
  WorkRight,
} from './work'

const Works: React.FC = () => {
  return (
    <TileWrapper numOfPages={3}>
      <TileBackground>
        <WorkBackground />
      </TileBackground>
      <TileContent>
        <Tile
          page={0}
          renderContent={({ progress }) => (
            <WorkContainer>
              <WorkLeft progress={progress}>
                <div>We built</div>
                <div className="text-4xl font-semibold tracking-tight md:text-5xl">
                  <WorkLink href="https://pinkpanda.io/">Pink Panda</WorkLink>
                  &apos;s app.
                </div>
              </WorkLeft>
              <WorkRight progress={progress}>
                <Image
                  src="/assets/works/pinkpanda.webp"
                  layout="responsive"
                  width={840}
                  height={1620}
                  alt="Pink Panda"
                />
              </WorkRight>
            </WorkContainer>
          )}
        ></Tile>
        <Tile
          page={1}
          renderContent={({ progress }) => (
            <WorkContainer>
              <WorkLeft progress={progress}>
                <div>We made</div>
                <div className="text-4xl font-semibold tracking-tight md:text-5xl">
                  Steakwallet&nbsp; faster.
                </div>
              </WorkLeft>
              <WorkRight progress={progress}>
                <Image
                  src="/assets/works/steakwallet.webp"
                  layout="responsive"
                  width={840}
                  height={1620}
                  alt="Steakwallet"
                />
              </WorkRight>
            </WorkContainer>
          )}
        ></Tile>
        <Tile
          page={2}
          renderContent={({ progress }) => (
            <WorkContainer>
              <WorkLeft progress={progress}>
                <div>We helped</div>
                <div className="text-4xl font-semibold tracking-tight md:text-5xl">
                  Showtime ship faster.
                </div>
              </WorkLeft>
              <WorkRight progress={progress}>
                <Image
                  src="/assets/works/showtime.webp"
                  layout="responsive"
                  width={840}
                  height={1620}
                  alt="Showtime"
                />
              </WorkRight>
            </WorkContainer>
          )}
        ></Tile>
      </TileContent>
    </TileWrapper>
  )
}

export default Works
