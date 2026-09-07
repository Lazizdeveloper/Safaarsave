# Click Merchant Integration Guide

## Webhook Verification
1. Receive `click_trans_id`, `service_id`, `merchant_trans_id`, `amount`, `action`, `sign_time`, `sign_string`.
2. Compute MD5 hash with secret key.
3. Return `error: 0` for successful authorization.
