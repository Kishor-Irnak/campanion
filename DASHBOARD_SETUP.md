# 📊 Companion Dashboard — View Form Submissions

This guide walks you through building a **protected admin dashboard** inside your existing Next.js companion project to view all contact form submissions stored in Firestore.

---

## 🗂️ What Data Is Saved

Every time the contact form is submitted, a document is saved to the **`contacts`** collection in Firestore with these fields:

| Field         | Type      | Example                   |
| ------------- | --------- | ------------------------- |
| `name`        | string    | `"Rahul Sharma"`          |
| `email`       | string    | `"rahul@brand.com"`       |
| `company`     | string    | `"Brand XYZ"` (optional)  |
| `platform`    | string    | `"meta"` or `"google"`    |
| `target`      | string    | `"lead"` or `"sales"`     |
| `budget`      | string    | `"2000"`                  |
| `submittedAt` | Timestamp | Firebase server timestamp |

---

## 🔥 Step 1 — Fix Firestore Security Rules

By default Firestore blocks all reads. Go to:

**[Firebase Console](https://console.firebase.google.com) → evoclabs-41905 → Firestore Database → Rules**

Replace the rules with this:

```js
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {

    // Public write: contact form submissions
    match /contacts/{docId} {
      allow create: if true;
      // Only allow reads if authenticated (admin only)
      allow read: if request.auth != null;
    }
  }
}
```

Click **Publish**.

> ⚠️ This allows anyone to **submit** the form, but only authenticated users can **read** submissions.

---

## 🔐 Step 2 — Enable Email/Password Auth (One-Time Setup)

So only YOU can log into the dashboard:

1. Go to **Firebase Console → Authentication → Sign-in method**
2. Enable **Email/Password**
3. Go to **Users → Add User**
4. Add your admin email + password (e.g. `admin@evoclabs.com`)

---

## 📁 Step 3 — Project File Structure

Create these files inside your `companion` Next.js project:

```
app/
  dashboard/
    page.tsx          ← Main dashboard page (protected)
    login/
      page.tsx        ← Login page
components/
  dashboard/
    LeadsTable.tsx    ← Table of form submissions
lib/
  firebase.ts         ← Already exists ✅
```

---

## 📄 Step 4 — Create `app/dashboard/login/page.tsx`

```tsx
"use client";

import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const auth = getAuth();
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/dashboard");
    } catch {
      setError("Invalid email or password.");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#080808] flex items-center justify-center px-4">
      <div className="w-full max-w-sm bg-stone-900/50 border border-stone-800 rounded-2xl p-8">
        <h1 className="text-stone-100 font-bold text-2xl mb-1">Admin Login</h1>
        <p className="text-stone-500 text-sm mb-6">Companion Dashboard</p>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="text-[11px] uppercase tracking-widest text-stone-500 font-semibold">
              Email
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-1.5 bg-stone-950 border border-stone-800 rounded-xl px-4 py-3 text-sm text-stone-200 outline-none focus:ring-1 focus:ring-stone-600"
              placeholder="admin@evoclabs.com"
            />
          </div>
          <div>
            <label className="text-[11px] uppercase tracking-widest text-stone-500 font-semibold">
              Password
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-1.5 bg-stone-950 border border-stone-800 rounded-xl px-4 py-3 text-sm text-stone-200 outline-none focus:ring-1 focus:ring-stone-600"
              placeholder="••••••••"
            />
          </div>

          {error && <p className="text-red-400 text-xs">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-stone-100 text-stone-950 font-semibold text-sm rounded-xl hover:bg-white transition-all disabled:opacity-50"
          >
            {loading ? "Signing in…" : "Sign In →"}
          </button>
        </form>
      </div>
    </div>
  );
}
```

---

## 📄 Step 5 — Create `components/dashboard/LeadsTable.tsx`

```tsx
"use client";

import { useEffect, useState } from "react";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "@/lib/firebase";

type Lead = {
  id: string;
  name: string;
  email: string;
  company?: string;
  platform: string;
  target: string;
  budget: string;
  submittedAt: { seconds: number } | null;
};

const PLATFORM_LABEL: Record<string, string> = {
  meta: "Meta Ads",
  google: "Google Ads",
};

const TARGET_LABEL: Record<string, string> = {
  lead: "Lead Generation",
  sales: "Sales / E-commerce",
};

export default function LeadsTable() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      const q = query(
        collection(db, "contacts"),
        orderBy("submittedAt", "desc"),
      );
      const snap = await getDocs(q);
      setLeads(snap.docs.map((doc) => ({ id: doc.id, ...doc.data() }) as Lead));
      setLoading(false);
    };
    fetch();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20 text-stone-600 text-sm">
        Loading submissions…
      </div>
    );
  }

  if (leads.length === 0) {
    return (
      <div className="flex items-center justify-center py-20 text-stone-600 text-sm">
        No submissions yet.
      </div>
    );
  }

  return (
    <div className="overflow-x-auto rounded-2xl border border-stone-800">
      <table className="w-full text-sm text-left">
        <thead className="bg-stone-900/60 text-[11px] uppercase tracking-widest text-stone-500 border-b border-stone-800">
          <tr>
            <th className="px-5 py-4">#</th>
            <th className="px-5 py-4">Name</th>
            <th className="px-5 py-4">Email</th>
            <th className="px-5 py-4">Company</th>
            <th className="px-5 py-4">Platform</th>
            <th className="px-5 py-4">Goal</th>
            <th className="px-5 py-4">Budget / Day</th>
            <th className="px-5 py-4">Submitted</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-stone-800/60">
          {leads.map((lead, i) => {
            const date = lead.submittedAt
              ? new Date(lead.submittedAt.seconds * 1000).toLocaleDateString(
                  "en-IN",
                  {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  },
                )
              : "—";

            return (
              <tr
                key={lead.id}
                className="hover:bg-stone-900/30 transition-colors"
              >
                <td className="px-5 py-4 text-stone-600">{i + 1}</td>
                <td className="px-5 py-4 text-stone-100 font-medium">
                  {lead.name}
                </td>
                <td className="px-5 py-4 text-stone-400">
                  <a
                    href={`mailto:${lead.email}`}
                    className="hover:text-stone-200 transition-colors"
                  >
                    {lead.email}
                  </a>
                </td>
                <td className="px-5 py-4 text-stone-500">
                  {lead.company || "—"}
                </td>
                <td className="px-5 py-4">
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    {PLATFORM_LABEL[lead.platform] ?? lead.platform}
                  </span>
                </td>
                <td className="px-5 py-4">
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-purple-500/10 text-purple-400 border border-purple-500/20">
                    {TARGET_LABEL[lead.target] ?? lead.target}
                  </span>
                </td>
                <td className="px-5 py-4 text-stone-300 font-medium">
                  {lead.budget
                    ? `₹${Number(lead.budget).toLocaleString("en-IN")}`
                    : "—"}
                </td>
                <td className="px-5 py-4 text-stone-500 text-xs">{date}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
```

---

## 📄 Step 6 — Create `app/dashboard/page.tsx`

```tsx
"use client";

import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import LeadsTable from "@/components/dashboard/LeadsTable";

export default function DashboardPage() {
  const [authReady, setAuthReady] = useState(false);
  const [authed, setAuthed] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const auth = getAuth();
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthed(true);
      } else {
        router.replace("/dashboard/login");
      }
      setAuthReady(true);
    });
    return unsub;
  }, [router]);

  const handleLogout = async () => {
    await signOut(getAuth());
    router.push("/dashboard/login");
  };

  if (!authReady) {
    return (
      <div className="min-h-screen bg-[#080808] flex items-center justify-center text-stone-600 text-sm">
        Checking auth…
      </div>
    );
  }

  if (!authed) return null;

  return (
    <div className="min-h-screen bg-[#080808] px-6 py-10 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-10">
        <div>
          <h1 className="text-stone-100 font-bold text-2xl tracking-tight">
            companion.{" "}
            <span className="text-stone-600 font-normal">/ Dashboard</span>
          </h1>
          <p className="text-stone-600 text-sm mt-1">
            All contact form submissions
          </p>
        </div>
        <button
          onClick={handleLogout}
          className="px-4 py-2 rounded-xl border border-stone-800 text-stone-500 text-sm hover:border-stone-700 hover:text-stone-300 transition-all"
        >
          Sign Out
        </button>
      </div>

      {/* Table */}
      <LeadsTable />
    </div>
  );
}
```

---

## 🔧 Step 7 — Enable Firebase Auth in `lib/firebase.ts`

Add auth export so login works. Replace your existing `lib/firebase.ts` with:

```ts
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
```

---

## ✅ Step 8 — Test It

1. Start your dev server:

   ```bash
   npm run dev
   ```

2. Go to: **`http://localhost:3000/dashboard/login`**

3. Sign in with the admin email + password you created in Step 2

4. You'll be redirected to **`/dashboard`** — you'll see your table of leads 🎉

---

## 🚀 Dashboard URL (After Deploy)

Once deployed to Vercel, your dashboard will be at:

```
https://your-domain.com/dashboard/login
```

> Share this only with yourself. The route is not linked anywhere on the public site.

---

## 📈 Bonus — Quick Stats Cards (Optional)

Add this above `<LeadsTable />` in `app/dashboard/page.tsx` to show summary numbers:

```tsx
{
  /* Stats */
}
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
  {[
    { label: "Total Leads", value: leads.length, color: "text-stone-100" },
    {
      label: "Meta Ads",
      value: leads.filter((l) => l.platform === "meta").length,
      color: "text-blue-400",
    },
    {
      label: "Google Ads",
      value: leads.filter((l) => l.platform === "google").length,
      color: "text-yellow-400",
    },
    {
      label: "Avg Budget",
      value: `₹${Math.round(leads.reduce((s, l) => s + Number(l.budget || 0), 0) / (leads.length || 1)).toLocaleString("en-IN")}`,
      color: "text-green-400",
    },
  ].map(({ label, value, color }) => (
    <div
      key={label}
      className="bg-stone-900/40 border border-stone-800 rounded-2xl p-5"
    >
      <p className="text-stone-600 text-xs uppercase tracking-widest mb-2">
        {label}
      </p>
      <p className={`font-bold text-2xl ${color}`}>{value}</p>
    </div>
  ))}
</div>;
```

> Note: For the stats cards, you'll need to lift `leads` state up to `page.tsx` and pass it as a prop to `LeadsTable`.

---

## 🔒 Security Checklist

- [x] `.env.local` is in `.gitignore` — keys never pushed to GitHub
- [x] Firestore rules block public reads
- [x] Dashboard requires authentication
- [ ] (Optional) Add IP allowlist in Firebase for extra protection
