/**
 * Web Crypto API-based cryptographic service for STRATEX MBA.
 * Uses PBKDF2 with SHA-256 and 100,000 iterations for password hashing,
 * along with cryptographically random salts and constant-time equality checks.
 */

const textToBuffer = (str: string): Uint8Array => new TextEncoder().encode(str);

const bufferToHex = (buffer: ArrayBuffer | Uint8Array): string => {
  const bytes = buffer instanceof Uint8Array ? buffer : new Uint8Array(buffer);
  return Array.from(bytes)
    .map(b => b.toString(16).padStart(2, '0'))
    .join('');
};

const hexToBuffer = (hex: string): Uint8Array => {
  const matches = hex.match(/.{1,2}/g) || [];
  return new Uint8Array(matches.map(byte => parseInt(byte, 16)));
};

const toArrayBuffer = (arr: Uint8Array): ArrayBuffer => {
  const copy = new Uint8Array(arr.byteLength);
  copy.set(arr);
  return copy.buffer as ArrayBuffer;
};

/**
 * Generate cryptographically random hex salt.
 */
export const generateSalt = (bytes: number = 16): string => {
  const arr = new Uint8Array(bytes);
  crypto.getRandomValues(arr);
  return bufferToHex(arr);
};

/**
 * Generate cryptographically random session token (32 bytes = 64 hex chars).
 */
export const generateSessionToken = (): string => {
  const arr = new Uint8Array(32);
  crypto.getRandomValues(arr);
  return bufferToHex(arr);
};

/**
 * Hash password or sensitive value using PBKDF2-HMAC-SHA256 with 100,000 iterations.
 */
export const hashPassword = async (password: string, saltHex: string): Promise<string> => {
  const rawPasswordBuffer = toArrayBuffer(textToBuffer(password));
  const keyMaterial = await crypto.subtle.importKey(
    'raw',
    rawPasswordBuffer,
    { name: 'PBKDF2' },
    false,
    ['deriveBits', 'deriveKey']
  );

  const saltBuffer = toArrayBuffer(hexToBuffer(saltHex));

  const derivedBits = await crypto.subtle.deriveBits(
    {
      name: 'PBKDF2',
      salt: saltBuffer,
      iterations: 100000,
      hash: 'SHA-256'
    },
    keyMaterial,
    256 // 256 bits = 32 bytes
  );

  return bufferToHex(derivedBits);
};

/**
 * Constant-time string equality comparison to guard against timing analysis attacks.
 */
export const verifyHash = (a: string, b: string): boolean => {
  if (a.length !== b.length) return false;
  let result = 0;
  for (let i = 0; i < a.length; i++) {
    result |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return result === 0;
};
