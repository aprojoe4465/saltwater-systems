# Saltwater Systems

Aquarium service, installation, and maintenance site for saltwater and freshwater tanks. Saltwater Systems is a fictitious name of Snapper Marine, LLC.

Intended domain: [saltwatersystem.net](https://saltwatersystem.net). This repo is deployed to Vercel on a `vercel.app` URL until DNS is pointed at the project. Do not change DNS from this repository.

## Stack

- Next.js 14 (App Router) and TypeScript
- Resend for booking-notification email
- Optional webhook for text alerts

## Local development

```bash
cp .env.example .env.local
npm install
npm run dev
```

## Environment variables

| Name | Purpose |
| --- | --- |
| `RESEND_API_KEY` | Resend API key. Emails are skipped if unset. |
| `RESEND_FROM` | From address. Must be on a domain verified in Resend. |
| `BOOKING_NOTIFY_TO` | Inbox for new requests. Defaults to `jbarnes@saltwatersystem.net`. |
| `BOOKING_ALERT_WEBHOOK_URL` | Optional POST target for text alerts. Skipped if unset. |
| `BOOKING_ALERT_WEBHOOK_AUTH` | Full `Authorization` header value sent to the webhook. |

The notify-address default lives in `app/api/book/route.ts` as `DEFAULT_NOTIFY_TO`. The mailbox is not set up yet, so test emails will bounce until it exists. Until `saltwatersystem.net` is verified in Resend, set `RESEND_FROM` to a sender on an already verified domain.

## Booking flow

The `/api/book` route uses the same anti-spam checks as the Snapper Marine site (honeypot, timing, junk filters). After those checks pass it emails `BOOKING_NOTIFY_TO` and, if configured, POSTs JSON to `BOOKING_ALERT_WEBHOOK_URL` with a 5 second timeout. A webhook failure never breaks the booking.

## Photos

Stock photos in `public/photos` are from Pexels (free license). Credits are in `public/photos/CREDITS.md`. They are illustrative and are not customer tanks.
