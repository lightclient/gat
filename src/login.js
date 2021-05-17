me = "0xc0ffee61108b46c8b84c63df14e3a607ac981e93"
pk = "7b1020d5eb36d875178a6251eb77497b0ffdf639e7d1b8a7312dac15daf2bbe8"

found = false
for (i = 0; i < personal.listAccounts.length; i++) {
	if (personal.listAccounts[i] == me) {
		found = true
	}
}

if (!found) {
	console.log("testing account not found, importing...")
	personal.importRawKey(pk, "")
}
