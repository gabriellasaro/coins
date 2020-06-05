var criptoList = {
  USD: [
    {
      code: 'BTC',
      name: 'Bitcoin'
    },
    {
      code: 'BCH',
      name: 'Bitcoin Cash'
    },
    {
      code: 'ETH',
      name: 'Ethereum'
    },
    {
      code: 'EOS',
      name: 'EOS'
    },
    {
      code: 'XRP',
      name: 'XRP'
    },
    {
      code: 'LTC',
      name: 'Litecoin'
    },
    {
      code: 'ETC',
      name: 'Ethereum Classic'
    },
    {
      code: 'TRX',
      name: 'TRON'
    },
    {
      code: 'DASH',
      name: 'Dash'
    },
    {
      code: 'XMR',
      name: 'Monero'
    },
    {
      code: 'ZEC',
      name: 'Zcash'
    },
    {
      code: 'BTT',
      name: 'BitTorrent'
    },
    {
      code: 'BAT',
      name: 'Basic Attention Token'
    },
    {
      code: 'NANO',
      name: 'Nano'
    },
    {
      code: 'DOGE',
      name: 'Doge'
    },
    {
      code: 'XML',
      name: 'Stellar'
    },
    {
      code: 'USDC',
      name: 'USD Coin'
    }
  ],
  BRL: [
    {
      code: 'BTC',
      name: 'Bitcoin'
    },
    {
      code: 'BCH',
      name: 'Bitcoin Cash'
    },
    {
      code: 'ETH',
      name: 'Ethereum'
    },
    {
      code: 'EOS',
      name: 'EOS'
    },
    {
      code: 'XRP',
      name: 'XRP'
    },
    {
      code: 'LTC',
      name: 'Litecoin'
    },
    {
      code: 'ETC',
      name: 'Ethereum Classic'
    },
    {
      code: 'TRX',
      name: 'TRON'
    },
    {
      code: 'DASH',
      name: 'Dash'
    },
    {
      code: 'XMR',
      name: 'Monero'
    },
    {
      code: 'ZEC',
      name: 'Zcash'
    }
  ]
}

var coinList = [
  {
    code: 'BRL',
    name: 'Real brasileiro'
  },
  {
    code: 'USD',
    name: 'Dólar americano'
  },
]

function getLocalStorageByKey(key, defaultValue) {
  return localStorage.getItem(key) != null ? localStorage.getItem(key) : defaultValue
}

function removeAllChildren(element) {
  document.querySelector(element).innerHTML = '';
}