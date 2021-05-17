if (personal.listAccounts.length == 0) {
  console.log("ERROR: no accounts in keystore")
}

function run_code (code, params) {
  if (params == null) { params = {} }
  if (params.from == null) { from = personal.listAccounts[0] }

  params["data"] = code

  return personal.sendTransaction(params)
}
