import React from 'react'
import Image from 'next/image'

import { Store } from '../types'

interface Props {
  store: Store
  priority?: boolean
}

const StoreCard: React.FC<Props> = ({ store, priority }) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: 12,
        lineHeight: 1,
        flexFlow: 'row nowrap',
      }}
    >
      <div style={{ width: '30%' }}>
        <Image
          alt={store.title}
          src={store.image}
          objectFit="cover"
          width={64}
          height={64}
        />
      </div>
      <div style={{ width: '70%' }}>
        <h2 style={{ marginBottom: 6 }}>{store.title}</h2>
        <p
          style={{
            marginBottom: 4,
            WebkitLineClamp: 1,
            display: '-webkit-box',
            overflow: 'hidden',
            WebkitBoxOrient: 'vertical',
          }}
        >
          {store.description}
        </p>
        <p style={{ color: '#999' }}>{store.location.address}</p>
      </div>
    </div>
  )
}

export default StoreCard
