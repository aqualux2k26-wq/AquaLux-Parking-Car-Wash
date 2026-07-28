# Deployment Guide: Vercel & Hostinger

This guide details deploying **aqualuxparkingcarwash.com** to **Vercel** with custom domain DNS managed at **Hostinger**.

---

## Step 1: Deploying to Vercel

### Option A: Via GitHub Integration (Recommended)
1. Push your repository code to GitHub (`github.com/your-org/aqualuxparkingcarwash`).
2. Log into your [Vercel Dashboard](https://vercel.com).
3. Click **"Add New Project"** and select **Import Git Repository**.
4. Configure build settings:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Click **Deploy**. Vercel will build and assign an initial `.vercel.app` domain.

### Option B: Via Vercel CLI
```bash
# Install Vercel CLI globally
npm i -g vercel

# Deploy directly from workspace root
vercel --prod
```

---

## Step 2: Adding Domain on Vercel

1. In your Vercel Project Dashboard, navigate to **Settings** → **Domains**.
2. Type `aqualuxparkingcarwash.com` and click **Add**.
3. Select **Add aqualuxparkingcarwash.com and www.aqualuxparkingcarwash.com**.
4. Vercel will present the required DNS Records:
   - **A Record**: Pointing `@` to `76.76.21.21`
   - **CNAME Record**: Pointing `www` to `cname.vercel-dns.com`

---

## Step 3: Configuring DNS Records at Hostinger

1. Log into your [Hostinger hPanel Account](https://hpanel.hostinger.com/).
2. Navigate to **Domains** → Select **aqualuxparkingcarwash.com**.
3. Click **DNS / Name Servers** in the side navigation.
4. Add / Update the following DNS Records:

| Type  | Name | Value / Points To    | TTL  |
| ----- | ---- | -------------------- | ---- |
| **A** | `@`  | `76.76.21.21`        | 3600 |
| **CNAME** | `www` | `cname.vercel-dns.com` | 3600 |

*(Note: Remove any pre-existing default A records pointing to Hostinger park IPs).*

---

## Step 4: Verification & SSL Provisioning

1. Return to the Vercel Domains tab.
2. Click **Refresh / Verify DNS**.
3. Once DNS propagation completes (usually 2–15 minutes), Vercel automatically generates a free Let's Encrypt **TLS/SSL Certificate** for `https://aqualuxparkingcarwash.com`.
4. Your site is live, secure, and fully indexable!
