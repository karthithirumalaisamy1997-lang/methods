// Polyfill for the window.storage API (get/set/delete/list) using the
// browser's localStorage, so the app works as a normal deployed website
// (Vercel, Netlify, etc.) without depending on the Claude.ai artifact
// storage sandbox.
//
// Data is stored per-browser (localStorage), scoped under a fixed prefix
// so it doesn't collide with other apps on the same domain.

const NS = 'smv_insight::';

function nsKey(key) {
  return NS + key;
}

function install() {
  window.storage = {
    async get(key, _shared = false) {
      try {
        const raw = localStorage.getItem(nsKey(key));
        if (raw === null) return null;
        return { key, value: raw, shared: false };
      } catch (e) {
        return null;
      }
    },

    async set(key, value, _shared = false) {
      try {
        localStorage.setItem(nsKey(key), value);
        return { key, value, shared: false };
      } catch (e) {
        console.error('storage.set failed', e);
        return null;
      }
    },

    async delete(key, _shared = false) {
      try {
        localStorage.removeItem(nsKey(key));
        return { key, deleted: true, shared: false };
      } catch (e) {
        return null;
      }
    },

    async list(prefix = '', _shared = false) {
      try {
        const keys = [];
        const full = NS + prefix;
        for (let i = 0; i < localStorage.length; i++) {
          const k = localStorage.key(i);
          if (k && k.startsWith(full)) {
            keys.push(k.slice(NS.length));
          }
        }
        return { keys, prefix, shared: false };
      } catch (e) {
        return null;
      }
    }
  };
}

install();
