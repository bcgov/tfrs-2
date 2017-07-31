export const activity = [{
    id: 1,
    proposalDescription: 'BC Any Fuels proposes to see $15,000 credits to BC Every Fuel for 100 per credit for a total value of $1500000 effective on Directors approval',
    lastUpdated: Date.now(),
    status: 'Draft',
  },{
    id: 2,
    proposalDescription: 'BC Any Fuels proposes to see $12,000 credits to BC Every Fuel for 100 per credit for a total value of $1500000 effective on Directors approval',
    lastUpdated: Date.now(),
    status: 'Proposed',
}];

export const fuelSuppliers = [{
  id: 1, 
  name: 'BC Any Fuels',
  status: 'active',
  location: 'Kelowna, BC',
  actions_permitted: ['buy', 'sell'],
  credit_balance: 20000,
  encumbered_credits: 10,
  last_transaction: Date.now(),
  pending_actions: 2,
},{
  id: 1, 
  name: 'Ultramar',
  location: 'Vancouver, BC',
  status: 'active',
  actions_permitted: ['buy', 'sell'],
  credit_balance: 20000,
  encumbered_credits: 10,
  last_transaction: Date.now(),
  pending_actions: 2,
}]

export const fuelSupplier = {
  id: 1, 
  name: 'BC Any Fuels',
  status: 'active',
  location: 'Kelowna, BC',
  actions_permitted: ['buy', 'sell'],
  credit_balance: 20000,
  encumbered_credits: 10,
  last_transaction: Date.now(),
  pending_actions: 2,
  address: '402 West Georgia Avenue',
  contacts: [{
    name: 'John Williams',
    phone: '250-999-9008',
    email: 'jwilliams@bcanyfuel.ca',
    role: 'Administrator'
  },
  {
    name: 'Hank Williams',
    phone: '250-999-9008',
    email: 'jwilliams@bcanyfuel.ca',
    role: 'Administrator'
  }],
  documents: [{
    name: '2017 compliance reports',
    notes: 'BC Any Fuels TFRS Compliance Report',
    year: '2017',
    tags: ['compliance', 'report'],
    date_uploaded: Date.now(),
    by: 'Angela Knight',
    of: 'BC Government',
  }],
  history: [{
    description: 'BC Any Fuels TFRS Compliance Report',
    date: Date.now(),
    by: 'Angela Knight',
    of: 'BC Government',
  }]
}
