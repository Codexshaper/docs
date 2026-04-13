# Payment Gateways

The SaaS module supports 7 payment gateways out of the box. Enable and configure gateways under **Admin → Billing → Settings → Payment Methods**.

---

## Stripe

Stripe handles credit and debit card payments globally.

### Step 01 — Get API Keys

Log in to your [Stripe Dashboard](https://dashboard.stripe.com/apikeys) and copy:

- **Publishable key** (`pk_live_...`)
- **Secret key** (`sk_live_...`)

### Step 02 — Add to `.env`

```env
STRIPE_KEY=pk_live_...
STRIPE_SECRET=sk_live_...
```

### Step 03 — Enable in Billing Settings

In **Admin → Billing → Settings**, toggle **Stripe** to enabled.

> **Tip:** For testing, use Stripe test keys (`pk_test_...` / `sk_test_...`) and test card `4242 4242 4242 4242`, any future expiry, any CVC.

---

## PayPal

### Step 01 — Get API Credentials

Log in to [PayPal Developer](https://developer.paypal.com/), go to **My Apps & Credentials** and create an app. Copy:

- **Client ID**
- **Client Secret**

### Step 02 — Add to `.env`

```env
PAYPAL_MODE=live           # use 'sandbox' for testing
PAYPAL_CLIENT_ID=...
PAYPAL_CLIENT_SECRET=...
```

### Step 03 — Enable in Billing Settings

Toggle **PayPal** to enabled in Billing Settings.

---

## Razorpay

Recommended for India.

### Step 01 — Get API Keys

Log in to your [Razorpay Dashboard](https://dashboard.razorpay.com/), go to **Settings → API Keys** and generate:

- **Key ID** (`rzp_live_...`)
- **Key Secret**

### Step 02 — Add to `.env`

```env
RAZORPAY_KEY=rzp_live_...
RAZORPAY_SECRET=...
```

### Step 03 — Enable in Billing Settings

Toggle **Razorpay** to enabled.

> **Note:** Razorpay requires the customer's phone number during checkout. The registration form collects this automatically when Razorpay is the selected gateway.

---

## Paystack

Recommended for Africa (Nigeria, Ghana, Kenya, South Africa).

### Step 01 — Get API Keys

Log in to your [Paystack Dashboard](https://dashboard.paystack.com/), go to **Settings → API Keys & Webhooks** and copy:

- **Public Key** (`pk_live_...`)
- **Secret Key** (`sk_live_...`)

### Step 02 — Add to `.env`

```env
PAYSTACK_PUBLIC_KEY=pk_live_...
PAYSTACK_SECRET_KEY=sk_live_...
```

### Step 03 — Enable in Billing Settings

Toggle **Paystack** to enabled.

---

## Xendit

Recommended for South-East Asia (Indonesia, Philippines, Malaysia, Thailand, Vietnam).

### Step 01 — Get API Keys

Log in to your [Xendit Dashboard](https://dashboard.xendit.co/settings/developers), go to **API Keys** and copy:

- **Secret Key** (`xnd_production_...`)
- **Public Key** (`xnd_public_...`)

### Step 02 — Add to `.env`

```env
XENDIT_SECRET_KEY=xnd_production_...
XENDIT_PUBLIC_KEY=xnd_public_...
```

### Step 03 — Enable in Billing Settings

Toggle **Xendit** to enabled.

---

## PayU

PayU supports payments in India, Poland, and several other markets.

### Step 01 — Get API Keys

Sign in to the [PayU Dashboard](https://merchant.payu.in/) and obtain:

- **Merchant Key**
- **Merchant Salt**

### Step 02 — Add to `.env`

```env
PAYU_MERCHANT_KEY=your_merchant_key
PAYU_MERCHANT_SALT=your_merchant_salt
PAYU_MODE=test
```

Set `PAYU_MODE=live` for production.

### Step 03 — Enable in Billing Settings

Toggle **PayU** to enabled.

---

## Offline / Bank Transfer

The offline gateway allows customers to pay via bank transfer or cash. Payments require **manual admin verification**.

### How It Works

1. Customer selects **Bank Transfer** on the checkout page
2. Your bank details (configured in Billing Settings) are shown
3. Customer makes the transfer and uploads a proof of payment screenshot
4. Admin views the payment under **Admin → Billing → Payments**
5. Admin clicks **Complete Payment** to activate the subscription, or **Fail Payment** to reject

### Configuration

In **Admin → Billing → Settings**, enable the **Offline / Bank Transfer** method and enter your bank account details in the description field. This text is shown to customers on the checkout page.

---

## Payment Records

All payment attempts — successful or failed — are recorded under **Admin → Billing → Payments**.

| Column | Description |
|--------|-------------|
| Invoice # | Linked invoice |
| Gateway | e.g. Stripe, Razorpay |
| Amount | Charged amount |
| Status | `pending`, `completed`, `failed` |
| Created | When the payment was initiated |

### Completing a Payment Manually

For bank transfers or if an online payment was completed but the webhook failed:

1. Open the payment record
2. Click **Complete Payment**

This marks the payment and linked invoice as paid and activates the subscription.

### Failing a Payment

1. Open the payment record
2. Click **Fail Payment**

This marks the attempt as failed. The subscription will remain in its current state until a new payment succeeds.
