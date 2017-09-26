# stellar-gcash-anchor
GCash Anchor for the Stellar Network

## How it Works (testnet)

1. Add a trustline for asset PHP to issuing account GBEAEXVL27YDQIHGSLDA3F57BZB2E5KL5LK5DJRY62EEMV4I42HED2V7
  - Transaction must have a memo that includes the person's GCASH cellphone number 09175431287
2. Receive a phone number from issuer to send your GCash to
  - One individual phone number per GCASH account (100k limit)?
  - Watch for GCASH being sent from a recipient's phone number through a GSM receiver. Data should be broadcasted/published to prove that GCash has been sent to issuer
  - From the phone number that sent in the GCash, find the address associated with that phone number and fund its Stellar account
3. To withdraw, send back PHP credit to issuer's account
  - Watch for PHP credit being received at issuing account
  - Disburse GCash to phone number associated with Stellar address that sent the PHP credit

### Potential caveats

1. If there were official APIs that watched for transactions on the GCash network that would be interesting (instead of confirming transactions via SMS)
2. Could potentially look into becoming a GCash merchant in order to bypass the 100k php credit per wallet and have all transactions go to the merchant account.
3. If user does not have access to mobile number and they still have PHP credit, what happens?
4. Globe has a system wherein customers that send GCash to each other have already gone through the KYC process by Globe.
5. Should there still be a KYC process for the Stellar network?