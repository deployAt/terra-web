const { LCDClient, Coin } = require('@terra-money/terra.js')

const terra = new LCDClient({
  URL: 'http://lcd.terra.dev',
  chainID: 'columbus-4'
})

// const terra = new LCDClient({
//   URL: 'http://localhost:1317',
//   chainID: 'localterra'
// })

const offerCoin = new Coin('uusd', '1000000')
terra.market.swapRate(offerCoin, 'ueur').then(res => {
  console.log(`${offerCoin.toString()} can be swapped for ${res.toString()}`)
})
