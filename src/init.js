console.log("---\nloading gat\n---\n")
gat = {}

me = "0xc0ffee61108b46c8b84c63df14e3a607ac981e93"
gat.me = me
gat.pk = "7b1020d5eb36d875178a6251eb77497b0ffdf639e7d1b8a7312dac15daf2bbe8"

found = false
for (i = 0; i < personal.listAccounts.length; i++) {
	if (personal.listAccounts[i] == gat.me) {
		found = true
	}
}

if (!found) {
	console.log("testing account not found, importing...")
	personal.importRawKey(gat.pk, "")
}

personal.unlockAccount(me, "")

function run_code (code, params) {
  if (params == null) { params = {} }
  if (params.from == null) { from = personal.listAccounts[0] }

  params["data"] = code

  return personal.sendTransaction(params)
}

function contract_addr(hash) {
  receipt = eth.getTransactionReceipt(hash)
  if (receipt) {
    return receipt.contractAddress
  }
}

function print_storage(addr, low, hi, at) {
  low = low || 0
  hi = hi || 10
  at = at || "latest"

  storage = []
  for (i = low; i < hi; i++) {
    val = eth.getStorageAt(addr, web3.toHex(i), at)
    console.log(i +":\t" + val)
  }
}

gat.run_code = run_code
gat.contract_addr = contract_addr
gat.print_storage = print_storage
